import gsap from "gsap";
import Draggable from "gsap/dist/Draggable";
import $ from "jquery"


const tile = (obj) => {
    var threshold = "60%";
    var dropZones = {};
    var letters   = [];

    $(`[${obj.dropzone}]`).each(function() {

        var zone = $(this);
        var name = zone.attr(obj.dropzone);

        dropZones[name] = {
            element : zone,
            name    : name,
            sorted  : zone.data("sorted"),
            clones  : zone.find(`.${obj.clone}`),
            letters : zone.find(`.${obj.letter}`)
        };
    });

    $(`.${obj.tiles}`).each(function(index) {

        var element = $(this);
        var wrapper = element.parent();
        var offset  = element.position();
        var zone    = dropZones.main;

        var scope = {
            clone   : element.clone().attr("clone", "").prependTo(zone.clones),
            element : element,
            wrapper : wrapper,
            width   : wrapper.outerWidth(),
            height  : wrapper.outerHeight(),
            moved   : false,
            index   : index,
            zone    : zone,
            get x() { return getPosition(wrapper, this.zone.clones, offset).x; },
            get y() { return getPosition(wrapper, this.zone.clones, offset).y; },
            get cloneX() { return getPosition(this.clone, this.zone.clones).x; },
            get cloneY() { return getPosition(this.clone, this.zone.clones).y; },
            get previous() { return getPrevious(this, this.zone); }
        };

        scope.draggable = createDraggable(scope);

        // reversed order
        letters.unshift(scope);

        element.on("mousedown touchstart", scope, startDraggable);
    });


    // START DRAGGABLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    function startDraggable(event) {

        var letter = event.data;

        // Maak element onzichtbaar
        // Maak kloon zichtbaar en verplaats deze naar de coordinaten van het element
        gsap.set(letter.element, { autoAlpha: 0 });
        gsap.set(letter.clone, { x: letter.x, y: letter.y, autoAlpha: 1 });

        letter.draggable.startDrag(event.originalEvent);
    }

    // GET PREVIOUS :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    function getPrevious(letter, zone) {

        if (!zone.sorted) {
            return { target: zone.letters, insert: "appendTo"};
        }

        var values = letters.filter(function(value) {
            return value.zone === letter.zone && value.index < letter.index;
        });

        return {
            target: values[0] ? values[0].wrapper : zone.letters,
            insert: values[0] ? "insertAfter" : "prependTo"
        };
    }

    // CREATE DRAGGABLE :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    function createDraggable(letter) {

        var clone   = letter.clone;
        var wrapper = letter.wrapper;

        letter.draggable = new Draggable(clone, {
            onPress   : setActive,
            onDrag    : collapseSpace,
            onRelease : dropTile
        });

        return letter.draggable;
        ///////

        function setActive() {
            gsap.to(clone, { scale: 1.2, autoAlpha: 0.75, duration:0.15 });
        }

        function collapseSpace() {
            if (!letter.moved) {
                if (!this.hitTest(wrapper)) {
                    letter.moved = true;
                    gsap.to(wrapper, 0.3, { width: 0, height: 0, duration:0.3 });
                }
            }
        }

        function dropTile() {

            var name = undefined;
            var self = this;

            $.each(dropZones, function(key, zone) {

            if (self.hitTest(zone.element, threshold) && letter.zone !== zone) {

                    name = "tile " + zone.name;
                    letter.zone = zone;

                    // Get the previous element and the insert method
                    var previous = letter.previous;
                    wrapper[previous.insert](previous.target);

                    // Position the clone inside its new container
                    gsap.set(clone, { x: letter.cloneX, y: letter.cloneY });
                    zone.clones.prepend(clone);
                }
            });

            moveBack(letter, name);
        }
    }

    // MOVE BACK ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    function moveBack(letter, className) {

        var clone   = letter.clone;
        var element = letter.element;
        var wrapper = letter.wrapper;

        gsap.to(wrapper, { width: letter.width, height: letter.height, duration: 0.2 });
        gsap.to(clone,  { scale: 1, autoAlpha: 1, x: letter.x, y: letter.y, onComplete: done, delay: 0.02, duration: 0.3 });
        
        if (className) gsap.to([element, clone], { className: className, duration: 0.3 });

        function done() {
            letter.moved = false;
            gsap.set(clone, { autoAlpha: 0 });
            gsap.set(element, { autoAlpha: 1 });
        }
    }

    // GET POSITION :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
    function getPosition(target1, target2, offset) {

        var position1 = target1.offset();
        var position2 = target2.offset();

        offset = offset || { left: 0, top: 0 };

        return {
            x: position1.left - position2.left + offset.left,
            y: position1.top  - position2.top  + offset.top
        };
    }
}

export default tile
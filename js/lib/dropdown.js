(function () {
    // Define our constructor
    this.Dropdown = function () {
        'use strict';

        var defaults = {
            hint: "Select...",
            initialValue: "",
            options: [],
            name: ""
        }

        this.options = extendDefaults(defaults, arguments[0]);

        // js objects
        this.wrapper = this.options.wrapper;
        this.optionContainer;
        this.displaySpan;
        this.optionElements = [];
        this.input;

        this.dropdownId = this.wrapper.id;
        this.wrapper.id = this.dropdownId + "-dropdown";

        this.isOpen = false;

        this.changeEvent = document.createEvent('HTMLEvents');
        this.changeEvent.initEvent('change', true, false);

        buildElement.call(this);
        initializeEvents.call(this);
    }

    Dropdown.prototype.addChangedEventListener = function (eventHandler) {
        this.input.addEventListener('change', eventHandler);
    }

    Dropdown.prototype.getValue = function () {
        return this.input.value;
    }

    Dropdown.prototype.selectOption = function (value) {
        for (var i = 0; i < this.optionElements.length; i++) {
            if (this.optionElements[i].id == value) {
                selectOption.call(this, this.optionElements[i]);
            }
        }
    }

    Dropdown.prototype.open = function () {
        this.options.wrapper.classList.add("open");
        this.optionContainer.style.display = "block";
        this.isOpen = true;
    }

    Dropdown.prototype.close = function () {
        this.wrapper.classList.remove("open");
        this.optionContainer.style.display = "none";
        this.isOpen = false;
    }

    Dropdown.prototype.prependOption = function (id, value) {
        var li = createOption.call(this, id, value);
        this.optionContainer.insertBefore(li, this.optionContainer.firstChild);
    }

    Dropdown.prototype.appendOption = function (id, value) {
        var li = createOption.call(this, id, value);
        this.optionContainer.appendChild(li);
    }


    Dropdown.prototype.removeAllOptions = function (id) {
        for (var i = 0; i < this.optionElements.length; i++) {
            this.optionElements[i].remove();
        }

    }

    function optionElementClicked(e) {
        e.stopImmediatePropagation()
        var clickedElement = e.currentTarget;
        selectOption.call(this, clickedElement);
        this.close.call(this);
    }

    function wrapperClicked() {
        if (this.isOpen) {
            this.close.call(this);
        } else {
            this.open.call(this);
        }
    }

    function selectOption(optionElement) {
        this.displaySpan.innerHTML = optionElement.innerHTML;
        this.input.value = optionElement.id;
        this.input.dispatchEvent(this.changeEvent);
    }

    function createOption(id, value) {
        var li = document.createElement("li");
        li.id = id;
        li.innerHTML = value;
        li.addEventListener('click', optionElementClicked.bind(this));
        this.optionElements.push(li);
        return li;
    }

    function buildElement() {
        this.wrapper.classList.add("dropdown");

        var frag = document.createDocumentFragment();

        // <span class="selected">(options.hint)</span>
        this.displaySpan = document.createElement("span");
        this.displaySpan.classList.add("selected");
        this.displaySpan.innerHTML = this.options.hint;
        frag.appendChild(this.displaySpan);

        // <input type="hidden" id="(options.id)" value="(options.initialValue)" name="(options.name)"/>
        this.input = document.createElement("input");
        this.input.type = "hidden";
        this.input.id = this.dropdownId;
        this.input.value = this.options.initialValue;
        this.input.name = this.options.name;
        frag.appendChild(this.input);

        //<ul></ul>
        this.optionContainer = document.createElement("ul");

        //<li id="(id)">(value)</li>
        for (var i = 0; i < this.options.options.length; i++) {
            var thisOption = this.options.options[i];
            this.appendOption(thisOption.id, thisOption.value);
        }

        frag.appendChild(this.optionContainer);

        this.wrapper.appendChild(frag);
    }

    function initializeEvents() {
        window.addEventListener('click', this.close());
        this.wrapper.addEventListener('click', wrapperClicked.bind(this));
        // option event listeners are added when they are created
    }

    // Utility method to extend defaults with user options
    function extendDefaults(source, properties) {
        var property;
        for (property in properties) {
            if (properties.hasOwnProperty(property)) {
                source[property] = properties[property];
            }
        }
        return source;
    }

}());

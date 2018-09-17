class ShipSettings{
    createWindow() {
        this.shipSettingsWindow = WindowFactory.createWindow({
          width: 300,
          text: "Ship Settings"
        });
    
        let controls = [
        {
            name: 'autoChangeConfig',
            labelText: 'Change Config',
            appendTo: this.shipSettingsWindow,
            event: function () {
                $(".configs").prop("disabled", !this.checked );
                window.settings.settings.autoChangeConfig = this.checked;
            }
        },
        {
            name: 'changeFormation',
            labelText: 'Change Drone Formation',
            appendTo: this.shipSettingsWindow,
            event: function () {
                $(".formations").prop("disabled", !this.checked);
                window.settings.settings.changeFormation = this.checked;
            }
        },
        {
            name: 'useAbility',
            labelText: 'Use Ability',
            appendTo: this.shipSettingsWindow,
            event: function () {
                $(".ability").prop("disabled", !this.checked);
                window.settings.settings.useAbility = this.checked;
            }
        },
        {
            name: 'attackConfig',
            labelText: 'Attack config slot: ',
            type: "select",
            disabled: true && !window.settings.settings.autoChangeConfig,
            appendTo: this.shipSettingsWindow,
            options: {"1":1, "2":2},
            attrs:{
                class: "configs"
            },
            event: function () {
                window.settings.settings.attackConfig = this.value;
            }
        },
        {
            name: 'flyingConfig',
            labelText: 'Flying Config Slot: ',
            type: "select",
            disabled: true && !window.settings.settings.autoChangeConfig,
            appendTo: this.shipSettingsWindow,
            options: {"1":1, "2":2},
            attrs:{
                class: "configs"
            },
            event: function () {
                window.settings.settings.flyingConfig = this.value;
            }
        },
        {
            name: 'attackFormation',
            labelText: 'Attack formation slot: ',
            type: "select",
            disabled: true && !window.settings.settings.changeFormation,
            appendTo: this.shipSettingsWindow,
            options: {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9},
            attrs:{
                class: "formations"
            },
            event: function () {
                window.settings.settings.attackFormation = this.value;
            }
        },
        {
            name: 'flyingFormation',
            labelText: 'Flying formation slot: ',
            type: "select",
            disabled: true && !window.settings.settings.changeFormation,
            appendTo: this.shipSettingsWindow,
            options: {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9},
            attrs:{
                class: "formations "
            },
            event: function () {
                window.settings.settings.flyingFormation = this.value;
            }
        },
        {
            name: 'abilitySlot',
            labelText: 'Ship Ability Slot: ',
            type: "select",
            disabled: true && !window.settings.settings.useAbility,
            appendTo: this.shipSettingsWindow,
            options: {"0":0, "1":1, "2":2, "3":3, "4":4, "5":5, "6":6, "7":7, "8":8, "9":9},
            attrs:{
                class: "ability"
            },
            event: function () {
                window.settings.settings.abilitySlot = this.value;
            }
        },
        {
            name: 'reviveType',
            labelText: 'Revive type: ',
            type: "select",
            appendTo: this.shipSettingsWindow,
            options: {0:"base", 1:"portal", 2:"place"},
            attrs:{
            },
            event: function () {
                window.settings.settings.reviveType = this.value;
            }
        },
        {
            name: 'reviveLimit',
            labelText: 'Revive Limit<span> (5)</span>: ',
            type: "range",
            appendTo: this.shipSettingsWindow,
            labelBefore: true,
            attrs:{
                min: 0,
                max: 100,
                step: 1,
                value: 5
            },
            event: function () {
                window.settings.settings.reviveLimit = this.value;
                $('span:last-child', this.label).text(' (' + this.value + ')');
            }
        }

        ];

        controls.forEach((control) => {
            if(control.type == "select"){
                this[control.name] = ControlFactory.select(control);
            }else{
                this[control.name] = ControlFactory.createControl(control);
            }
            
        });
    }
}
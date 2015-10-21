angular.module('checklistApp', ['ngSanitize']).controller('checklistCtrl', [function() {
    var self = this;
    self.items = [
        {
            step: "Prepare",
            id: "P1",
            equipment: "Camcorder",
            details: "You can use an HD or a standard definition camcorder, but it is recommended that you set your HD camcorder to standard definition.",
            checkBox: ""
        },
        {
            step: "Prepare",
            id: "P2",
            equipment: "Tripod",
            details: "A tripod is highly recommended as it will keep the camcorder steady during your broadcast.",
            checkBox: ""
        },
        {
            step: "Prepare",
            id: "P3",
            equipment: "Laptop Computer",
            details: "You will attach the camcorder to this computer.",
            checkBox: ""
        },
        {
            step: "Prepare",
            id: "P4",
            equipment: "3G/4G Network Cards",
            details: "The number of cards is determined by how many USB ports are in your computer. These cards will connect your computer to your 3G & 4G networks.",
            checkBox: ""
        },
        {
            step: "Prepare",
            id: "P5",
            equipment: "Cable",
            details: "Cable will be used to connect 3G/4G network cards to the USB ports in your computer.",
            checkBox: ""
        },
        {
            step: "Prepare",
            id: "P6",
            equipment: "Power Source for Camcorder & Computer",
            details: "If you use batteries, be sure to test batteries and backup batteries, so that they last the length of the broadcast. Otherwise, identifiy available power outlets at the location of your broadcast.",
            checkBox: ""
        },
        {
            step: "Prepare",
            id: "P7",
            equipment: "Sunscreen/Sunglasses/Water",
            details: "Don't forget to deal with the elements as necessary.",
            checkBox: ""
        }

    ]

}]);





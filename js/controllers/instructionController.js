angular.module('instructionsApp', ['ngSanitize']).controller('instructionsCtrl', [ 
    function(){
        var self = this;
        self.showValue = false;
        self.showDetails = function(id){
            for (var i = 0; i < this.steps.length; i++) {


                if (self.steps[i].id === id) {
                    self.name = self.steps[i].name;
                    self.step = self.steps[i].step;
                    self.description = self.steps[i].description;
                    self.showValue = true;
                }
            }
            
        }
        this.hideDetails = function(){
            this.showValue = false;
        }
        this.steps = [
            {
                name: "Acquire Equipment",
                id: "P1",
                step: "Prepare",
                description:
                "<p class= 'popUpText'>Here is a list of equipment that you will need before the setup and broadcast. For a checklist to have at the broadcast, click the button below.</p>" +
                            "<ol class='popUpText'>" +
                              "<li>Camcorder or other filming device</li>" +
                              "<li>Wireless IP Network Services: directly from carrier or WISP (Wireless Internet Service Provider)</li>" +
                              "<li>Computer/s with Vazzt Capture Server software that you can bring to broadcast location</li>" +
                              "<li>A server computer at your central hub with internet access and Vazzt Capture Server software</li>" +
                              "<li>Battery or power outlet for camcorder and computer</li>" +
                              "<li>Tripod</li>" +
                            "</ol>" +
                            "<button class= 'btn btn-default btn-lg'>Link to Checklist</button>"
            },
            {
                name: "Arrange for 3G/4G Data Services",
                id: "P2",
                step: "Prepare",
                description: "<p>For your broadcast, you will need&nbsp;3G &amp; 4G Wireless Cards&nbsp;that will allow you to pick up IP networks (wireless intenet connections)&nbsp;from multiple providers.&nbsp;Vazzt will bond&nbsp; these networks&nbsp;to make your broadcast faster.&nbsp;</p><p>There is no&nbsp;theoretical limit to the number of IP Networks that can be bonded with Vazzt. The practical number depends on the number of data services in a given location for which you are a subcriber and the number of ports on your laptop. When you set up for the broadcast, you will insert the 3G &amp; 4G Wireless Cards into the laptop that you will have at the site of your broadcast.&nbsp;</p><p>There are a variety of 3G &amp; 4G USB Wireless Cards&nbsp;that are provided by telco carrier services to enable operation.&nbsp; These cards can often work immediately with Vazzt VOTM.&nbsp; Some cards required manually setting parameters to work with Vazzt VOTM.&nbsp; We can recommend at least the following cards:</p><table border=1 cellpadding=1 cellspacing=1><tbody><tr><td><h3>Operator</h3><td><h3>Product</h3><td><h3>Maker&nbsp;</h3><td><h3>Model</h3><tr><td>&nbsp;<td>T-mobile webConnect USB Laptop Stick<td>HUAW EI<td>UMG181<tr><td>Verizon<td>Verizon Wireless USB760 Modem<td>Novatel Wireless<td>USB760<tr><td>&nbsp;<td>Sprint Novatel Wireless U727<td>Novatel Wireless<td>U727<tr><td>&nbsp;<td>Verizon Wireless UMW190 Global USB Modem<td>Paintech/Curitel<td>UMW190<tr><td>AT&amp;T<td>AT &amp; T USB Connect Lightning<td>Sierra Wireless<td>UB 305<tr><td>&nbsp;<td>Compass 597<td>Sierra Wireless<td>&nbsp;</table><p>&nbsp;</p><p>You can bond together &ldquo;any&rdquo; IP Networks that can carry IP traffic, wired or wireless.&nbsp; These include 3G/4G, Satellite, WiFi, Bluetooth, fiber optics, terrestrial wire Internet, etc.&nbsp; If it can carry IP traffic, Vazzt can bond it.</p><p>&nbsp;</p><p>&nbsp;</p>"
            },
            {
                name: "Install VazztCaster",
                id: "P3",
                step: "Prepare",
                description: "<p>Only a registered Vazzt Producer can download the <strong>VazztCasterInstaller.exe<\/strong> program.&nbsp; The camera persons who will cover an Event for a producer must get this program from the Producer and load it on their laptop.<\/p><p>Launch the VaatCasterInstaller.exe program and follow the prompts to install the <strong>VazztCaster.exe<\/strong> program which the Camera person will use to cover the Event.<\/p><p>&nbsp;<\/p><p>&nbsp;<\/p><p>&nbsp;<\/p>"
            },
            {
                name: "Get Login Credentials",
                id: "P4",
                step: "Prepare",
                description: "<p>The camera man who will cover the Event must get the Login Credentials for the event from the producer.&nbsp; The credentials are:<\/p><ul><li>Producer&rsquo;s Name as it appears on Vazzt.com<\/li><li>Channel Name to be used for the Event to be covered<\/li><li>Password for that Channel<\/li><\/ul>"
            },
            
        ]
    }
    ]
    );
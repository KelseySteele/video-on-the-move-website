angular.module('instructionsApp', ['ngSanitize']).controller('instructionsCtrl', [

    function() {
        var self = this;
        self.showValue = false;
        self.showDetails = function(id) {
            for (var i = 0; i < this.steps.length; i++) {
                if (self.steps[i].id === id) {
                    self.name = self.steps[i].name;
                    self.step = self.steps[i].step;
                    self.description = self.steps[i].description;
                    self.showValue = true;
                }
            }
        };
        self.hideDetails = function() {
            self.showValue = false;
        };
        self.steps = [{
            name: "Acquire Equipment",
            id: "P1",
            step: "Prepare",
            description: "<p class= 'popUpText'>Here is a list of equipment that you will need before the setup and broadcast. For a checklist to have at the broadcast, click the button below.</p>" +
                "<ol class='popUpText'>" +
                "<li>Camcorder or other filming device</li>" +
                "<li>Wireless IP Network Services: directly from carrier or WISP (Wireless Internet Service Provider)</li>" +
                "<li>Computer/s with Vazzt Capture Server software that you can bring to broadcast location</li>" +
                "<li>A server computer at your central hub with internet access and Vazzt Capture Server software</li>" +
                "<li>Battery or power outlet for camcorder and computer</li>" +
                "<li>Tripod</li>" + "</ol>" +
                "<button class= 'btn btn-default btn-lg'>Link to Checklist</button>"
        }, {
            name: "Arrange for 3G/4G Data Services",
            id: "P2",
            step: "Prepare",
            description: "<p>For your broadcast, you will need&nbsp;3G &amp; 4G Wireless Cards&nbsp;that will allow you to pick up IP networks (wireless intenet connections)&nbsp;from multiple providers.&nbsp;Vazzt will bond&nbsp; these networks&nbsp;to make your broadcast faster.&nbsp;</p><p>There is no&nbsp;theoretical limit to the number of IP Networks that can be bonded with Vazzt. The practical number depends on the number of data services in a given location for which you are a subcriber and the number of ports on your laptop. When you set up for the broadcast, you will insert the 3G &amp; 4G Wireless Cards into the laptop that you will have at the site of your broadcast.&nbsp;</p><p>There are a variety of 3G &amp; 4G USB Wireless Cards&nbsp;that are provided by telco carrier services to enable operation.&nbsp; These cards can often work immediately with Vazzt VOTM.&nbsp; Some cards required manually setting parameters to work with Vazzt VOTM.&nbsp; We can recommend at least the following cards:</p><table border=1 cellpadding=1 cellspacing=1><tbody><tr><td><h3>Operator</h3><td><h3>Product</h3><td><h3>Maker&nbsp;</h3><td><h3>Model</h3><tr><td>&nbsp;<td>T-mobile webConnect USB Laptop Stick<td>HUAW EI<td>UMG181<tr><td>Verizon<td>Verizon Wireless USB760 Modem<td>Novatel Wireless<td>USB760<tr><td>&nbsp;<td>Sprint Novatel Wireless U727<td>Novatel Wireless<td>U727<tr><td>&nbsp;<td>Verizon Wireless UMW190 Global USB Modem<td>Paintech/Curitel<td>UMW190<tr><td>AT&amp;T<td>AT &amp; T USB Connect Lightning<td>Sierra Wireless<td>UB 305<tr><td>&nbsp;<td>Compass 597<td>Sierra Wireless<td>&nbsp;</table><p>&nbsp;</p><p>You can bond together &ldquo;any&rdquo; IP Networks that can carry IP traffic, wired or wireless.&nbsp; These include 3G/4G, Satellite, WiFi, Bluetooth, fiber optics, terrestrial wire Internet, etc.&nbsp; If it can carry IP traffic, Vazzt can bond it.</p><p>&nbsp;</p><p>&nbsp;</p>"
        }, {
            name: "Install VazztCaster",
            id: "P3",
            step: "Prepare",
            description: "<p>Only a registered Vazzt Producer can download the <strong>VazztCasterInstaller.exe<\/strong> program.&nbsp; The camera persons who will cover an Event for a producer must get this program from the Producer and load it on their laptop.<\/p><p>Launch the VaatCasterInstaller.exe program and follow the prompts to install the <strong>VazztCaster.exe<\/strong> program which the Camera person will use to cover the Event.<\/p><p>&nbsp;<\/p><p>&nbsp;<\/p><p>&nbsp;<\/p>"
        }, {
            name: "Get Login Credentials",
            id: "P4",
            step: "Prepare",
            description: "<p>The camera man who will cover the Event must get the Login Credentials for the event from the producer.&nbsp; The credentials are:<\/p><ul><li>Producer&rsquo;s Name as it appears on Vazzt.com<\/li><li>Channel Name to be used for the Event to be covered<\/li><li>Password for that Channel<\/li><\/ul>"
        }, {
            name: "Attach Camera",
            id: "S1",
            step: "Setup",
            description: "<p>There are many ways to attach you camera to your laptop.&nbsp; For digital camera output, we recommend connecting the camera with a wire to the faster firewire port &ndash; but the USB port will also work.&nbsp; As an example, for analog camera output you can use an external capture device (such as the Dazzle from Pinnacle) with a 3-port composite connector into the camera and a USB connection on the other end of the cable into the laptop.&nbsp; Also, there are many ways to interface a camera to an internal video capture card.&nbsp; See illustrations below:<\/p>"
        }, {
            name: "Launch VazztCaster",
            id: "S2",
            step: "Setup",
            figure: "../img/instructionsImages/launchVazztCaster.jpg",
            description: "<p>Launch the VazztCaster.exe program on your laptop by clicking on the Vazzt icon (red V) on your desktop. &nbsp;After launch, on the home page of VazztCaster click on the Login Icon (person) and enter the Credentials:<\/p><p>Next Click on the Video Settings Icon (blue camcorder)&nbsp; and enter your choice of&nbsp;<\/p><p>&nbsp;<\/p><p>Note that the VazztCaster will automatically set default values, if possible, in the Video Settings fields based on the camera attached, the IP networks it finds, and the audio equipment attached:<\/p><ul><li>Video Capture Devices<\/li><li>Video Resolution<\/li><li>Video Bandwidth<\/li><li>Aspect Ratio<\/li><li>Audio Capture Device<\/li><li>And other Audio parameters.&nbsp;<\/li><\/ul><p>However, you can manually override these.&nbsp; Click the OK button when you are finished.<\/p><p>Most cameras will automatically provide notification of the various resolutions that the camera can support.&nbsp; VazztCaster can detect this and by examining the bandwidth detected, also automatically, VazztCaster sets default resolution and bandwidth.<\/p><p>&nbsp;<\/p><p>&nbsp;<\/p>",
            alt: "Launch VazztCaster",
            imageCaption: "After launching VazztCaster, this is what your screen should look like."
        }, {
            name: "Start Broadcasting",
            id: "B1",
            step: "Broadcast",
            description: "<p>To start broadcasting live, click on the Start Transmission button (green arrow).&nbsp; The resulting screen might look like the image below.<\/p><p>In this example, there are 3 networks detected that are bonded together by the VazztCaster to provide a running average 1.267 Mbps.&nbsp; This enables good Standard Definition transmission.<\/p>"
        }, {
            name: "Stop Broadcasting",
            id: "B2",
            step: "Broadcast",
            description: "<p>If the bandwidth is not adequate to carry the resolution initially set or the bandwidth drops later on, stop the broadcast by clicking the Stop Transmission button (yellow square)&nbsp;and go back to Video Settings and select parameters that will work in bandwidth currently detected.&nbsp; Then Start the broadcast again.<\/p>"
        }, {
            name: "View Broadcast",
            id: "B3",
            step: "Broadcast",
            description: "<p>Live video coming into the Vazzt Enterprise Server at the Central Hub can be passed through (retransmitted) to a web site or other destination or multicast on a multicast-enabled network, accessed over the Internet from the web site and played out with a Flash Player, stored\/archived for future file delivery on demand or played out on schedule or on-demand.<\/p>"
        }];
    }
]);
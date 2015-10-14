angular.module('faqApp', ['ngSanitize']).controller('faqCtrl', function($scope) {
    $scope.faq =[
        {
        category: 'general',
        number: '1',
        question: 'What is Vazzt Video-On-The-Move?',
        answer: "<p>KenCast\'s Vazzt Video-On-The-Move makes it easy to capture high quality live video from vehicles, aircrafts, cars, and from on foot.Vazzt then distributes the live content from a central hub to users on the intenet or on a private network.</p>"
        },
        {
        category: 'general',
        number: '2',
        question: 'What do I need to get started with Vazzt VOTM service?',
        answer: '<p>You need to add 3 things to your computers and Internet resources.</p>' +
                '<ol>' +
                '<li>Wireless IP network services: directly from a carrier (e.g., Sprint EvDO, Verizon EvDO, T-Mobile UMTS, AT&T UMTS, Verizon LTE, Clear WiMAX, etc.) or  a WISP (Wireless Internet Service Provider). or your own private network (WiFi, Bluetooth, wire access fiber, etc.) connected to the Internet.</li>' +
                '<li>The Vazzt Capture Server software (to send the IPTV or file) on each of your laptops or netbooks or computers.</li>' +
                '<li>The Vazzt Enterprise Server software (to catch the IPTV or file) on a server computer at your central hub and this server must have Internet access.</li>' +
                '</ol>'
        },
        {
        category: 'general',
        number: '3',
        question: 'What is different about KenCast\'s Vazzt VOTM offering?',
        answer: '<p>There are now scores of solutions appearing to meet what till now has been a huge hidden market for video capture from the field. ' +
        'Although almost all users capturing video from the field already have a camera and laptop, these solutions often require the user to add another heavy box' + 'or' +
        'backpack, or they are very expensive services, or lock the user to a set of carrier services or specific IP network(s),' +
        'or require the user to pass their captured video first through the vendors service center before it is sent back to the user&#39s own central hub, or ' +
        'require viewers to download a plug-in or all of the above problems.' +
        ' KenCast&#39s solution avoids all of these problems. The Vazzt solution is:</p>' +
        '<ul>' +
            '<li>All-software based &#45 NO HARDWARE REQUIRED</li>' +
            '<li>Playback on any user device without KenCast software/plugins &#45 NOTHING required from KenCast </li>' +
            '<li>Agnostic to wireless IP Services and allows the user to employ &#39any&#39 wireless IP networks of his/her own choice and to change them as often as he/she chooses, or finds it necessary, and to do so immediately/on-the-fly</li>' +
            '<li>Amenable to a new IP network service as soon as it is available</li>' +
            '<li>Ready to support an enterprise that wants to set up its own complete wireless video capture capability, from the field to its own central hub, with full security on the streaming video and on the files, without passing captured video through any third party.  Vazzt creates and configures endpoints for a Virtual Private Network.</li>' +
            '<li>Adaptable for organizations so inclined to set up a Video Capture service to compete for this huge market with the scores of current competitors.</li>' + 
        '</ul>'
        },
        
        {
        category: 'general',
        number: '4',
        question: 'What resolution can Vazzt give me?',
        answer:
        '<p>The Vazzt encoder that comes with the capture software can now encode at anything up to and including Video at 1080p (1920x1080 pixels, 30 frames per second, with 65K color).  The camera/laptop can be very simple and inexpensive for standard IPTV, but expensive for a full HD IPTV configuration. ' +
        'Vazzt Capture Software will automatically read the default video resolutions available from the camera you attach to the laptop/computer with the Vazzt Capture Server software.  It will present these options to you.  Typical options include the following and can be used in these typical setups:</p>' +
                '<ul>' +
                    '<li>(320x240) For the Capture Server use a netbook with built in webcam, subscribe to 2 carrier wireless data services at $60 per month each ($120/month).  There is no other recurring cost for the capture server operation.  You can also bond together WiFi and other IP network services, when available, with the 2 carrier services to get higher resolution, but webcams do not yet have higher resolution capability.</li>' +
                    '<li>(720x480) Use a laptop for Capture Server with a prosumer camera and 3 carrier wireless data services for only about $180/month recurring cost. </li>' +
                    '<li>(1440x1080) Use a good laptop for Capture Server with a pro camera and 6-7 carrier 3G wireless data services for excellent bandwidth for about $360/month recurring cost.</li>' +
                '</ul>'+
        '<p>However, at this upper resolution you can also use multiple new carrier IP Networks (LTE and/or WiMAX) to get enough bandwidth to support this quality resolution – in the range of 2.5-4.5 Mbps).  Currently you may need a server-class computer and a broadband wire connection to the Internet to use the Vazzt Capture Server software at this resolution, until multiple 4G networks are available to be bonded together.</p>'
        },
        {
        category: 'general',
        number: '5',
        question: 'Resolution Available for Coverage with the Vazzt VOTM Service',
        answer:
        '<p>When using the Vazzt VOTM Service, the resolution you select will depend on the amount of bandwidth detected by the VazztCaster program and the options that the Vazzt VazztCaster program automatically detects in your camera. </p>' +
        '<p>There are 4 types of cameras on the market today: HD cameras; HDV Cameras; DV Cameras; and Webcams.  The maximum resolutions these cameras offer are as follows: </p>' +
        '<table style="width:100%">' +
            '<tr>' +
                '<th>Standard</th>' +
                '<th>Resolution</th>' +
                '<th>DAR</th>' +
                '<th>Pixels</th>' +
            '</tr>' +
            '<tr>' +
                '<th>HD Cameras</th>' +
            '<tr>' +
              '<td>Sony HDCAM SR (1080)</td>' +
              '<td>1920 x 1080</td>' +
              '<td>16.9</td>' +
              '<td>2,073,600</td>' +
            '</tr>' +
            '<tr>' +
                '<th>HDV Cameras</th>' +
            '</tr>' +
            '<tr>' +
              '<td>Canon Vixia HV40</td>' +
              '<td>1440 x 1080</td>' +
              '<td>16.9</td>' +
              '<td>1,555,200</td>' +
            '</tr>' +
            '<tr>' +
              '<td>Panasonic DVCPRO</td>' +
              '<td>1440 x 1080</td>' +
              '<td>16.9</td>' +
              '<td>1,555,200</td>' +
            '</tr>' +
            '<tr>' +
              '<td>Panasonic DVCPRO HD 1080, 59.94</td>' +
              '<td>1280 x 1080</td>' +
              '<td>16.9</td>' +
              '<td>1,382,400</td>' +
            '</tr>' +
            '<tr>' +
              '<td>Panasonic DVCPRO HD 720p</td>' +
              '<td>960 x 720</td>' +
              '<td>16.9</td>' +
              '<td>691,200</td>' +
            '</tr>' +
            '<tr>' +
                '<th>DV Cameras</th>' +
            '</tr>' +
            '<tr>' +
                '<td>D1 Pal</td>' +
                '<td>720 x 576</td>' +
                '<td>4.3</td>' +
                '<td>414,720</td>' +
            '</tr>' +
            '<tr>' +
                '<td>D1 NTSC</td>' +
                '<td>720 x 486</td>' +
                '<td>4.3</td>' +
                '<td>349,920</td>' +
            '</tr>' +
            '<tr>' +
                '<td>DV PAL</td>' +
                '<td>720 x 576</td>' +
                '<td>4.3</td>' +
                '<td>414,720</td>' +
            '</tr>' +
            '<tr>' +
                '<td>DV NTSC</td>' +
                '<td>720 x 480</td>' +
                '<td>4.3</td>' +
                '<td>345,600</td>' +
            '</tr>' +
            '<tr>' +
                '<td>DV NTSC</td>' +
                '<td>360 x 240</td>' +
                '<td>4.3</td>' +
                '<td>86,400</td>' +
            '</tr>' +
            '<tr>' +
                '<th>Webcams, aka USB Cameras</th>' +
            '</tr>' +
            '<tr>' +
                '<td>' +
                '<p>Most consumer webcams are capable of providing VGA-resolution video at a frame rate of 30 frames per second. Many newer devices can produce video in multi-megapixel resolutions, and a few can run at high frame rates such as the PlayStation Eye, which can produce 320 ? 240 video at 120 frames per second.</p>' +
                '<p>From: <a href="http://en.wikipedia.org/wiki/Webcam">Wikipedia</a></p>' +
                '<p><strong>DAR</strong>: Display Aspect Ratio</p>' +
                '<p>The <i>VazztCaster software</i> will enable you to set the resolution from among the set of resolutions that the camera you connect to your laptop/computer/netbook supports.  VazztCaster automatically detects the resolution set that each camera supports and presents them to you for your choice.  </p>'+
                '<p>Since <i>VazztCaster</i> performs a bandwidth test for you on startup, you should consider the available bandwidth detected in the bandwidth test when selecting the resolution from the options presented to you.</p>' +
            '</tr>' +
          '</table>' 
        },
        {
        category: 'general',
        number: '6',
        question: 'What are the key technologies that KenCast uses in Vazzt?',
        answer: 
        '<p>The KenCast video encoder within Vazzt VOTM can encode video up to and including 1080p (1920x1080 pixels at 30 fps).  Vazzt monitors available bandwidth and dynamically adjusts the video encoding bit-rate on-the-fly to accommodate fluctuation in bandwidth of the super pipe.</p>' +
        '<p>Several key transmission technologies enable Vazzt to: </p>' +
        '<ul>' +
            '<li><strong>Detect</strong> available IP networks & bandwidth</li>' +
                '<li>Upon launch, Vazzt will explore the immediate vicinity and detect any IP network for which the user&#39s computer has been previously configured.</li>' +  
            '<li><strong>Accelerate</strong> delivery on identified networks</li>' +
                '<li>Uses KenCast&#39s patent pending IP Acceleration methods (bandwidth is pushed up on each network found)</li>' +
            '<li><strong>Bond</strong> the Detected/Accelerated networks together into a single fat IP super pipe</li>' +
                '<li>Uses KenCast patent and patent pending technology in network diversity and split/join channeling to achieve bonding.</li>' +
                   '<li>Quickly tests the total composite bandwidth of the super pipe sets the default encoding rate based on the test (the user can override the default bandwidth and single-click for a preset profile to ensure a desired, consistent quality, if preferred; or the user can manually configure a custom profile; and IT support at the central hub can remotely access the user’s laptop and manually configure an appropriate profile)</li>' +
            '<li><strong>Load Balance</strong> by shifting outgoing packets from slowing networks to rising networks.</li>' +
                '<li>Vazzt monitors the performance of each of the bonded networks and allocates the packets among the networks for optimal distribution.</li>' +
            '<li><strong>Protect with KenCast</strong> FEC to ensure flawless live streams and files</li>' +
                '<li>Uses KenCast&#39s renowned patented Fazzt Forward Error Correction algorithms on live streams and files) as employed extensively for the last 15 years by the US Military worldwide and on the battlefield, and by the Entertainment & Media Industry and others</li>' +
            '<li><strong>Secure</strong> the live streams with encryption, and secure files also.</li>' +
                '<li>This is done using 256-bit AES encryption on the bonded pipe. So live streams and files sent over the pipe are very secure. Keys for deciphering are distributed using SSL type security connection. ' +
            'KenCast has great experience & expertise with encryption and can customize the security solution to the specific needs of an organization. </li>' +
            '<li><strong>Dynamically Adjust Bit-Rate Encoding</strong> of the camera feed.</li>' +
                '<li>Vazzt is continually monitoring the total available bandwidth of the super pipe it has created.  If the overall bandwidth falls below the current encoding rate, Vazzt lowers the encoding rate to live within the new bandwidth level. If the overall bandwidth rises, Vazzt will raise the encoding rate as long as the bandwidth rises or until the originally selected encoding rate is reached. This process results in smoothly upgrading or downgrading video quality to available bandwidth.</li>' +
        '</ul>'
        },
        {
        category: 'general',
        number: '7',
        question: 'Who can use Vazzt VOTM? To which markets is Vazzt of most value?',
        answer:
        '<table style="width:100%">' +
            '<tr>' +
                '<td>Police, Fire, and EMS</th>' +
                '<td>Enterprises of all Types</td>' +
                '<td>Aerial Surveillance</td>' +
            '</tr>' +
            '<tr>' +
              '<td>TV Stations</td>' +
              '<td>Military</td>' +
              '<td>ENG/SNG Vehicles</td>' +
            '</tr>' +
            '<tr>' +
              '<td>Newspapers</td>' +
              '<td>Municipalities</td>' +
              '<td>Corporations</td>' +
            '</tr>' +
            '<tr>' +
                '<td>Homeland Security</td>' +
                '<td>State and Federal Agencies</td>' +
                '<td>Sports Events</td>' +
            '</tr>' +
            '<tr>' +
                '<td>Entertainment Events</td>' +
                '<td>University Campus</td>' +
                '<td>Stringers</td>' +
            '</tr>' +
            '<tr>' +
                '<td>Worship Services</td>' +
                '<td>Citizen Journalists</td>' +
                '<td>SIGs</td>' +
            '</tr>' +
          '</table>' +
        'Users in an enterprise, who must move about and can add great value to their task with the capture of video in the field and with sharing it with their co-workers, will find Vazzt very valuable.  Vazzt can be dynamically reconfigured for varying local IP Network coverage.  And such enterprises of necessity cannot always allow their content to pass through a commercial vendor or a public commercial service offering (for example, surveillance video).  Because the user need only obtain Vazzt software, and can employ their own laptops, commercial IP network services, and central hub computer equipment on Internet access lines, the only remaining requirement might be additional IP network services.  By leveraging the sunk cost of their own resources, Enterprises may find Vazzt a fraction of the price of alternatives.'
        },
        {
        category: 'general',
        number: '8',
        question: 'Why the name Vazzt VOTM?',
        answer: "<p>One of the keys to successful video capture over IP networks is to find enough bandwidth at a moments notice and keep it while on the move.  KenCast’s solution does it well and in fact typically finds a VAST (Vazzt) amount of bandwidth for you.  And KenCast’s solution is targeted to video capture by those on location, especially on the move in vehicles, aircraft or on foot.  So we dubbed it Vazzt Video-On-The-Move (VOTM).  </p>"
        }
    ];
    
});



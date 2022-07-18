const express = require('express');
const app = express();

const bookList = [
    {
        "Name": "Unlocking Android",
        "Pages": 416,
        "Author": "W. Frank Ableson, Charlie Collins, Robi Sen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
        "Price": 58.86,
        "InStock": 0,
        "ClusterNumber": 8
    },
    {
        "Name": "Android in Action, Second Edition",
        "Pages": 592,
        "Author": "W. Frank Ableson, Robi Sen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson2.jpg",
        "Price": 48.41,
        "InStock": 1,
        "ClusterNumber": 6
    },
    {
        "Name": "Specification by Example",
        "Pages": 123,
        "Author": "Gojko Adzic",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/adzic.jpg",
        "Price": 96.96,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "Flex 3 in Action",
        "Pages": 576,
        "Author": "Tariq Ahmed with Jon Hirschi, Faisal Abid",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed.jpg",
        "Price": 82.53,
        "InStock": 3,
        "ClusterNumber": 13
    },
    {
        "Name": "Flex 4 in Action",
        "Pages": 600,
        "Author": "Tariq Ahmed, Dan Orlando, John C. Bland II, Joel Hooks",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ahmed2.jpg",
        "Price": 55.59,
        "InStock": 0,
        "ClusterNumber": 11
    },
    {
        "Name": "Collective Intelligence in Action",
        "Pages": 425,
        "Author": "Satnam Alag",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alag.jpg",
        "Price": 12.11,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "Zend Framework in Action",
        "Pages": 432,
        "Author": "Rob Allen, Nick Lo, Steven Brown",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allen.jpg",
        "Price": 59.81,
        "InStock": 2,
        "ClusterNumber": 0
    },
    {
        "Name": "Flex on Java",
        "Pages": 265,
        "Author": "Bernerd Allmon, Jeremy Anderson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/allmon.jpg",
        "Price": 79.18,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "Griffon in Action",
        "Pages": 375,
        "Author": "Andres Almiray, Danno Ferrin, , James Shingler",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/almiray.jpg",
        "Price": 8.72,
        "InStock": 2,
        "ClusterNumber": 13
    },
    {
        "Name": "OSGi in Depth",
        "Pages": 325,
        "Author": "Alexandre de Castro Alves",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alves.jpg",
        "Price": 17.08,
        "InStock": 2,
        "ClusterNumber": 11
    },
    {
        "Name": "Flexible Rails",
        "Pages": 592,
        "Author": "Peter Armstrong",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong.jpg",
        "Price": 14.13,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "Hello! Flex 4",
        "Pages": 258,
        "Author": "Peter Armstrong",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/armstrong3.jpg",
        "Price": 62.06,
        "InStock": 1,
        "ClusterNumber": 10
    },
    {
        "Name": "Coffeehouse",
        "Pages": 316,
        "Author": "Levi Asher, Christian Crumlish",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/asher.jpg",
        "Price": 45.2,
        "InStock": 3,
        "ClusterNumber": 9
    },
    {
        "Name": "Team Foundation Server 2008 in Action",
        "Pages": 344,
        "Author": "Jamil Azher",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/azher.jpg",
        "Price": 27.74,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "Brownfield Application Development in .NET",
        "Pages": 550,
        "Author": "Kyle Baley, Donald Belcham",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/baley.jpg",
        "Price": 73.48,
        "InStock": 1,
        "ClusterNumber": 2
    },
    {
        "Name": "MongoDB in Action",
        "Pages": 171,
        "Author": "Kyle Banker",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker.jpg",
        "Price": 34.75,
        "InStock": 1,
        "ClusterNumber": 2
    },
    {
        "Name": "Distributed Application Development with PowerBuilder 6.0",
        "Pages": 504,
        "Author": "Michael J. Barlotta",
        "Price": 99.39,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "Jaguar Development with PowerBuilder 7",
        "Pages": 550,
        "Author": "Michael Barlotta",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta2.jpg",
        "Price": 38.67,
        "InStock": 3,
        "ClusterNumber": 5
    },
    {
        "Name": "Taming Jaguar",
        "Pages": 362,
        "Author": "Michael J. Barlotta, Jason R. Weiss",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barlotta3.jpg",
        "Price": 25.9,
        "InStock": 3,
        "ClusterNumber": 12
    },
    {
        "Name": "3D User Interfaces with Java 3D",
        "Pages": 520,
        "Author": "Jon Barrilleaux",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/barrilleaux.jpg",
        "Price": 21.8,
        "InStock": 2,
        "ClusterNumber": 17
    },
    {
        "Name": "Hibernate in Action",
        "Pages": 400,
        "Author": "Christian Bauer, Gavin King",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer.jpg",
        "Price": 29.73,
        "InStock": 0,
        "ClusterNumber": 19
    },
    {
        "Name": "Hibernate in Action (Chinese Edition)",
        "Pages": 400,
        "Author": "Christian Bauer, Gavin King",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer-cn.jpg",
        "Price": 32.29,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "Java Persistence with Hibernate",
        "Pages": 880,
        "Author": "Christian Bauer, Gavin King",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer2.jpg",
        "Price": 38.92,
        "InStock": 2,
        "ClusterNumber": 4
    },
    {
        "Name": "JSTL in Action",
        "Pages": 480,
        "Author": "Shawn Bayern",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bayern.jpg",
        "Price": 83.63,
        "InStock": 1,
        "ClusterNumber": 1
    },
    {
        "Name": "iBATIS in Action",
        "Pages": 384,
        "Author": "Clinton Begin, Brandon Goodin, Larry Meadors",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/begin.jpg",
        "Price": 4.91,
        "InStock": 2,
        "ClusterNumber": 19
    },
    {
        "Name": "Designing Hard Software",
        "Pages": 350,
        "Author": "Douglas W. Bennett",
        "Price": 35.15,
        "InStock": 1,
        "ClusterNumber": 19
    },
    {
        "Name": "Hibernate Search in Action",
        "Pages": 488,
        "Author": "Emmanuel Bernard, John Griffin",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bernard.jpg",
        "Price": 66.18,
        "InStock": 2,
        "ClusterNumber": 7
    },
    {
        "Name": "jQuery in Action",
        "Pages": 376,
        "Author": "Bear Bibeault, Yehuda Katz",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault.jpg",
        "Price": 37.08,
        "InStock": 1,
        "ClusterNumber": 19
    },
    {
        "Name": "jQuery in Action, Second Edition",
        "Pages": 488,
        "Author": "Bear Bibeault, Yehuda Katz",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bibeault2.jpg",
        "Price": 72.29,
        "InStock": 2,
        "ClusterNumber": 1
    },
    {
        "Name": "Building Secure and Reliable Network Applications",
        "Pages": 591,
        "Author": "Kenneth P. Birman",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/birman.jpg",
        "Price": 49.59,
        "InStock": 2,
        "ClusterNumber": 18
    },
    {
        "Name": "Ruby for Rails",
        "Pages": 532,
        "Author": "David A. Black",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black.jpg",
        "Price": 79.56,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "The Well-Grounded Rubyist",
        "Pages": 520,
        "Author": "David A. Black",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black2.jpg",
        "Price": 82.48,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "Website Owner's Manual",
        "Pages": 296,
        "Author": "Paul A. Boag",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/boag.jpg",
        "Price": 45.2,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "ASP.NET 4.0 in Practice",
        "Pages": 504,
        "Author": "Daniele Bochicchio, Stefano Mostarda, , Marco De Sanctis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bochicchio.jpg",
        "Price": 6.1,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "Hello! Python",
        "Pages": 350,
        "Author": "Anthony Briggs",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/briggs.jpg",
        "Price": 15.41,
        "InStock": 0,
        "ClusterNumber": 2
    },
    {
        "Name": "PFC Programmer's Reference Manual",
        "Pages": 368,
        "Author": "Richard Brooks",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brooks.jpg",
        "Price": 65.59,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "Graphics File Formats",
        "Pages": 484,
        "Author": "C. Wayne Brown, Barry J. Shepherd",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brown.jpg",
        "Price": 68.21,
        "InStock": 2,
        "ClusterNumber": 9
    },
    {
        "Name": "Visual Object Oriented Programming",
        "Pages": 280,
        "Author": "Margaret M. Burnett, Adele Goldberg, , Ted G. Lewis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/burnett.jpg",
        "Price": 35.43,
        "InStock": 2,
        "ClusterNumber": 19
    },
    {
        "Name": "iOS in Practice",
        "Pages": 325,
        "Author": "Bear P. Cahill",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cahill.jpg",
        "Price": 3.53,
        "InStock": 2,
        "ClusterNumber": 11
    },
    {
        "Name": "iPhone in Action",
        "Pages": 472,
        "Author": "Christopher Allen, Shannon Appelcline",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/callen.jpg",
        "Price": 54.78,
        "InStock": 3,
        "ClusterNumber": 16
    },
    {
        "Name": "Silverlight 2 in Action",
        "Pages": 400,
        "Author": "Chad A. Campbell, John Stockton",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/campbell.jpg",
        "Price": 28.81,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "The Quick Python Book, Second Edition",
        "Pages": 360,
        "Author": "Naomi R. Ceder",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ceder.jpg",
        "Price": 81.37,
        "InStock": 3,
        "ClusterNumber": 1
    },
    {
        "Name": "Internet and Intranet Applications with PowerBuilder 6",
        "Pages": 390,
        "Author": "Tom Cervenka",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cervenka.jpg",
        "Price": 54.46,
        "InStock": 1,
        "ClusterNumber": 3
    },
    {
        "Name": "Practical Methods for Your Year 2000 Problem",
        "Pages": 236,
        "Author": "Robert Chapman",
        "Price": 87.75,
        "InStock": 2,
        "ClusterNumber": 7
    },
    {
        "Name": "Mobile Agents",
        "Pages": 320,
        "Author": "William R. Cockayne and Michael Zyda, editors",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cockayne.jpg",
        "Price": 15.14,
        "InStock": 0,
        "ClusterNumber": 20
    },
    {
        "Name": "Spring Dynamic Modules in Action",
        "Pages": 450,
        "Author": "Arnaud Cogoluegnes, Thierry Templier, , Andy Piper",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cogoluegnes.jpg",
        "Price": 10.31,
        "InStock": 0,
        "ClusterNumber": 15
    },
    {
        "Name": "SQL Server 2008 Administration in Action",
        "Pages": 468,
        "Author": "Rod Colledge",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/colledge.jpg",
        "Price": 45.62,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "Android in Practice",
        "Pages": 500,
        "Author": "Charlie Collins, Michael D. Galpin, , Matthias Kaeppler",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/collins.jpg",
        "Price": 31.42,
        "InStock": 0,
        "ClusterNumber": 6
    },
    {
        "Name": "Object Oriented Perl",
        "Pages": 512,
        "Author": "Damian Conway",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/conway.jpg",
        "Price": 17.87,
        "InStock": 3,
        "ClusterNumber": 16
    },
    {
        "Name": "GWT in Practice",
        "Pages": 376,
        "Author": "Robert Cooper, Charles Collins",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cooper.jpg",
        "Price": 97.07,
        "InStock": 1,
        "ClusterNumber": 8
    },
    {
        "Name": "Ajax in Action",
        "Pages": 680,
        "Author": "Dave Crane, Eric Pascarello with Darren James",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane.jpg",
        "Price": 63.02,
        "InStock": 0,
        "ClusterNumber": 5
    },
    {
        "Name": "Ajax in Practice",
        "Pages": 536,
        "Author": "Dave Crane, Jord Sonneveld and Bear Bibeault with Ted Goddard, Chris Gray, Ram Venkataraman, Joe Walker",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane2.jpg",
        "Price": 60.14,
        "InStock": 1,
        "ClusterNumber": 2
    },
    {
        "Name": "Prototype and Scriptaculous in Action",
        "Pages": 544,
        "Author": "Dave Crane, Bear Bibeault with Tom Locke",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crane3.jpg",
        "Price": 77.31,
        "InStock": 3,
        "ClusterNumber": 7
    },
    {
        "Name": "POJOs in Action",
        "Pages": 592,
        "Author": "Chris Richardson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crichardson.jpg",
        "Price": 46.75,
        "InStock": 0,
        "ClusterNumber": 2
    },
    {
        "Name": "Data Munging with Perl",
        "Pages": 304,
        "Author": "David Cross",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cross.jpg",
        "Price": 11.97,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "Hello! HTML5 & CSS3",
        "Pages": 325,
        "Author": "Rob Crowther",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther.jpg",
        "Price": 18.33,
        "InStock": 2,
        "ClusterNumber": 15
    },
    {
        "Name": "Seam in Action",
        "Pages": 624,
        "Author": "Dan Allen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dallen.jpg",
        "Price": 92.54,
        "InStock": 1,
        "ClusterNumber": 8
    },
    {
        "Name": "Wicket in Action",
        "Pages": 392,
        "Author": "Martijn Dashorst, Eelco Hillenius",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dashorst.jpg",
        "Price": 21.17,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "Open Source SOA",
        "Pages": 448,
        "Author": "Jeff Davis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/davis.jpg",
        "Price": 14.97,
        "InStock": 3,
        "ClusterNumber": 2
    },
    {
        "Name": "Struts 2 in Action",
        "Pages": 432,
        "Author": "Donald Brown, Chad Michael Davis, , Scott Stanlick",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dbrown.jpg",
        "Price": 22.5,
        "InStock": 3,
        "ClusterNumber": 13
    },
    {
        "Name": "Essential Guide to Peoplesoft Development and Customization",
        "Pages": 1101,
        "Author": "Tony DeLia, Galina Landres, Isidor Rivera, Prakash Sankaran",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/delia.jpg",
        "Price": 39.09,
        "InStock": 2,
        "ClusterNumber": 4
    },
    {
        "Name": ".NET Multithreading",
        "Pages": 360,
        "Author": "Alan Dennis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dennis.jpg",
        "Price": 65.04,
        "InStock": 1,
        "ClusterNumber": 11
    },
    {
        "Name": "SCWCD Exam Study Kit Second Edition",
        "Pages": 560,
        "Author": "Hanumant Deshmukh, Jignesh Malavia, , Matthew Scarpino",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/deshmukh2.jpg",
        "Price": 67.67,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "Spring Roo in Action",
        "Pages": 500,
        "Author": "Ken Rimple, Srini Penchikala",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rimple.jpg",
        "Price": 97.85,
        "InStock": 1,
        "ClusterNumber": 5
    },
    {
        "Name": "SOA Governance in Action",
        "Pages": 182,
        "Author": "Jos Dirksen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dirksen.jpg",
        "Price": 50.93,
        "InStock": 3,
        "ClusterNumber": 13
    },
    {
        "Name": "RSS and Atom in Action",
        "Pages": 400,
        "Author": "Dave Johnson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dmjohnson.jpg",
        "Price": 59.53,
        "InStock": 3,
        "ClusterNumber": 0
    },
    {
        "Name": "LDAP Programming, Management and Integration",
        "Pages": 352,
        "Author": "Clayton Donley",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/donley.jpg",
        "Price": 42.91,
        "InStock": 0,
        "ClusterNumber": 16
    },
    {
        "Name": "Mule in Action",
        "Pages": 432,
        "Author": "David Dossot, John D'Emic",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dossot.jpg",
        "Price": 48.13,
        "InStock": 0,
        "ClusterNumber": 11
    },
    {
        "Name": "Java Foundation Classes",
        "Pages": 1088,
        "Author": "Stephen C. Drye, William C. Wake",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drye.jpg",
        "Price": 86.76,
        "InStock": 3,
        "ClusterNumber": 8
    },
    {
        "Name": "Managing Components with Modeler",
        "Pages": 121,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal11.jpg",
        "Price": 85.39,
        "InStock": 1,
        "ClusterNumber": 16
    },
    {
        "Name": "Command-line Processing with CLI",
        "Pages": 195,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal12.jpg",
        "Price": 25.76,
        "InStock": 2,
        "ClusterNumber": 2
    },
    {
        "Name": "Understanding and Using Chain",
        "Pages": 165,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal13.jpg",
        "Price": 48.37,
        "InStock": 3,
        "ClusterNumber": 17
    },
    {
        "Name": "Working with the Logging and Discovery Components",
        "Pages": 181,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal14.jpg",
        "Price": 7.56,
        "InStock": 3,
        "ClusterNumber": 19
    },
    {
        "Name": "Uploading files with FileUpload",
        "Pages": 198,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal2.jpg",
        "Price": 13.78,
        "InStock": 3,
        "ClusterNumber": 17
    },
    {
        "Name": "Handling Protocols with the Net Component",
        "Pages": 184,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal3.jpg",
        "Price": 67.19,
        "InStock": 3,
        "ClusterNumber": 5
    },
    {
        "Name": "XML Parsing with Digester",
        "Pages": 101,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal4.jpg",
        "Price": 21.12,
        "InStock": 0,
        "ClusterNumber": 2
    },
    {
        "Name": "JXPath and Betwixt: Working with XML",
        "Pages": 127,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal5.jpg",
        "Price": 93.25,
        "InStock": 3,
        "ClusterNumber": 8
    },
    {
        "Name": "Validating Data with Validator",
        "Pages": 198,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal6.jpg",
        "Price": 45.96,
        "InStock": 1,
        "ClusterNumber": 8
    },
    {
        "Name": "Enhancing Java Core Libraries with Collections",
        "Pages": 175,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal7.jpg",
        "Price": 1.27,
        "InStock": 2,
        "ClusterNumber": 18
    },
    {
        "Name": "Enhancing Java Core Libraries with BeanUtils and Lang",
        "Pages": 129,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal8.jpg",
        "Price": 10.85,
        "InStock": 1,
        "ClusterNumber": 8
    },
    {
        "Name": "Pool and DBCP: Creating and Using Object Pools",
        "Pages": 163,
        "Author": "Vikram Goyal",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/goyal9.jpg",
        "Price": 23.9,
        "InStock": 2,
        "ClusterNumber": 11
    },
    {
        "Name": "Python and Tkinter Programming",
        "Pages": 688,
        "Author": "John E. Grayson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grayson.jpg",
        "Price": 37.47,
        "InStock": 3,
        "ClusterNumber": 18
    },
    {
        "Name": "Microsoft.NET for Programmers",
        "Pages": 386,
        "Author": "Fergal Grimes",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grimes.jpg",
        "Price": 98.23,
        "InStock": 2,
        "ClusterNumber": 2
    },
    {
        "Name": "Grails in Action",
        "Pages": 520,
        "Author": "Glen Smith, Peter Ledbrook",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gsmith.jpg",
        "Price": 20.19,
        "InStock": 1,
        "ClusterNumber": 9
    },
    {
        "Name": "Up to Speed with Swing, Second Edition",
        "Pages": 560,
        "Author": "Steven Gutz",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gutz2.jpg",
        "Price": 28.84,
        "InStock": 3,
        "ClusterNumber": 9
    },
    {
        "Name": "OSGi in Action",
        "Pages": 576,
        "Author": "Richard S. Hall, Karl Pauls, Stuart McCulloch, , David Savage",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hall.jpg",
        "Price": 37.34,
        "InStock": 1,
        "ClusterNumber": 4
    },
    {
        "Name": "GWT in Action",
        "Pages": 632,
        "Author": "Robert Hanson, Adam Tacy",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hanson.jpg",
        "Price": 60.25,
        "InStock": 0,
        "ClusterNumber": 5
    },
    {
        "Name": "The Quick Python Book",
        "Pages": 444,
        "Author": "Daryl Harms, Kenneth McDonald",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harms.jpg",
        "Price": 74.8,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "SharePoint 2010 Site Owner's Manual",
        "Pages": 300,
        "Author": "Yvonne M. Harryman",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/harryman.jpg",
        "Price": 13.88,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "Java Development with Ant",
        "Pages": 672,
        "Author": "Erik Hatcher, Steve Loughran",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher.jpg",
        "Price": 64.14,
        "InStock": 0,
        "ClusterNumber": 1
    },
    {
        "Name": "Lucene in Action",
        "Pages": 456,
        "Author": "Erik Hatcher, Otis Gospodnetic",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher2.jpg",
        "Price": 95.49,
        "InStock": 2,
        "ClusterNumber": 0
    },
    {
        "Name": "Lucene in Action, Second Edition",
        "Pages": 532,
        "Author": "Erik Hatcher, Otis Gospodnetic, , Michael McCandless",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatcher3.jpg",
        "Price": 77.52,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "PowerBuilder 6.0 Questions & Answers",
        "Pages": 446,
        "Author": "Tim Hatton",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton.jpg",
        "Price": 18.67,
        "InStock": 3,
        "ClusterNumber": 14
    },
    {
        "Name": "The Awesome Power of PowerJ",
        "Pages": 378,
        "Author": "Tim Hatton",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton2.jpg",
        "Price": 87.4,
        "InStock": 3,
        "ClusterNumber": 20
    },
    {
        "Name": "The Awesome Power of Power++",
        "Pages": 416,
        "Author": "Tim Hatton",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hatton3.jpg",
        "Price": 95.17,
        "InStock": 0,
        "ClusterNumber": 12
    },
    {
        "Name": "Azure in Action",
        "Pages": 425,
        "Author": "Chris Hay, Brian H. Prince",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hay.jpg",
        "Price": 5.68,
        "InStock": 0,
        "ClusterNumber": 11
    },
    {
        "Name": "Distributed Agile in Action",
        "Pages": 325,
        "Author": "Vikas Hazrati, Balaji D Loganathan",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hazrati.jpg",
        "Price": 33.76,
        "InStock": 2,
        "ClusterNumber": 16
    },
    {
        "Name": "Metaprogramming in .NET",
        "Pages": 189,
        "Author": "Kevin Hazzard, Jason Bock",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hazzard.jpg",
        "Price": 94.53,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "Portlets and Apache Portals",
        "Pages": 500,
        "Author": "Stefan Hepper, Peter Fischer, Stephan Hesmer, Richard Jacob, David Sean Taylor",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hepper.jpg",
        "Price": 38.49,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "Code Generation in Action",
        "Pages": 350,
        "Author": "Jack Herrington",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/herrington.jpg",
        "Price": 44.55,
        "InStock": 0,
        "ClusterNumber": 13
    },
    {
        "Name": "Illustrated Guide to HTTP",
        "Pages": 400,
        "Author": "Paul S. Hethmon",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hethmon.jpg",
        "Price": 31.99,
        "InStock": 1,
        "ClusterNumber": 2
    },
    {
        "Name": "Agile ALM",
        "Pages": 149,
        "Author": "Michael Hüttermann",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/huettermann.jpg",
        "Price": 90.82,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "Java Network Programming, Second Edition",
        "Pages": 860,
        "Author": "Merlin Hughes, Michael Shoffner, , Derek Hamner",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hughes.jpg",
        "Price": 31.85,
        "InStock": 3,
        "ClusterNumber": 3
    },
    {
        "Name": "Struts in Action",
        "Pages": 672,
        "Author": "Ted N. Husted, Cedric Dumoulin, George Franciscus, David Winterfeldt",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/husted.jpg",
        "Price": 97.33,
        "InStock": 0,
        "ClusterNumber": 11
    },
    {
        "Name": "Camel in Action",
        "Pages": 375,
        "Author": "Claus Ibsen, Jonathan Anstey",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ibsen.jpg",
        "Price": 25.4,
        "InStock": 1,
        "ClusterNumber": 1
    },
    {
        "Name": "Taming Text",
        "Pages": 350,
        "Author": "Grant S. Ingersoll, Thomas S. Morton, , Andrew L. Farris",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ingersoll.jpg",
        "Price": 99.38,
        "InStock": 0,
        "ClusterNumber": 20
    },
    {
        "Name": "JBoss in Action",
        "Pages": 496,
        "Author": "Javid Jamae, Peter Johnson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jamae.jpg",
        "Price": 38.11,
        "InStock": 3,
        "ClusterNumber": 18
    },
    {
        "Name": "Gnuplot in Action",
        "Pages": 400,
        "Author": "Philipp K. Janert",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/janert.jpg",
        "Price": 91.26,
        "InStock": 1,
        "ClusterNumber": 11
    },
    {
        "Name": "Extending and Embedding Perl",
        "Pages": 384,
        "Author": "Tim Jenness, Simon Cozens",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jenness.jpg",
        "Price": 0.44,
        "InStock": 0,
        "ClusterNumber": 12
    },
    {
        "Name": "iOS 4 in Action",
        "Pages": 504,
        "Author": "Jocelyn Harrington, Brandon Trebitowski, Christopher Allen, , Shannon Appelcline",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jharrington.jpg",
        "Price": 98.21,
        "InStock": 3,
        "ClusterNumber": 10
    },
    {
        "Name": "Elements of Programming with Perl",
        "Pages": 368,
        "Author": "Andrew L. Johnson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/johnson.jpg",
        "Price": 33.92,
        "InStock": 1,
        "ClusterNumber": 11
    },
    {
        "Name": "Learn Windows PowerShell in a Month of Lunches",
        "Pages": 119,
        "Author": "Don Jones",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones.jpg",
        "Price": 86.08,
        "InStock": 1,
        "ClusterNumber": 9
    },
    {
        "Name": "R in Action",
        "Pages": 375,
        "Author": "Robert I. Kabacoff",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff.jpg",
        "Price": 70.12,
        "InStock": 1,
        "ClusterNumber": 3
    },
    {
        "Name": "Android in Practice",
        "Pages": 111,
        "Author": "Matthias Kaeppler, Michael D. Galpin, Charlie Collins",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kaeppler.jpg",
        "Price": 28.69,
        "InStock": 3,
        "ClusterNumber": 17
    },
    {
        "Name": "SOA Security",
        "Pages": 512,
        "Author": "Ramarao Kanneganti, Prasad A. Chodavarapu",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kanneganti.jpg",
        "Price": 28.84,
        "InStock": 2,
        "ClusterNumber": 17
    },
    {
        "Name": "Rails 3 in Action",
        "Pages": 425,
        "Author": "Ryan Bigg, Yehuda Katz",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/katz.jpg",
        "Price": 66.18,
        "InStock": 3,
        "ClusterNumber": 0
    },
    {
        "Name": "Continuous Integration in .NET",
        "Pages": 328,
        "Author": "Marcin Kawalerowicz, Craig Berntson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kawalerowicz.jpg",
        "Price": 38.3,
        "InStock": 2,
        "ClusterNumber": 12
    },
    {
        "Name": "Technology Paradise Lost",
        "Pages": 260,
        "Author": "Erik Keller",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/keller.jpg",
        "Price": 31.62,
        "InStock": 2,
        "ClusterNumber": 0
    },
    {
        "Name": "Kermit 95+",
        "Pages": 194,
        "Author": "Kermit Project at Columbia University",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kermit.jpg",
        "Price": 28.02,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "Laszlo in Action",
        "Pages": 552,
        "Author": "Norman Klein, Max Carlson with Glenn MacEwen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/klein.jpg",
        "Price": 40.39,
        "InStock": 3,
        "ClusterNumber": 9
    },
    {
        "Name": "Groovy in Action",
        "Pages": 696,
        "Author": "Dierk Koenig with Andrew Glover, Paul King, Guillaume Laforge, Jon Skeet",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koenig.jpg",
        "Price": 18.61,
        "InStock": 2,
        "ClusterNumber": 11
    },
    {
        "Name": "Groovy in Action, Second Edition",
        "Pages": 700,
        "Author": "Dierk König, Guillaume Laforge, Paul King, Cédric Champeau, Hamlet D'Arcy, Erik Pragt, , Jon Skeet",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koenig2.jpg",
        "Price": 65.84,
        "InStock": 1,
        "ClusterNumber": 2
    },
    {
        "Name": "Object Technology Centers of Excellence",
        "Pages": 200,
        "Author": "Timothy D. Korson, Vijay K. Vaishnavi",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/korson.jpg",
        "Price": 80.67,
        "InStock": 2,
        "ClusterNumber": 9
    },
    {
        "Name": "Test Driven",
        "Pages": 544,
        "Author": "Lasse Koskela",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koskela.jpg",
        "Price": 54.3,
        "InStock": 1,
        "ClusterNumber": 12
    },
    {
        "Name": "Effective Unit Testing",
        "Pages": 350,
        "Author": "Lasse Koskela",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/koskela2.jpg",
        "Price": 57.1,
        "InStock": 0,
        "ClusterNumber": 15
    },
    {
        "Name": "Making Java Groovy",
        "Pages": 179,
        "Author": "Kenneth A. Kousen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kousen.jpg",
        "Price": 91.08,
        "InStock": 1,
        "ClusterNumber": 8
    },
    {
        "Name": "The Awesome Power of Direct3D/DirectX",
        "Pages": 840,
        "Author": "Peter J. Kovach",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kovach.jpg",
        "Price": 30.02,
        "InStock": 0,
        "ClusterNumber": 13
    },
    {
        "Name": "Practical Software Requirements",
        "Pages": 448,
        "Author": "Benjamin L. Kovitz",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kovitz.jpg",
        "Price": 90.18,
        "InStock": 2,
        "ClusterNumber": 18
    },
    {
        "Name": "NHibernate in Action",
        "Pages": 400,
        "Author": "Pierre Henri Kuate, Tobin Harris, Christian Bauer, , Gavin King",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kuate.jpg",
        "Price": 34.29,
        "InStock": 1,
        "ClusterNumber": 3
    },
    {
        "Name": "Microsoft Reporting Services in Action",
        "Pages": 656,
        "Author": "Teo Lachev",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lachev.jpg",
        "Price": 15.9,
        "InStock": 1,
        "ClusterNumber": 19
    },
    {
        "Name": "AspectJ in Action",
        "Pages": 512,
        "Author": "Ramnivas Laddad",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laddad.jpg",
        "Price": 49.84,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "AspectJ in Action, Second Edition",
        "Pages": 568,
        "Author": "Ramnivas Laddad",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laddad2.jpg",
        "Price": 73.09,
        "InStock": 1,
        "ClusterNumber": 11
    },
    {
        "Name": "Hadoop in Action",
        "Pages": 325,
        "Author": "Chuck Lam",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lam.jpg",
        "Price": 39.05,
        "InStock": 2,
        "ClusterNumber": 1
    },
    {
        "Name": "SQR in PeopleSoft and Other Applications",
        "Pages": 600,
        "Author": "Galina, Vlad Landres",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/landres.jpg",
        "Price": 93.3,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "SQR in PeopleSoft and Other Applications, Second Edition",
        "Pages": 696,
        "Author": "Galina Landres, Vlad Landres",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/landres2.jpg",
        "Price": 91.29,
        "InStock": 2,
        "ClusterNumber": 0
    },
    {
        "Name": "F# in Action",
        "Pages": 425,
        "Author": "Amanda Laucher",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laucher.jpg",
        "Price": 34.6,
        "InStock": 3,
        "ClusterNumber": 1
    },
    {
        "Name": "Tuscany SCA in Action",
        "Pages": 472,
        "Author": "Simon Laws, Mark Combellack, Raymond Feng, Haleh Mahbod, Simon Nash",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/laws.jpg",
        "Price": 9.42,
        "InStock": 3,
        "ClusterNumber": 3
    },
    {
        "Name": "Client/Server Yellow Pages",
        "Pages": 280,
        "Author": "Compiled, introduced by Ted Lewis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewis.jpg",
        "Price": 35.11,
        "InStock": 3,
        "ClusterNumber": 10
    },
    {
        "Name": "Object Oriented Application Frameworks",
        "Pages": 352,
        "Author": "Ted Lewis, friends",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewis2.jpg",
        "Price": 73.52,
        "InStock": 2,
        "ClusterNumber": 17
    },
    {
        "Name": "Tapestry in Action",
        "Pages": 580,
        "Author": "Howard M. Lewis Ship",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lewisship.jpg",
        "Price": 75.18,
        "InStock": 3,
        "ClusterNumber": 12
    },
    {
        "Name": "WebWork in Action",
        "Pages": 400,
        "Author": "Patrick Lightbody, Jason Carreira",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lightbody.jpg",
        "Price": 78.06,
        "InStock": 1,
        "ClusterNumber": 15
    },
    {
        "Name": "MacRuby in Action",
        "Pages": 194,
        "Author": "Brendan G. Lim with Jerry Cheung, Jeremy McAnally",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lim.jpg",
        "Price": 16.82,
        "InStock": 2,
        "ClusterNumber": 2
    },
    {
        "Name": "Erlang and OTP in Action",
        "Pages": 500,
        "Author": "Martin Logan, Eric Merritt, , Richard Carlsson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/logan.jpg",
        "Price": 95.09,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "SharePoint 2007 Developer's Guide to Business Data Catalog",
        "Pages": 304,
        "Author": "Brett Lonsdale, Nick Swan",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lonsdale.jpg",
        "Price": 50.35,
        "InStock": 2,
        "ClusterNumber": 12
    },
    {
        "Name": "Doing IT Right",
        "Pages": 350,
        "Author": "Harold Lorin",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lorin.jpg",
        "Price": 40.59,
        "InStock": 0,
        "ClusterNumber": 13
    },
    {
        "Name": "Adobe AIR in Action",
        "Pages": 336,
        "Author": "Joey Lott, Kathryn Rotondo, Sam Ahn, Ashley Atkins",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lott.jpg",
        "Price": 42.81,
        "InStock": 1,
        "ClusterNumber": 10
    },
    {
        "Name": "Ant in Action",
        "Pages": 600,
        "Author": "Steve Loughran, Erik Hatcher",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/loughran.jpg",
        "Price": 92.62,
        "InStock": 3,
        "ClusterNumber": 7
    },
    {
        "Name": "Restlet in Action",
        "Pages": 450,
        "Author": "Jerome Louvel, Thierry Boileau, , Philippe Mougin",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/louvel.jpg",
        "Price": 70.44,
        "InStock": 1,
        "ClusterNumber": 9
    },
    {
        "Name": "iText in Action",
        "Pages": 688,
        "Author": "Bruno Lowagie",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lowagie.jpg",
        "Price": 38.47,
        "InStock": 1,
        "ClusterNumber": 6
    },
    {
        "Name": "iText in Action, Second Edition",
        "Pages": 600,
        "Author": "Bruno Lowagie",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lowagie2.jpg",
        "Price": 62.71,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "Power-3D",
        "Pages": 550,
        "Author": "Kyle Lussier",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lussier.jpg",
        "Price": 47.06,
        "InStock": 3,
        "ClusterNumber": 16
    },
    {
        "Name": "SNA and TCP/IP Enterprise Networking",
        "Pages": 540,
        "Author": "Daniel C. Lynch, James P. Gray, and Edward Rabinovitch, editors",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lynch.jpg",
        "Price": 71.06,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "Subversion in Action",
        "Pages": 356,
        "Author": "Jeffrey Machols",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/machols.jpg",
        "Price": 13.74,
        "InStock": 2,
        "ClusterNumber": 9
    },
    {
        "Name": "Minimal Perl",
        "Pages": 504,
        "Author": "Tim Maher",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/maher.jpg",
        "Price": 0.57,
        "InStock": 0,
        "ClusterNumber": 13
    },
    {
        "Name": "Distributed Programming with Java",
        "Pages": 320,
        "Author": "Qusay H. Mahmoud",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mahmoud.jpg",
        "Price": 42.11,
        "InStock": 1,
        "ClusterNumber": 3
    },
    {
        "Name": "Comprehensive Networking Glossary and Acronym Guide",
        "Pages": 208,
        "Author": "Gary Scott Malkin",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/malkin.jpg",
        "Price": 64.58,
        "InStock": 3,
        "ClusterNumber": 18
    },
    {
        "Name": "JavaServer Faces in Action",
        "Pages": 744,
        "Author": "Kito D. Mann",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mann.jpg",
        "Price": 30.6,
        "InStock": 1,
        "ClusterNumber": 4
    },
    {
        "Name": "LINQ in Action",
        "Pages": 576,
        "Author": "Fabrice Marguerie, Steve Eichert, Jim Wooley",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/marguerie.jpg",
        "Price": 59.69,
        "InStock": 3,
        "ClusterNumber": 9
    },
    {
        "Name": "Internet BBSs",
        "Pages": 400,
        "Author": "Richard Scott Mark",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mark.jpg",
        "Price": 8.61,
        "InStock": 3,
        "ClusterNumber": 17
    },
    {
        "Name": "Algorithms of the Intelligent Web",
        "Pages": 368,
        "Author": "Haralambos Marmanis, Dmitry Babenko",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/marmanis.jpg",
        "Price": 35.92,
        "InStock": 3,
        "ClusterNumber": 15
    },
    {
        "Name": "JUnit in Action",
        "Pages": 384,
        "Author": "Vincent Massol with Ted Husted",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/massol.jpg",
        "Price": 9.58,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "Tika in Action",
        "Pages": 107,
        "Author": "Chris A. Mattmann, Jukka L. Zitting",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mattmann.jpg",
        "Price": 21,
        "InStock": 3,
        "ClusterNumber": 15
    },
    {
        "Name": "Ruby in Practice",
        "Pages": 360,
        "Author": "Jeremy McAnally, Assaf Arkin",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcanally.jpg",
        "Price": 78.98,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "Inside LotusScript",
        "Pages": 420,
        "Author": "Joe McGinn",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcginn.jpg",
        "Price": 1.38,
        "InStock": 1,
        "ClusterNumber": 11
    },
    {
        "Name": "Maximum MIDI",
        "Pages": 450,
        "Author": "Paul Messick",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/messick.jpg",
        "Price": 26.93,
        "InStock": 1,
        "ClusterNumber": 10
    },
    {
        "Name": "Planning and Managing ATM Networks",
        "Pages": 320,
        "Author": "Daniel Minoli, Thomas W. Golway, , Norris P. Smith",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/minoli.jpg",
        "Price": 94.29,
        "InStock": 0,
        "ClusterNumber": 5
    },
    {
        "Name": "Client/Server Applications on ATM Networks",
        "Pages": 350,
        "Author": "Daniel Minoli, Andrew Schmidt",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/minoli2.jpg",
        "Price": 15.52,
        "InStock": 2,
        "ClusterNumber": 7
    },
    {
        "Name": "JavaFX in Action",
        "Pages": 373,
        "Author": "Simon Morris",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/morris.jpg",
        "Price": 25.56,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "Entity Framework 4 in Action",
        "Pages": 576,
        "Author": "Stefano Mostarda, Marco De Sanctis, , Daniele Bochicchio",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mostarda.jpg",
        "Price": 84.91,
        "InStock": 1,
        "ClusterNumber": 18
    },
    {
        "Name": "ASP.NET 2.0 Web Parts in Action",
        "Pages": 344,
        "Author": "Darren Neimke",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neimke.jpg",
        "Price": 17.6,
        "InStock": 2,
        "ClusterNumber": 2
    },
    {
        "Name": "Sass and Compass in Action",
        "Pages": 300,
        "Author": "Wynn Netherland, Nathan Weizenbaum, Chris Eppstein, , Brandon Mathis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/netherland.jpg",
        "Price": 14.67,
        "InStock": 3,
        "ClusterNumber": 12
    },
    {
        "Name": "Core OWL 5.0",
        "Pages": 500,
        "Author": "Ted Neward",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neward.jpg",
        "Price": 15.58,
        "InStock": 1,
        "ClusterNumber": 12
    },
    {
        "Name": "Advanced OWL 5.0",
        "Pages": 570,
        "Author": "Ted Neward",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neward2.jpg",
        "Price": 88.65,
        "InStock": 1,
        "ClusterNumber": 1
    },
    {
        "Name": "Server-Based Java Programming",
        "Pages": 592,
        "Author": "Ted Neward",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/neward3.jpg",
        "Price": 37.81,
        "InStock": 2,
        "ClusterNumber": 2
    },
    {
        "Name": "SQL Server MVP Deep Dives",
        "Pages": 848,
        "Author": "Contributions from 53 SQL Server MVPs, Edited by Paul Nielsen, Kalen Delaney, Greg Low, Adam Machanic, Paul S. Randal, , Kimberly L. Tripp",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nielsen.jpg",
        "Price": 29.79,
        "InStock": 1,
        "ClusterNumber": 5
    },
    {
        "Name": "SQL Server MVP Deep Dives",
        "Pages": 848,
        "Author": "Contributions from 53 SQL Server MVPs; Edited by Paul Nielsen, Kalen Delaney, Greg Low, Adam Machanic, Paul S. Randal, , Kimberly L. Tripp",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nielsenaw.jpg",
        "Price": 72.69,
        "InStock": 1,
        "ClusterNumber": 13
    },
    {
        "Name": "SQL Server MVP Deep Dives",
        "Pages": 848,
        "Author": "Paul Nielsen, Kalen Delaney, Greg Low, Adam Machanic, Paul S. Randal, , Kimberly L. Tripp",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nielsonaw.jpg",
        "Price": 51.73,
        "InStock": 1,
        "ClusterNumber": 20
    },
    {
        "Name": "PostGIS in Action",
        "Pages": 325,
        "Author": "Regina O. Obe, Leo S. Hsu",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/obe.jpg",
        "Price": 82.8,
        "InStock": 3,
        "ClusterNumber": 3
    },
    {
        "Name": "Programming Mac OS X",
        "Pages": 384,
        "Author": "Kevin O'Malley",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/omalley.jpg",
        "Price": 54.3,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "The Art of Unit Testing",
        "Pages": 320,
        "Author": "Roy Osherove",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/osherove.jpg",
        "Price": 46.19,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "Mahout in Action",
        "Pages": 375,
        "Author": "Sean Owen, Robin Anil, Ted Dunning, , Ellen Friedman",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/owen.jpg",
        "Price": 67.29,
        "InStock": 1,
        "ClusterNumber": 18
    },
    {
        "Name": "ASP.NET MVC in Action",
        "Pages": 392,
        "Author": "Jeffrey Palermo, Ben Scheirman, , Jimmy Bogard",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo.jpg",
        "Price": 50.48,
        "InStock": 2,
        "ClusterNumber": 4
    },
    {
        "Name": "ASP.NET MVC 2 in Action",
        "Pages": 432,
        "Author": "Jeffrey Palermo, Ben Scheirman, Jimmy Bogard, Eric Hexter, , Matthew Hinze",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo2.jpg",
        "Price": 68.36,
        "InStock": 1,
        "ClusterNumber": 19
    },
    {
        "Name": "ASP.NET MVC 4 in Action",
        "Pages": 450,
        "Author": "Jeffrey Palermo, Jimmy Bogard, Eric Hexter, Matthew Hinze, , Jeremy Skinner",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/palermo3.jpg",
        "Price": 59.4,
        "InStock": 2,
        "ClusterNumber": 10
    },
    {
        "Name": "EJB 3 in Action",
        "Pages": 712,
        "Author": "Debu Panda, Reza Rahman, Derek Lane",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/panda.jpg",
        "Price": 24.87,
        "InStock": 0,
        "ClusterNumber": 16
    },
    {
        "Name": "EJB 3 in Action, Second Edition",
        "Pages": 109,
        "Author": "Debu Panda, Reza Rahman, Ryan Cuprak, , Michael Remijan",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/panda2.jpg",
        "Price": 48.87,
        "InStock": 3,
        "ClusterNumber": 6
    },
    {
        "Name": "Explorer's Guide to the Semantic Web",
        "Pages": 304,
        "Author": "Thomas B. Passin",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/passin.jpg",
        "Price": 36.52,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "Practical LotusScript",
        "Pages": 512,
        "Author": "Anthony Patton",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/patton.jpg",
        "Price": 85.41,
        "InStock": 1,
        "ClusterNumber": 10
    },
    {
        "Name": "Domino Development with Java",
        "Pages": 467,
        "Author": "Anthony Patton",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/patton2.jpg",
        "Price": 17.47,
        "InStock": 3,
        "ClusterNumber": 15
    },
    {
        "Name": "Windows PowerShell in Action",
        "Pages": 576,
        "Author": "Bruce Payette",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/payette.jpg",
        "Price": 56.95,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "Windows PowerShell in Action, Second Edition",
        "Pages": 700,
        "Author": "Bruce Payette",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/payette2.jpg",
        "Price": 78.79,
        "InStock": 2,
        "ClusterNumber": 10
    },
    {
        "Name": "Silverlight 4 in Action, Revised Edition",
        "Pages": 425,
        "Author": "Pete Brown",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pbrown.jpg",
        "Price": 34.15,
        "InStock": 1,
        "ClusterNumber": 16
    },
    {
        "Name": "Silverlight 5 in Action",
        "Pages": 925,
        "Author": "Pete Brown",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pbrown2.jpg",
        "Price": 81.48,
        "InStock": 0,
        "ClusterNumber": 1
    },
    {
        "Name": "Hibernate Quickly",
        "Pages": 456,
        "Author": "Patrick Peak, Nick Heudecker",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/peak.jpg",
        "Price": 54.17,
        "InStock": 3,
        "ClusterNumber": 16
    },
    {
        "Name": "Generative Art",
        "Pages": 116,
        "Author": "Matt Pearson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pearson.jpg",
        "Price": 53.42,
        "InStock": 2,
        "ClusterNumber": 10
    },
    {
        "Name": "Windows Phone 7 in Action",
        "Pages": 137,
        "Author": "Timothy Binkley-Jones, Massimo Perga, , Michael Sync",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/perga.jpg",
        "Price": 27.52,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "Lift in Action",
        "Pages": 450,
        "Author": "Timothy Perrett",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/perrett.jpg",
        "Price": 29.48,
        "InStock": 2,
        "ClusterNumber": 17
    },
    {
        "Name": "Web Development with Apache and Perl",
        "Pages": 424,
        "Author": "Theo Petersen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/petersen.jpg",
        "Price": 43.89,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "Real-World Functional Programming",
        "Pages": 560,
        "Author": "Tomas Petricek with Jon Skeet",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/petricek.jpg",
        "Price": 18.12,
        "InStock": 1,
        "ClusterNumber": 2
    },
    {
        "Name": "Machine Learning in Action",
        "Pages": 159,
        "Author": "Peter Harrington",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pharrington.jpg",
        "Price": 38.23,
        "InStock": 3,
        "ClusterNumber": 6
    },
    {
        "Name": "Dependency Injection",
        "Pages": 352,
        "Author": "Dhanji R. Prasanna",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/prasanna.jpg",
        "Price": 85.43,
        "InStock": 0,
        "ClusterNumber": 11
    },
    {
        "Name": "Understanding Enterprise SOA",
        "Pages": 280,
        "Author": "Eric Pulier and Hugh Taylor, Foreword by Paul Gaffney",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pulier.jpg",
        "Price": 46.46,
        "InStock": 2,
        "ClusterNumber": 2
    },
    {
        "Name": "Open-Source ESBs in Action",
        "Pages": 528,
        "Author": "Tijs Rademakers, Jos Dirksen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rademakers.jpg",
        "Price": 7.6,
        "InStock": 2,
        "ClusterNumber": 1
    },
    {
        "Name": "Activiti in Action",
        "Pages": 138,
        "Author": "Tijs Rademakers",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rademakers2.jpg",
        "Price": 24.36,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "DSLs in Boo: Domain-Specific Languages in .NET",
        "Pages": 352,
        "Author": "Oren Eini writing as Ayende Rahien",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rahien.jpg",
        "Price": 36.46,
        "InStock": 2,
        "ClusterNumber": 0
    },
    {
        "Name": "JUnit Recipes",
        "Pages": 752,
        "Author": "J. B. Rainsberger with contributions by Scott Stirling",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rainsberger.jpg",
        "Price": 31.66,
        "InStock": 3,
        "ClusterNumber": 15
    },
    {
        "Name": "wxPython in Action",
        "Pages": 620,
        "Author": "Noel Rappin, Robin Dunn",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rappin.jpg",
        "Price": 27.33,
        "InStock": 3,
        "ClusterNumber": 7
    },
    {
        "Name": "Clojure in Action",
        "Pages": 475,
        "Author": "Amit Rathore",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rathore.jpg",
        "Price": 54.97,
        "InStock": 1,
        "ClusterNumber": 12
    },
    {
        "Name": "Scala in Action",
        "Pages": 118,
        "Author": "Nilanjan Raychaudhuri",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/raychaudhuri.jpg",
        "Price": 39.08,
        "InStock": 1,
        "ClusterNumber": 6
    },
    {
        "Name": "Working with Objects",
        "Pages": 420,
        "Author": "Trygve Reenskaug",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/reenskaug.jpg",
        "Price": 57.86,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "PHP in Action",
        "Pages": 552,
        "Author": "Dagfinn Reiersøl with Marcus Baker, Chris Shiflett",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/reiersol.jpg",
        "Price": 90.71,
        "InStock": 1,
        "ClusterNumber": 1
    },
    {
        "Name": "Secrets of the JavaScript Ninja",
        "Pages": 300,
        "Author": "John Resig",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/resig.jpg",
        "Price": 87.22,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "Microsoft Office Essentials",
        "Pages": 480,
        "Author": "Ronny Richardson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/richardson2.jpg",
        "Price": 33.97,
        "InStock": 0,
        "ClusterNumber": 18
    },
    {
        "Name": "Swing",
        "Pages": 127,
        "Author": "Matthew Robinson, Pavel Vorobiev",
        "Price": 5.55,
        "InStock": 0,
        "ClusterNumber": 11
    },
    {
        "Name": "The Awesome Power of Java Beans",
        "Pages": 500,
        "Author": "Lawrence H. Rodrigues",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rodrigues.jpg",
        "Price": 21.37,
        "InStock": 1,
        "ClusterNumber": 4
    },
    {
        "Name": "Personal Videoconferencing",
        "Pages": 420,
        "Author": "Evan Rosen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosen.jpg",
        "Price": 37.98,
        "InStock": 0,
        "ClusterNumber": 20
    },
    {
        "Name": "The Cloud at Your Service",
        "Pages": 200,
        "Author": "Jothy Rosenberg, Arthur Mateos",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosenberg.jpg",
        "Price": 66.65,
        "InStock": 2,
        "ClusterNumber": 4
    },
    {
        "Name": "Implementing Elliptic Curve Cryptography",
        "Pages": 330,
        "Author": "Michael Rosing",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rosing.jpg",
        "Price": 89.25,
        "InStock": 1,
        "ClusterNumber": 4
    },
    {
        "Name": "SOA Patterns",
        "Pages": 250,
        "Author": "Arnon Rotem-Gal-Oz",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rotem.jpg",
        "Price": 89.97,
        "InStock": 1,
        "ClusterNumber": 13
    },
    {
        "Name": "Hello World!",
        "Pages": 432,
        "Author": "Warren D. Sande, Carter Sande",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sande.jpg",
        "Price": 56.85,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "SCBCD Exam Study Kit",
        "Pages": 488,
        "Author": "Paul Sanghera",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sanghera.jpg",
        "Price": 85.74,
        "InStock": 2,
        "ClusterNumber": 10
    },
    {
        "Name": "Portlets in Action",
        "Pages": 475,
        "Author": "Ashish Sarin",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sarin.jpg",
        "Price": 78.59,
        "InStock": 2,
        "ClusterNumber": 19
    },
    {
        "Name": "SWT/JFace in Action",
        "Pages": 496,
        "Author": "Matthew Scarpino, Stephen Holder, Stanford Ng, , Laurent Mihalkovic",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/scarpino.jpg",
        "Price": 32.88,
        "InStock": 2,
        "ClusterNumber": 19
    },
    {
        "Name": "OpenCL in Action",
        "Pages": 167,
        "Author": "Matthew Scarpino",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/scarpino2.jpg",
        "Price": 46.4,
        "InStock": 3,
        "ClusterNumber": 15
    },
    {
        "Name": "Multiprotocol over ATM",
        "Pages": 341,
        "Author": "Andrew Schmidt, Daniel Minoli",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/schmidt.jpg",
        "Price": 60.7,
        "InStock": 3,
        "ClusterNumber": 14
    },
    {
        "Name": "Dependency Injection in .NET",
        "Pages": 375,
        "Author": "Mark Seemann",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/seemann.jpg",
        "Price": 47.3,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "Java 3D Programming",
        "Pages": 400,
        "Author": "Daniel Selman",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/selman.jpg",
        "Price": 70.49,
        "InStock": 0,
        "ClusterNumber": 12
    },
    {
        "Name": "Liferay in Action",
        "Pages": 375,
        "Author": "Richard Sezov, Jr",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sezov.jpg",
        "Price": 17.92,
        "InStock": 3,
        "ClusterNumber": 7
    },
    {
        "Name": "JSP Tag Libraries",
        "Pages": 656,
        "Author": "Gal Shachor, Adam Chace, Magnus Rydin",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/shachor.jpg",
        "Price": 52.87,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "Instant Messaging in Java",
        "Pages": 402,
        "Author": "Iain Shigeoka",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/shigeoka.jpg",
        "Price": 81.18,
        "InStock": 2,
        "ClusterNumber": 16
    },
    {
        "Name": "Java Applets and Channels Without Programming",
        "Pages": 372,
        "Author": "Ronny Richardson, Michael Shoffner, Marq Singer, Bruce Murray, , Jack Gambol",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/shoffner.jpg",
        "Price": 65.94,
        "InStock": 2,
        "ClusterNumber": 13
    },
    {
        "Name": "PowerShell in Practice",
        "Pages": 500,
        "Author": "Richard Siddaway",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/siddaway.jpg",
        "Price": 38.51,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "PowerShell and WMI",
        "Pages": 117,
        "Author": "Richard Siddaway",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/siddaway2.jpg",
        "Price": 82.34,
        "InStock": 3,
        "ClusterNumber": 6
    },
    {
        "Name": "Making Sense of Java",
        "Pages": 180,
        "Author": "Bruce Simpson, John Mitchell, Brian Christeson, Rehan Zaidi, , Jonathan Levine",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/simpson.jpg",
        "Price": 65.33,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "C++/CLI in Action",
        "Pages": 416,
        "Author": "Nishant Sivakumar",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sivakumar.jpg",
        "Price": 31.9,
        "InStock": 2,
        "ClusterNumber": 9
    },
    {
        "Name": "C# in Depth",
        "Pages": 424,
        "Author": "Jon Skeet",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeet.jpg",
        "Price": 22.13,
        "InStock": 2,
        "ClusterNumber": 13
    },
    {
        "Name": "C# in Depth, Second Edition",
        "Pages": 584,
        "Author": "Jon Skeet",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeet2.jpg",
        "Price": 15.41,
        "InStock": 2,
        "ClusterNumber": 7
    },
    {
        "Name": "Magical A-Life Avatars",
        "Pages": 450,
        "Author": "Peter Small",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/small.jpg",
        "Price": 11.91,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "Becoming Agile",
        "Pages": 408,
        "Author": "Greg Smith, Ahmed Sidky",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/smith.jpg",
        "Price": 76.52,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "ActiveMQ in Action",
        "Pages": 408,
        "Author": "Bruce Snyder, Dejan Bosanac, , Rob Davies",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/snyder.jpg",
        "Price": 99.44,
        "InStock": 2,
        "ClusterNumber": 9
    },
    {
        "Name": "Implementing PeopleSoft Financials",
        "Pages": 220,
        "Author": "Early Stephens",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stephens.jpg",
        "Price": 9.61,
        "InStock": 1,
        "ClusterNumber": 9
    },
    {
        "Name": "SQL Server DMVs in Action",
        "Pages": 352,
        "Author": "Ian W. Stirk",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/stirk.jpg",
        "Price": 14.08,
        "InStock": 2,
        "ClusterNumber": 19
    },
    {
        "Name": "Scala in Depth",
        "Pages": 157,
        "Author": "Joshua D. Suereth",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/suereth.jpg",
        "Price": 93.96,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "JMX in Action",
        "Pages": 424,
        "Author": "Benjamin G. Sullins, Mark B. Whipple",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sullins.jpg",
        "Price": 21.23,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "EJB Cookbook",
        "Pages": 352,
        "Author": "Benjamin G. Sullins, Mark B. Whipple",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sullins2.jpg",
        "Price": 42.96,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "GWT in Action, Second Edition",
        "Pages": 147,
        "Author": "Adam Tacy, Robert Hanson, Jason Essington, , Anna Tökke",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tacy.jpg",
        "Price": 71.76,
        "InStock": 2,
        "ClusterNumber": 13
    },
    {
        "Name": "JUnit in Action, Second Edition",
        "Pages": 504,
        "Author": "Petar Tahchiev, Felipe Leme, Vincent Massol, , Gary Gregory",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tahchiev.jpg",
        "Price": 63.53,
        "InStock": 1,
        "ClusterNumber": 20
    },
    {
        "Name": "Bitter Java",
        "Pages": 368,
        "Author": "Bruce A. Tate",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tate.jpg",
        "Price": 23.26,
        "InStock": 1,
        "ClusterNumber": 10
    },
    {
        "Name": "Bitter EJB",
        "Pages": 440,
        "Author": "Bruce Tate, Mike Clark, Bob Lee, Patrick Linskey",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/tate2.jpg",
        "Price": 87.03,
        "InStock": 2,
        "ClusterNumber": 15
    },
    {
        "Name": "Spring Batch in Action",
        "Pages": 102,
        "Author": "Arnaud Cogoluegnes, Thierry Templier, Gary Gregory, Olivier Bazoud",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/templier.jpg",
        "Price": 11.02,
        "InStock": 2,
        "ClusterNumber": 9
    },
    {
        "Name": "JDK 1.4 Tutorial",
        "Pages": 408,
        "Author": "Gregory M. Travis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/travis.jpg",
        "Price": 89.36,
        "InStock": 2,
        "ClusterNumber": 10
    },
    {
        "Name": "iPhone and iPad in Action",
        "Pages": 450,
        "Author": "Brandon Trebitowski, Christopher Allen, , Shannon Appelcline",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/trebitowski.jpg",
        "Price": 57.3,
        "InStock": 1,
        "ClusterNumber": 18
    },
    {
        "Name": "SQL Server 2005 Reporting Services in Action",
        "Pages": 600,
        "Author": "Bret Updegraff",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/updegraff.jpg",
        "Price": 75.81,
        "InStock": 2,
        "ClusterNumber": 12
    },
    {
        "Name": "Ten Years of UserFriendly.Org",
        "Pages": 1096,
        "Author": "JD \"Illiad\" Frazer",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/userfriendly.jpg",
        "Price": 30.43,
        "InStock": 3,
        "ClusterNumber": 11
    },
    {
        "Name": "Graphics Programming with Perl",
        "Pages": 328,
        "Author": "Martien Verbruggen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/verbruggen.jpg",
        "Price": 4.85,
        "InStock": 1,
        "ClusterNumber": 0
    },
    {
        "Name": "RabbitMQ in Action",
        "Pages": 117,
        "Author": "Alvaro Videla, Jason J.W. Williams",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/videla.jpg",
        "Price": 71.39,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "XDoclet in Action",
        "Pages": 624,
        "Author": "Craig Walls, Norman Richards",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls.jpg",
        "Price": 76.94,
        "InStock": 2,
        "ClusterNumber": 15
    },
    {
        "Name": "Spring in Action",
        "Pages": 472,
        "Author": "Craig Walls, Ryan Breidenbach",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls2.jpg",
        "Price": 31.82,
        "InStock": 2,
        "ClusterNumber": 11
    },
    {
        "Name": "Spring in Action, Second Edition",
        "Pages": 768,
        "Author": "Craig Walls with Ryan Breidenbach",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls3.jpg",
        "Price": 19.94,
        "InStock": 2,
        "ClusterNumber": 7
    },
    {
        "Name": "Spring in Action, Third Edition",
        "Pages": 424,
        "Author": "Craig Walls",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls4.jpg",
        "Price": 68.39,
        "InStock": 3,
        "ClusterNumber": 3
    },
    {
        "Name": "Spring in Practice",
        "Pages": 600,
        "Author": "Willie Wheeler with Joshua White",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wheeler.jpg",
        "Price": 61.7,
        "InStock": 0,
        "ClusterNumber": 14
    },
    {
        "Name": "Java 2 Micro Edition",
        "Pages": 504,
        "Author": "James P. White, David A. Hemphill",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/white.jpg",
        "Price": 39.83,
        "InStock": 1,
        "ClusterNumber": 20
    },
    {
        "Name": "SharePoint 2010 Workflows in Action",
        "Pages": 360,
        "Author": "Phil Wicklund",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wicklund.jpg",
        "Price": 29.8,
        "InStock": 3,
        "ClusterNumber": 12
    },
    {
        "Name": "SharePoint 2010 Web Parts in Action",
        "Pages": 448,
        "Author": "Wictor Wilén",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wilen.jpg",
        "Price": 13.55,
        "InStock": 1,
        "ClusterNumber": 15
    },
    {
        "Name": "C++ Concurrency in Action",
        "Pages": 325,
        "Author": "Anthony Williams",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/williams.jpg",
        "Price": 36.68,
        "InStock": 3,
        "ClusterNumber": 2
    },
    {
        "Name": "Java Servlets by Example",
        "Pages": 550,
        "Author": "Alan R. Williamson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/williamson.jpg",
        "Price": 11.22,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "XML Programming with VB and ASP",
        "Pages": 320,
        "Author": "Mark Wilson, Tracey Wilson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wilson.jpg",
        "Price": 99.4,
        "InStock": 3,
        "ClusterNumber": 15
    },
    {
        "Name": "Oracle8i Database Administration",
        "Pages": 543,
        "Author": "Noel Yuhanna",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/yuhanna.jpg",
        "Price": 87.11,
        "InStock": 0,
        "ClusterNumber": 11
    },
    {
        "Name": "The Engaging Web",
        "Pages": 325,
        "Author": "Gabe Zichermann, Chris Cunningham",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/zichermann.jpg",
        "Price": 43.4,
        "InStock": 2,
        "ClusterNumber": 17
    },
    {
        "Name": "Enterprise OSGi In Action",
        "Pages": 158,
        "Author": "Holly Cummins, Timothy Ward",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cummins.jpg",
        "Price": 31,
        "InStock": 1,
        "ClusterNumber": 11
    },
    {
        "Name": "Ext JS in Action, Second Edition",
        "Pages": 189,
        "Author": "Jesus Garcia, Grgur Grisogono, , Jacob K. Andresen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/garcia3.jpg",
        "Price": 15.74,
        "InStock": 3,
        "ClusterNumber": 18
    },
    {
        "Name": "Android in Action, Third Edition",
        "Pages": 198,
        "Author": "W. Frank Ableson, Robi Sen, Chris King, C. Enrique Ortiz",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson3.jpg",
        "Price": 80.47,
        "InStock": 1,
        "ClusterNumber": 15
    },
    {
        "Name": "Arduino in Action",
        "Pages": 300,
        "Author": "Martin Evans, Joshua Noble, , Jordan Hochenbaum",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mevans.jpg",
        "Price": 58.84,
        "InStock": 0,
        "ClusterNumber": 2
    },
    {
        "Name": "Node.js in Action",
        "Pages": 300,
        "Author": "Mike Cantelon, Marc Harter, T.J. Holowaychuk, , Nathan Rajlich",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/cantelon.jpg",
        "Price": 6.99,
        "InStock": 1,
        "ClusterNumber": 18
    },
    {
        "Name": "Third-Party JavaScript ",
        "Pages": 151,
        "Author": "Ben Vinegar, Anton Kovalyov",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/vinegar.jpg",
        "Price": 81.11,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "Multimedia Computing",
        "Pages": 132,
        "Author": "Matthew E. Hodges",
        "Price": 34.76,
        "InStock": 2,
        "ClusterNumber": 18
    },
    {
        "Name": "Web Development with JavaServer Pages",
        "Pages": 112,
        "Author": "Duane K. Fields, Mark A. Kolb",
        "Price": 73.06,
        "InStock": 3,
        "ClusterNumber": 4
    },
    {
        "Name": "Up to Speed with Swing",
        "Pages": 120,
        "Author": "Steven J. Gutz",
        "Price": 57.03,
        "InStock": 0,
        "ClusterNumber": 11
    },
    {
        "Name": "Manager's Guide to Open Source",
        "Pages": 181,
        "Author": "Maria Winslow",
        "Price": 52.85,
        "InStock": 3,
        "ClusterNumber": 19
    },
    {
        "Name": "Programming Web Services with Java",
        "Pages": 183,
        "Author": "Ajamu A. Wesley",
        "Price": 82.1,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "TCP/IP Programming for OS/2",
        "Pages": 107,
        "Author": "Steven J. Gutz",
        "Price": 59.84,
        "InStock": 2,
        "ClusterNumber": 15
    },
    {
        "Name": "SCWCD Exam Study Kit",
        "Pages": 176,
        "Author": "Hanumant Deshmukh, Jignesh Malavia",
        "Price": 34.32,
        "InStock": 3,
        "ClusterNumber": 19
    },
    {
        "Name": "Unit Testing in C++",
        "Pages": 164,
        "Author": "Bruce Trask, Angel Roman",
        "Price": 60.65,
        "InStock": 2,
        "ClusterNumber": 13
    },
    {
        "Name": "Big Data",
        "Pages": 110,
        "Author": "Nathan Marz, James Warren",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/marz.jpg",
        "Price": 60.94,
        "InStock": 1,
        "ClusterNumber": 13
    },
    {
        "Name": "CoffeeScript in Action",
        "Pages": 125,
        "Author": "Patrick Lee",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lee.jpg",
        "Price": 23.05,
        "InStock": 3,
        "ClusterNumber": 20
    },
    {
        "Name": "SQL Server MVP Deep Dives, Volume 2",
        "Pages": 750,
        "Author": "Kalen Delaney, Louis Davidson, Greg Low, Brad McGehee, Paul Nielsen, Paul Randal, , Kimberly Tripp",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/delaney.jpg",
        "Price": 52.72,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "HTML5 in Action",
        "Pages": 375,
        "Author": "Rob Crowther, Joe Lennon, Ash Blue, , Greg Wanish",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/crowther2.jpg",
        "Price": 30.48,
        "InStock": 2,
        "ClusterNumber": 7
    },
    {
        "Name": "Java Persistence with Hibernate, Second Edition",
        "Pages": 130,
        "Author": "Christian Bauer, Gavin King, , Gary Gregory",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bauer3.jpg",
        "Price": 59.89,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "Hadoop in Practice",
        "Pages": 126,
        "Author": "Alex Holmes",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/holmes.jpg",
        "Price": 67.02,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "HBase in Action",
        "Pages": 136,
        "Author": "Nicholas Dimiduk, Amandeep Khurana",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dimidukkhurana.jpg",
        "Price": 28.99,
        "InStock": 0,
        "ClusterNumber": 4
    },
    {
        "Name": "Flex Mobile in Action",
        "Pages": 127,
        "Author": "Jonathan Campos",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/campos.jpg",
        "Price": 88.41,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "HTML5 for .NET Developers",
        "Pages": 111,
        "Author": "Jim Jackson, II, Ian Gilman",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jackson.jpg",
        "Price": 29.21,
        "InStock": 1,
        "ClusterNumber": 6
    },
    {
        "Name": "50 Android Hacks",
        "Pages": 199,
        "Author": "Carlos M. Sessa",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sessa.jpg",
        "Price": 58.19,
        "InStock": 2,
        "ClusterNumber": 17
    },
    {
        "Name": "PowerShell in Depth",
        "Pages": 102,
        "Author": "Don Jones, Richard Siddaway, , Jeffery Hicks",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones2.jpg",
        "Price": 60.28,
        "InStock": 1,
        "ClusterNumber": 11
    },
    {
        "Name": "Augmented Reality Revealed",
        "Pages": 187,
        "Author": "Robert A. Rice Jr.",
        "Price": 85.55,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "Building Well-Structured JavaScript Applications",
        "Pages": 124,
        "Author": "Julio C. Ody",
        "Price": 72.14,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "Linked Data",
        "Pages": 196,
        "Author": "David Wood, Marsha Zaidman, Luke Ruth, with Michael Hausenblas",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dwood.jpg",
        "Price": 23.31,
        "InStock": 2,
        "ClusterNumber": 16
    },
    {
        "Name": "Mule in Action, Second Edition",
        "Pages": 125,
        "Author": "David Dossot, John D'Emic, , Victor Romero",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/dossot2.jpg",
        "Price": 74.83,
        "InStock": 3,
        "ClusterNumber": 11
    },
    {
        "Name": "Single Page Web Applications",
        "Pages": 138,
        "Author": "Michael S. Mikowski, Josh C. Powell",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mikowski.jpg",
        "Price": 36.34,
        "InStock": 1,
        "ClusterNumber": 15
    },
    {
        "Name": "The Art of Unit Testing, Second Edition",
        "Pages": 195,
        "Author": "Roy Osherove",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/osherove2.jpg",
        "Price": 64.26,
        "InStock": 0,
        "ClusterNumber": 17
    },
    {
        "Name": "Play for Java",
        "Pages": 132,
        "Author": "Nicolas Leroux, Sietse de Kaper",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/leroux.jpg",
        "Price": 72.51,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "Hello World! Second Edition",
        "Pages": 166,
        "Author": "Warren Sande, Carter Sande",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sande2.jpg",
        "Price": 25.74,
        "InStock": 0,
        "ClusterNumber": 6
    },
    {
        "Name": "Dart in Action",
        "Pages": 192,
        "Author": "Chris Buckett",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/buckett.jpg",
        "Price": 98.69,
        "InStock": 0,
        "ClusterNumber": 4
    },
    {
        "Name": "Redis in Action",
        "Pages": 142,
        "Author": "Josiah Carlson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carlson.jpg",
        "Price": 59.09,
        "InStock": 0,
        "ClusterNumber": 9
    },
    {
        "Name": "Using the TI-83 Plus/TI-84 Plus",
        "Pages": 175,
        "Author": "Christopher R. Mitchell",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mitchell2.jpg",
        "Price": 89.07,
        "InStock": 2,
        "ClusterNumber": 17
    },
    {
        "Name": "Neo4j in Action",
        "Pages": 190,
        "Author": "Jonas Partner, Aleksa Vukotic, , Nicki Watt",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/partner.jpg",
        "Price": 81.9,
        "InStock": 1,
        "ClusterNumber": 10
    },
    {
        "Name": "Programming the TI-83 Plus/TI-84 Plus",
        "Pages": 133,
        "Author": "Christopher R. Mitchell",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mitchell.jpg",
        "Price": 15.79,
        "InStock": 1,
        "ClusterNumber": 3
    },
    {
        "Name": "Functional Programming in Scala",
        "Pages": 100,
        "Author": "Paul Chiusano, Rúnar Bjarnason",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bjarnason.jpg",
        "Price": 51.16,
        "InStock": 1,
        "ClusterNumber": 5
    },
    {
        "Name": "Play for Scala",
        "Pages": 160,
        "Author": "Peter Hilton, Erik Bakker, , Francisco Canedo",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hilton.jpg",
        "Price": 82.19,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "Node.js in Practice",
        "Pages": 130,
        "Author": "Alex Young, Marc Harter",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/templier2.jpg",
        "Price": 49.59,
        "InStock": 1,
        "ClusterNumber": 8
    },
    {
        "Name": "SonarQube in Action",
        "Pages": 188,
        "Author": "G. Ann Campbell, Patroklos P. Papapetrou",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/papapetrou.jpg",
        "Price": 32.67,
        "InStock": 2,
        "ClusterNumber": 4
    },
    {
        "Name": "Windows Store App Development: C# and XAML",
        "Pages": 132,
        "Author": "Peter M. Brown",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pbrown3.jpg",
        "Price": 8.6,
        "InStock": 2,
        "ClusterNumber": 11
    },
    {
        "Name": "Learn Windows IIS in a Month of Lunches",
        "Pages": 186,
        "Author": "Jason C. Helmick",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/helmick.jpg",
        "Price": 99.03,
        "InStock": 1,
        "ClusterNumber": 2
    },
    {
        "Name": "Mondrian in Action",
        "Pages": 138,
        "Author": "William Back, Nicholas Goodman, , Julian Hyde",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/back.jpg",
        "Price": 58.62,
        "InStock": 2,
        "ClusterNumber": 7
    },
    {
        "Name": "RabbitMQ in Depth",
        "Pages": 101,
        "Author": "Gavin M. Roy",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/roy.jpg",
        "Price": 18.36,
        "InStock": 2,
        "ClusterNumber": 9
    },
    {
        "Name": "Akka in Action",
        "Pages": 180,
        "Author": "Raymond Roestenburg, Rob Bakker, Rob Williams, Steven Haines",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/roestenburg.jpg",
        "Price": 15.46,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "Extending jQuery",
        "Pages": 107,
        "Author": "Keith B. Wood",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/wood.jpg",
        "Price": 7.29,
        "InStock": 2,
        "ClusterNumber": 6
    },
    {
        "Name": "OCA Java SE 7 Programmer I Certification Guide",
        "Pages": 156,
        "Author": "Mala Gupta",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gupta.jpg",
        "Price": 93.85,
        "InStock": 1,
        "ClusterNumber": 3
    },
    {
        "Name": "Kanban in Action",
        "Pages": 190,
        "Author": "Marcus Hammarberg, Joakim Sunden",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hammarberg.jpg",
        "Price": 67.26,
        "InStock": 2,
        "ClusterNumber": 7
    },
    {
        "Name": "Solr in Action",
        "Pages": 109,
        "Author": "Trey Grainger, Timothy Potter",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/grainger.jpg",
        "Price": 55.42,
        "InStock": 1,
        "ClusterNumber": 16
    },
    {
        "Name": "Making Sense of NoSQL",
        "Pages": 155,
        "Author": "Daniel G. McCreary, Ann M. Kelly",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mccreary.jpg",
        "Price": 28.71,
        "InStock": 0,
        "ClusterNumber": 1
    },
    {
        "Name": "Jaguar Development with PowerBuilder 7",
        "Pages": 182,
        "Author": "MIchael Barlotta",
        "Price": 9.1,
        "InStock": 3,
        "ClusterNumber": 19
    },
    {
        "Name": "Grails in Action, Second Edition",
        "Pages": 153,
        "Author": "Glen Smith, Peter Ledbrook",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gsmith2.jpg",
        "Price": 36.68,
        "InStock": 2,
        "ClusterNumber": 11
    },
    {
        "Name": "Rails 4 in Action",
        "Pages": 189,
        "Author": "Ryan Bigg, Yehuda Katz, and Steve Klabnik, ",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bigg2.jpg",
        "Price": 7.75,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "Learn Windows PowerShell in a Month of Lunches, Second Edition",
        "Pages": 145,
        "Author": "Don Jones, Jeffery D. Hicks",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones3.jpg",
        "Price": 17.13,
        "InStock": 3,
        "ClusterNumber": 18
    },
    {
        "Name": "AOP in .NET",
        "Pages": 191,
        "Author": "Matthew D. Groves",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/groves.jpg",
        "Price": 7.8,
        "InStock": 1,
        "ClusterNumber": 9
    },
    {
        "Name": "Learn PowerShell Toolmaking in a Month of Lunches",
        "Pages": 167,
        "Author": "Don Jones, Jeffery Hicks",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones4.jpg",
        "Price": 10.97,
        "InStock": 1,
        "ClusterNumber": 11
    },
    {
        "Name": "CMIS and Apache Chemistry in Action",
        "Pages": 157,
        "Author": "Florian Müller, Jay Brown, Jeff Potts",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mueller.jpg",
        "Price": 1.26,
        "InStock": 2,
        "ClusterNumber": 11
    },
    {
        "Name": "Action Guide (aka VB .NET)",
        "Pages": 182,
        "Author": "Paul Messick",
        "Price": 65.32,
        "InStock": 3,
        "ClusterNumber": 19
    },
    {
        "Name": "Learn Active Directory Management in a Month of Lunches",
        "Pages": 145,
        "Author": "Richard Siddaway",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/siddaway3.jpg",
        "Price": 79.47,
        "InStock": 1,
        "ClusterNumber": 0
    },
    {
        "Name": "Spring in Action, Fourth Edition",
        "Pages": 120,
        "Author": "Craig Walls",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/walls5.jpg",
        "Price": 42.32,
        "InStock": 2,
        "ClusterNumber": 8
    },
    {
        "Name": "The Mikado Method",
        "Pages": 108,
        "Author": "Ola Ellnestam, Daniel Brolund",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ellnestam.jpg",
        "Price": 65.89,
        "InStock": 2,
        "ClusterNumber": 16
    },
    {
        "Name": "The Responsive Web",
        "Pages": 155,
        "Author": "Matthew Carver",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carver.jpg",
        "Price": 54.24,
        "InStock": 1,
        "ClusterNumber": 4
    },
    {
        "Name": "Fast ASP.NET Websites",
        "Pages": 148,
        "Author": "Dean Alan Hume",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hume.jpg",
        "Price": 15.63,
        "InStock": 0,
        "ClusterNumber": 17
    },
    {
        "Name": "SBT in Action",
        "Pages": 155,
        "Author": "Joshua Suereth, Matthew Farwell",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/suereth2.jpg",
        "Price": 33.27,
        "InStock": 3,
        "ClusterNumber": 16
    },
    {
        "Name": "PowerShell Deep Dives",
        "Pages": 154,
        "Author": "Edited by Jeffery Hicks, Richard Siddaway, Oisin Grehan, , Aleksandar Nikolic",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hicks.jpg",
        "Price": 91.52,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "Gradle in Action",
        "Pages": 194,
        "Author": "Benjamin Muschko",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/muschko.jpg",
        "Price": 57.14,
        "InStock": 1,
        "ClusterNumber": 12
    },
    {
        "Name": "Scalatra in Action",
        "Pages": 176,
        "Author": "Ivan Porto Carrero, Ross A. Baker, Dave Hrycyszyn, Stefan Ollinger, , Jared Armstrong",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/carrero2.jpg",
        "Price": 64.93,
        "InStock": 3,
        "ClusterNumber": 13
    },
    {
        "Name": "AngularJS in Action",
        "Pages": 195,
        "Author": "Brian Ford, Lukas Ruebbelke",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bford.jpg",
        "Price": 69.43,
        "InStock": 0,
        "ClusterNumber": 14
    },
    {
        "Name": "Software Development Metrics",
        "Pages": 178,
        "Author": "David Nicolette",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/nicolette.jpg",
        "Price": 30.85,
        "InStock": 3,
        "ClusterNumber": 8
    },
    {
        "Name": "F# Deep Dives",
        "Pages": 142,
        "Author": "Tomas Petricek, Phillip Trelford",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/petricek_trelford.jpg",
        "Price": 33.46,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "C# in Depth, Third Edition",
        "Pages": 132,
        "Author": "Jon Skeet",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeet3.jpg",
        "Price": 25.69,
        "InStock": 2,
        "ClusterNumber": 12
    },
    {
        "Name": "PostGIS in Action, Second Edition",
        "Pages": 199,
        "Author": "Regina Obe, Leo Hsu",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/obe2.jpg",
        "Price": 72.97,
        "InStock": 0,
        "ClusterNumber": 8
    },
    {
        "Name": "R in Action, Second Edition",
        "Pages": 173,
        "Author": "Robert Kabacoff",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kabacoff2.jpg",
        "Price": 84.63,
        "InStock": 2,
        "ClusterNumber": 19
    },
    {
        "Name": "The Joy of Clojure, Second Edition",
        "Pages": 120,
        "Author": "Michael Fogus, Chris Houser",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/fogus2.jpg",
        "Price": 36.15,
        "InStock": 2,
        "ClusterNumber": 18
    },
    {
        "Name": "iOS 7 in Action",
        "Pages": 107,
        "Author": "Brendan G. Lim, Martin Conte Mac Donell",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/lim2.jpg",
        "Price": 3.36,
        "InStock": 0,
        "ClusterNumber": 6
    },
    {
        "Name": "Hello App Inventor!",
        "Pages": 163,
        "Author": "Paula Beer, Carl Simmons",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/beer.jpg",
        "Price": 65.39,
        "InStock": 1,
        "ClusterNumber": 20
    },
    {
        "Name": "Ember.js in Action",
        "Pages": 132,
        "Author": "Joachim Haagen Skeie",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/skeie.jpg",
        "Price": 37.56,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "Netty in Action",
        "Pages": 196,
        "Author": "Norman Maurer, Courtney Robinson",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/maurer.jpg",
        "Price": 54.48,
        "InStock": 2,
        "ClusterNumber": 10
    },
    {
        "Name": "RavenDB in Action",
        "Pages": 103,
        "Author": "Itamar Syn-Hershko",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/syn-hershko.jpg",
        "Price": 0.13,
        "InStock": 3,
        "ClusterNumber": 7
    },
    {
        "Name": "OCP Java SE 7 Programmer II Certification Guide",
        "Pages": 199,
        "Author": "Mala Gupta",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/gupta2.jpg",
        "Price": 62.39,
        "InStock": 3,
        "ClusterNumber": 19
    },
    {
        "Name": "Backbone.js in Action",
        "Pages": 154,
        "Author": "Samuel M. Breed, Cole Krumbholz, , Phillip Whisenhunt",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/breed.jpg",
        "Price": 63.89,
        "InStock": 1,
        "ClusterNumber": 15
    },
    {
        "Name": "Clojure in Action, Second Edition",
        "Pages": 189,
        "Author": "Amit Rathore",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rathore2.jpg",
        "Price": 75.84,
        "InStock": 2,
        "ClusterNumber": 13
    },
    {
        "Name": "Practical Data Science with R",
        "Pages": 163,
        "Author": "Nina Zumel, John Mount",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/zumel.jpg",
        "Price": 50.37,
        "InStock": 2,
        "ClusterNumber": 10
    },
    {
        "Name": "ArcGIS Web Development",
        "Pages": 176,
        "Author": "Rene Rubalcava",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/rubalcava.jpg",
        "Price": 43.11,
        "InStock": 0,
        "ClusterNumber": 3
    },
    {
        "Name": "Elasticsearch in Action",
        "Pages": 119,
        "Author": "Radu Gheorghe, Matthew Lee Hinman",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hinman.jpg",
        "Price": 30.49,
        "InStock": 1,
        "ClusterNumber": 8
    },
    {
        "Name": "Learn SCCM 2012 in a Month of Lunches",
        "Pages": 153,
        "Author": "James Bannan",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bannan.jpg",
        "Price": 35.49,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "Programming for Musicians and Digital Artists",
        "Pages": 189,
        "Author": "Ajay Kapur, Perry Cook, Spencer Salazar, , Ge Wang",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kapur.jpg",
        "Price": 72.01,
        "InStock": 2,
        "ClusterNumber": 16
    },
    {
        "Name": "BDD in Action",
        "Pages": 163,
        "Author": "John F. Smart",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/smart.jpg",
        "Price": 77.86,
        "InStock": 2,
        "ClusterNumber": 12
    },
    {
        "Name": "Windows Phone 8 in Action",
        "Pages": 134,
        "Author": "Timothy Binkley-Jones, Massimo Perga, Michael Sync, Adam Benoit",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/binkley.jpg",
        "Price": 90.73,
        "InStock": 3,
        "ClusterNumber": 18
    },
    {
        "Name": "Titanium Alloy in Action",
        "Pages": 199,
        "Author": "Ricardo Alcocer",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/alcocer.jpg",
        "Price": 67.39,
        "InStock": 2,
        "ClusterNumber": 14
    },
    {
        "Name": "Giraph in Action",
        "Pages": 122,
        "Author": "Claudio Martella, Roman Shaposhnik, , Dionysios Logothetis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/martella.jpg",
        "Price": 25.8,
        "InStock": 0,
        "ClusterNumber": 1
    },
    {
        "Name": "The Well-Grounded Rubyist, Second Edition",
        "Pages": 168,
        "Author": "David A. Black",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/black3.jpg",
        "Price": 4.54,
        "InStock": 3,
        "ClusterNumber": 7
    },
    {
        "Name": "Go in Action",
        "Pages": 187,
        "Author": "Brian Ketelsen, Erik St. Martin, , William Kennedy",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ketelsen.jpg",
        "Price": 29.71,
        "InStock": 2,
        "ClusterNumber": 3
    },
    {
        "Name": "The Programmer's Guide to Apache Thrift ",
        "Pages": 105,
        "Author": "Randy Abernethy",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/abernethy.jpg",
        "Price": 40.7,
        "InStock": 2,
        "ClusterNumber": 17
    },
    {
        "Name": "Grokking Functional Programming",
        "Pages": 164,
        "Author": "Aslam Khan",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/khan.jpg",
        "Price": 77.69,
        "InStock": 1,
        "ClusterNumber": 12
    },
    {
        "Name": "CORS in Action",
        "Pages": 175,
        "Author": "Monsur Hossain",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hossain.jpg",
        "Price": 88.37,
        "InStock": 0,
        "ClusterNumber": 4
    },
    {
        "Name": "Reactive Design Patterns",
        "Pages": 176,
        "Author": "Roland Kuhn, Jamie Allen",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/kuhn.jpg",
        "Price": 24.68,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "Storm Applied",
        "Pages": 189,
        "Author": "Sean Allen, Peter Pathirana, , Matthew Jankowski",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pathirana.jpg",
        "Price": 83.98,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "Real-World Machine Learning",
        "Pages": 130,
        "Author": "Henrik Brink, Joseph Richards",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/brink.jpg",
        "Price": 51.59,
        "InStock": 1,
        "ClusterNumber": 18
    },
    {
        "Name": "jQuery UI in Action",
        "Pages": 118,
        "Author": "Theodore J. (T.J.) VanToll III",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/vantoll.jpg",
        "Price": 39.45,
        "InStock": 0,
        "ClusterNumber": 16
    },
    {
        "Name": "Web Components in Action",
        "Pages": 116,
        "Author": "Chris Buckett",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/buckett2.jpg",
        "Price": 4.15,
        "InStock": 3,
        "ClusterNumber": 7
    },
    {
        "Name": "JavaScript Application Design",
        "Pages": 132,
        "Author": "Nicolas G. Bevacqua",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bevacqua.jpg",
        "Price": 95.87,
        "InStock": 1,
        "ClusterNumber": 19
    },
    {
        "Name": "Git in Practice",
        "Pages": 100,
        "Author": "Mike McQuaid",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/mcquaid.jpg",
        "Price": 42.08,
        "InStock": 2,
        "ClusterNumber": 19
    },
    {
        "Name": "Impala in Action",
        "Pages": 193,
        "Author": "Richard L. Saltzer, Istvan Szegedi",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/saltzer.jpg",
        "Price": 72.41,
        "InStock": 0,
        "ClusterNumber": 19
    },
    {
        "Name": "Java 8 in Action",
        "Pages": 116,
        "Author": "Raoul-Gabriel Urma, Mario Fusco, , Alan Mycroft",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/urma.jpg",
        "Price": 81.64,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "Elixir in Action",
        "Pages": 149,
        "Author": "Saša Juric´",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/juric.jpg",
        "Price": 47.44,
        "InStock": 1,
        "ClusterNumber": 17
    },
    {
        "Name": "MongoDB in Action, Second Edition",
        "Pages": 164,
        "Author": "Kyle Banker, Peter Bakkum, Tim Hawkins, Shaun Verch, , Douglas Garrett",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/banker2.jpg",
        "Price": 63.91,
        "InStock": 2,
        "ClusterNumber": 18
    },
    {
        "Name": "Getting MEAN with Mongo, Express, Angular, and Node",
        "Pages": 119,
        "Author": "Simon Holmes",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/sholmes.jpg",
        "Price": 71.74,
        "InStock": 3,
        "ClusterNumber": 16
    },
    {
        "Name": "jQuery in Action, Third Edition",
        "Pages": 109,
        "Author": "Bear Bibeault, Yehuda Katz, , Aurelio De Rosa",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/derosa.jpg",
        "Price": 78.78,
        "InStock": 2,
        "ClusterNumber": 5
    },
    {
        "Name": "D3.js in Action",
        "Pages": 140,
        "Author": "Elijah Meeks",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/meeks.jpg",
        "Price": 48.85,
        "InStock": 3,
        "ClusterNumber": 18
    },
    {
        "Name": "Learn SQL Server Administration in a Month of Lunches",
        "Pages": 155,
        "Author": "Don Jones",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones5.jpg",
        "Price": 70.69,
        "InStock": 1,
        "ClusterNumber": 14
    },
    {
        "Name": "Geoprocessing with Python",
        "Pages": 199,
        "Author": "Chris Garrard",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/garrard.jpg",
        "Price": 12.08,
        "InStock": 2,
        "ClusterNumber": 20
    },
    {
        "Name": "Barcodes with iOS",
        "Pages": 139,
        "Author": "Oliver Drobnik",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/drobnik.jpg",
        "Price": 56.09,
        "InStock": 3,
        "ClusterNumber": 18
    },
    {
        "Name": "Chef in Action",
        "Pages": 184,
        "Author": "Dimitri Aivaliotis",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/aivaliotis.jpg",
        "Price": 47.01,
        "InStock": 3,
        "ClusterNumber": 0
    },
    {
        "Name": "Hadoop in Practice, Second Edition",
        "Pages": 162,
        "Author": "Alex Holmes",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/holmes2.jpg",
        "Price": 79.82,
        "InStock": 1,
        "ClusterNumber": 2
    },
    {
        "Name": "Oculus Rift in Action",
        "Pages": 131,
        "Author": "Bradley Austin Davis, Karen Bryla, , Alex Benton",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bdavis.jpg",
        "Price": 24.16,
        "InStock": 2,
        "ClusterNumber": 9
    },
    {
        "Name": "OpenStack in Action",
        "Pages": 192,
        "Author": "Cody Bumgardner",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/bumgardner.jpg",
        "Price": 69.03,
        "InStock": 0,
        "ClusterNumber": 6
    },
    {
        "Name": "PowerShell in Depth, Second Edition",
        "Pages": 179,
        "Author": "Don Jones, Jeffery Hicks, , Richard Siddaway",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/jones6.jpg",
        "Price": 2.4,
        "InStock": 2,
        "ClusterNumber": 2
    },
    {
        "Name": "Practical Probabilistic Programming",
        "Pages": 118,
        "Author": "Avi Pfeffer",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/pfeffer.jpg",
        "Price": 40.96,
        "InStock": 0,
        "ClusterNumber": 12
    },
    {
        "Name": "Unity in Action",
        "Pages": 110,
        "Author": "Joseph Hocking",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hocking.jpg",
        "Price": 6.85,
        "InStock": 0,
        "ClusterNumber": 15
    },
    {
        "Name": "Express.js in Action",
        "Pages": 196,
        "Author": "Evan M. Hahn",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/hahn.jpg",
        "Price": 94.15,
        "InStock": 0,
        "ClusterNumber": 6
    },
    {
        "Name": "Learn Git in a Month of Lunches",
        "Pages": 127,
        "Author": "Rick Umali",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/umali.jpg",
        "Price": 15.62,
        "InStock": 1,
        "ClusterNumber": 7
    },
    {
        "Name": "Understanding SPAs",
        "Pages": 109,
        "Author": "Emmit A. Scott, Jr.",
        "ImageUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/scott2.jpg",
        "Price": 23.04,
        "InStock": 2,
        "ClusterNumber": 10
    }
];

app.get('/api/suggestion', async (req, res)=>  {
    var name = req.query.name;
    var bookCluster = bookList.filter(x => x.Name == name)[0].ClusterNumber;
    var bookSubset = bookList.filter(x => x.ClusterNumber == bookCluster);
    var chosenSet = bookSubset.filter(x => !(x.Name == name));
    var bookIndex = parseInt(Math.random() * chosenSet.length);
    var suggestionName = chosenSet[bookIndex].Name;
    
    res.send(suggestionName);
});

app.listen(8080, ()=>console.log('Listening on port 8080'));
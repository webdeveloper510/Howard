import _ from "lodash";
import dayjs from "dayjs";

const imageAssets = import.meta.globEager(
  `/src/assets/images/*.{jpg,jpeg,png,svg}`
);
const fakers = {
  fakeUsers() {
    const users = [
      { name: "Johnny Depp", gender: "male" },
      { name: "Al Pacino", gender: "male" },
      { name: "Robert De Niro", gender: "male" },
      { name: "Kevin Spacey", gender: "male" },
      { name: "Denzel Washington", gender: "male" },
      { name: "Russell Crowe", gender: "male" },
      { name: "Brad Pitt", gender: "male" },
      { name: "Angelina Jolie", gender: "female" },
      { name: "Leonardo DiCaprio", gender: "male" },
      { name: "Tom Cruise", gender: "male" },
      { name: "John Travolta", gender: "male" },
      { name: "Arnold Schwarzenegger", gender: "male" },
      { name: "Sylvester Stallone", gender: "male" },
      { name: "Kate Winslet", gender: "female" },
      { name: "Christian Bale", gender: "male" },
      { name: "Morgan Freeman", gender: "male" },
      { name: "Keanu Reeves", gender: "male" },
      { name: "Nicolas Cage", gender: "male" },
      { name: "Hugh Jackman", gender: "male" },
      { name: "Edward Norton", gender: "male" },
      { name: "Bruce Willis", gender: "male" },
      { name: "Tom Hanks", gender: "male" },
      { name: "Charlize Theron", gender: "female" },
      { name: "Will Smith", gender: "male" },
      { name: "Sean Connery", gender: "male" },
      { name: "Keira Knightley", gender: "female" },
      { name: "Vin Diesel", gender: "male" },
      { name: "Matt Damon", gender: "male" },
      { name: "Richard Gere", gender: "male" },
      { name: "Catherine Zeta-Jones", gender: "female" },
    ];

    return _.sampleSize(users, 3).map((user) => {
      return {
        name: user.name,
        gender: user.gender,
        email: _.toLower(_.replace(user.name, / /g, "") + "@left4code.com"),
      };
    });
  },
  fakePhones() {
    const phones = [
      { name: "Franklin FRONT DESK", directory: "(937) 365-7860", ext: "7860", cell: "--", locale: "Franklin" , job: "--" },
      { name: "Franklin EXEC FAX", directory: "(937) 574-7469", ext: "7469", cell: "--", locale: "Franklin" , job: "--" },
      { name: "Franklin receiving", directory: "--", ext: "5072", cell: "--", locale: "Franklin" , job: "Receiving" },
      { name: "Franklin Shipping", directory: "(937) 365-7890", ext: "7890", cell: "--", locale: "Franklin" , job: "Shipping" },
      { name: "FRONT DESK", directory: "(207) 440-5154", ext: "5154", cell: "--", locale: "Lewiston" , job: "--" },
      { name: "Franklin Auditorium", directory: "(937) 365-7870", ext: "7870", cell: "--", locale: "Franklin" , job: "--" },
      { name: "Franklin War Room Conf Room", directory: "(937) 365-7868", ext: "7868", cell: "--", locale: "Franklin" , job: "--" },
      { name: "Franklin Exec Conf Room ", directory: "--", ext: "5031", cell: "--", locale: "Franklin" , job: "--" },
      { name: "Franklin War Room Conf Room", directory: "(937) 365-7871", ext: "7871", cell: "--", locale: "Franklin" , job: "--" },
      { name: "Lew Exec Conf Room", directory: "(207) 440-5127", ext: "5127", cell: "--", locale: "Lewiston" , job: "--" },
      { name: "Lew Main Conf Room", directory: "(207) 440-5153", ext: "5153", cell: "--", locale: "Lewiston" , job: "--" },
      { name: "Lewiston Shipping", directory: "(207) 440-5102", ext: "5102", cell: "--", locale: "Lewiston" , job: "--" },
      { name: "Service Desk", directory: "(397) 365-7884", ext: "7884", cell: "--", locale: "--" , job: "--" },
      { name: "Front Desk", directory: "(207) 440-5154 , (937) 365-7860 ", ext: "5154 , 7860", cell: "--", locale: "Lewiston , Franklin" , job: "--" },
      { name: "CALL CENTER", directory: "1-800-361-0785", ext: "--", cell: "--", locale: "--" , job: "--" },
      { name: "Alex Nering", directory: "(207) 440-5287", ext: "5131", cell: "(207) 330-5307", locale: "Lewiston" , job: "Product Spc" },
      { name: "Alex Stretton", directory: "--", ext: "--", cell: "(207) 713-0152", locale: "Lewiston" , job: "Plant Mgr" },
      { name: "Austin Blasé", directory: "(937) 365-7896", ext: "7896", cell: "(513) 667-9172", locale: "Franklin" , job: "Regional Sales Specialist" },
      { name: "Amy Setzer", directory: "(937) 365-7866", ext: "7866", cell: "(207) 270-0259", locale: "Franklin" , job: "Sr planner" },
      { name: "Andrew Stretton", directory: "--", ext: "--", cell: "(207) 376-6679", locale: "Lewiston" , job: "Project Spc" },
      { name: "Angel Erickson", directory: "(207) 440-5176", ext: "5176", cell: "--", locale: "Lewiston" , job: "Accounts Payable" },
      { name: "April Richard", directory: "(207) 440-5123", ext: "5123", cell: "--", locale: "Lewiston" , job: " Financial Analyst" },
      { name: "Antonio Pagano", directory: "(207) 440-5152 , (937) 365-7882", ext: "5152 , 7882", cell: "(207) 440-7112", locale: "Lewiston" , job: "CEO" },
      { name: "Ariel Turpin", directory: "(207) 440-5113", ext: "5113", cell: "--", locale: "Lewiston" , job: "Accounts Receivable" },
      { name: "Alyssa Adam", directory: "--", ext: "7443", cell: "(513) 490-5078", locale: "Franklin" , job: "Installation Coordinator" },
      { name: "Alyssa Wright", directory: "(937) 365-7873", ext: "7873", cell: "--", locale: "Franklin" , job: "Fabrication Planner" },
      { name: "Ashley Jeffery", directory: "(207) 440-5124", ext: "5124", cell: "(207) 240-8321", locale: "Lewiston" , job: "Admin Supr" },
      { name: "Brian Wall", directory: "(937) 365-7863", ext: "7863", cell: "(513) 849-0663", locale: "Franklin" , job: "Continuous Improvement Specialist" },
      { name: "Brudy Mata", directory: "(207) 440-5155", ext: "5155", cell: "(609) 495-5136", locale: "Lewiston" , job: "Service Tech" },
      { name: "Brandon Kinton", directory: "--", ext: "--", cell: "(513) 330-2307", locale: "Franklin" , job: "Inside Sales Coordinator" },
      { name: "Caren Irons", directory: "(207) 440-5130", ext: "5130", cell: "--", locale: "Lewiston" , job: "Lewiston" },
      { name: "Chad Levesque", directory: "--", ext: "--", cell: "(207) 310-8278", locale: "Lewiston" , job: "Line Supr/Maint Tech" },
      { name: "Chase Hill", directory: "(207) 440-5126", ext: "5126", cell: "(207) 330-8990", locale: "Lewiston" , job: "Purchasing Mgr" },
      { name: "Chris Henkel", directory: "(937) 365-7895", ext: "7895", cell: "(513) 292-1270", locale: "Franklin" , job: "Business Devel Spc" },
      { name: "Chris Wunderly", directory: "--", ext: "--", cell: "(513) 403-3021", locale: "Franklin" , job: "Inventory Coordinator" },
      { name: "Christy Sutton", directory: "(207) 440-5167", ext: "5167", cell: "(207) 402-0685", locale: "Lewiston" , job: "LT Planning Mgr" },
      { name: "Colin Jay Campbell", directory: "(207) 440-5194", ext: "5194", cell: "(513) 292-5221", locale: "Lewiston" , job: "Regional Sales Mgr" },
      { name: "Colin Dorman", directory: "--", ext: "--", cell: "(513) 508-2815", locale: "Franklin" , job: "Software Support Specialist" },
      { name: "Cody Poisson", directory: "--", ext: "--", cell: "(207) 320-8016", locale: "Lewiston" , job: "Service Tech " },
      { name: "Dana Daigle", directory: "(207) 440-5121", ext: "5121", cell: "--", locale: "Lewiston" , job: "Production Mech Engr" },
      { name: "Dana Johnson", directory: "--", ext: "--", cell: "(207) 330-8271", locale: "Franklin" , job: "Planner" },
      { name: "Dave Cousineau", directory: "(207) 440-5118", ext: "5118", cell: "(207) 240-7659", locale: "Lewiston" , job: "Service Software Tech" },
      { name: "David Johnson", directory: "--", ext: "--", cell: "(207) 520-8021", locale: "Lewiston" , job: "Service Trainer" },
      { name: "David Lind", directory: "(937) 365-7867", ext: "7867", cell: "(513) 430-2895", locale: "Franklin" , job: "Director of Business Devel" },
      { name: "David Gifford", directory: "(937) 365-7893", ext: "7893", cell: "(513) 267-3726", locale: "Franklin" , job: "Director of Quality & EHS" },
      { name: "Davide Copfer", directory: "--", ext: "--", cell: "(207) 520-8163", locale: "Franklin" , job: "Field Tech" },
      { name: "Davide Salvaterra", directory: "--", ext: "5037", cell: "(207) 240-5867", locale: "Lewiston" , job: "Maintenance Specialist" },
      { name: "Dick Bosse", directory: "(207) 440-5108", ext: "5108", cell: "--", locale: "Lewiston" , job: "Warehouse" },
      { name: "Dmitry Timoshenko", directory: "--", ext: "--", cell: "(207) 440-3195", locale: "Lewiston" , job: "Service Field Tech" },
      { name: "Doug Hall", directory: "(937) 365-7892", ext: "7892", cell: "(513) 283-2890", locale: "Lewiston" , job: "Regional Sales Spc" },
      { name: "Doug Detwiler", directory: "--", ext: "--", cell: "(513) 274-7257", locale: "Franklin" , job: "Production Manager" },
      { name: "Dexter Ellison", directory: "(937) 396-9273", ext: "9273", cell: "--", locale: "Franklin" , job: "Field Tech" },
      { name: "Edward Brabston", directory: "(937) 365-7875", ext: "7875", cell: "(513) 814-5611", locale: "Franklin" , job: "Maintenance Spc" },
      { name: "Electrical", directory: "(207) 440-5197", ext: "5197", cell: "--", locale: "Lewiston" , job: "--" },
      { name: "Enrico Bondi", directory: "(937) 365-7865", ext: "7865", cell: "(937) 672-3338", locale: "Franklin" , job: "Operations Director" },
      { name: "Evan Lincoln", directory: "(207) 440-5102", ext: "5102", cell: "(207) 713-1807", locale: "Lewiston" , job: "Logistics" },
      { name: "Fred Reid", directory: "(407) 221-1135", ext: "5132", cell: "(207) 713-1029", locale: "Lewiston" , job: "Sr Software Tech" },
      { name: "Fernando Nardelli", directory: "--", ext: "7853", cell: "(937) 396-9709", locale: "Franklin" , job: "Buyer" },
      { name: "Falicity Stebelton", directory: " (937) 365-7887", ext: "7887", cell: "--", locale: "Franklin" , job: "Warehouse Associate" },
      { name: "Garrett Kincaid", directory: "(937) 365-7874", ext: "7874", cell: "(513)-292-0152", locale: "Franklin" , job: "IT Support" },
      { name: "Gary Helton", directory: "(937) 365-7871", ext: "7871", cell: "(513) 330-0281", locale: "Franklin" , job: "Line Supr" },
      { name: "Glen Spaide", directory: "--", ext: "--", cell: "(513) 240-0007", locale: "Franklin" , job: "Service Sales Spc" },
      { name: "Gianni Ferrari", directory: "--", ext: "--", cell: "(207) 240-8920", locale: "Lewiston" , job: "Service Tech" },
      { name: "Gian Clausi", directory: "(937) 365-7861", ext: "7861", cell: "(207) 740-8690", locale: "Lewiston" , job: "Director Service" },
      { name: "Greg Stewart", directory: "(937) 365-7876", ext: "7876", cell: "(513) 814-5675", locale: "Franklin" , job: "Facilities Spc" },
      { name: "Howard Grant", directory: "(937) 365-7880", ext: "7880", cell: " (513) 464-4378", locale: "Franklin" , job: "IT Mgr" },
      { name: "Ian Hester", directory: "(937) 365-7891", ext: "7891", cell: "--", locale: "Franklin" , job: "Automation Engineer" },
      { name: "Jamie Tate", directory: "--", ext: "--", cell: "(207) 330-0825", locale: "Remote" , job: "Field Tech" },
      { name: "Julie Peter", directory: "--", ext: "--", cell: "(513) 267-9115", locale: "Franklin" , job: "Safety Coordinator" },
      { name: "Joel Colon", directory: "(207) 751-0617", ext: "0617", cell: "--", locale: "Franklin" , job: "Field Tech" },
      { name: "Josephine Powell", directory: "(937) 365-7878", ext: "7878", cell: "(513) 435-7423", locale: "Franklin" , job: "Administrative Assistant" },
      { name: "Jess Masem", directory: "--", ext: "--", cell: "(513) 567-0840", locale: "Franklin" , job: "Internal Sales Support" },
      { name: "John Beauregard", directory: "(207) 440-5112", ext: "5112", cell: "(207) 513-2001", locale: "Lewiston" , job: "Sr. Regional Mgr" },
      { name: "Jonathan Butkus", directory: "(207) 440-5125", ext: "5125", cell: "(207) 270-0320", locale: "Lewiston" , job: "Regional Sales Mgr" },
      { name: "Jonathan LeBrun", directory: "(937) 365-7877", ext: "7877", cell: "(207) 440-0261", locale: "Lewiston" , job: "Assembly Mgr" },
      { name: "Jovia Richards", directory: "(937) 365-7859", ext: "7859", cell: "(513) 519-9505", locale: "Franklin" , job: "Reception Admin Support" },
      { name: "Jordan Adams", directory: "(937) 365-7872", ext: "7872", cell: "(513) 267-4363", locale: "Franklin" , job: "Parts Specialist" },
      { name: "John Crawford", directory: "(937) 365-7857", ext: "7857", cell: "(513) 567-0840", locale: "Franklin" , job: "Facilities Manager" },
      { name: "Kevin Pearce", directory: "(207) 400-5162", ext: "5053", cell: "(905) 467-8129", locale: "Remote" , job: "Reional Sales Manager" },
      { name: "Kellie Fortin", directory: "(207) 440-5116", ext: "5116", cell: "(207) 440-7536", locale: "Lewiston" , job: "Sales Coordinator" },
      { name: "Kevin Dmytryck", directory: "--", ext: "--", cell: "(207) 577-6122", locale: "Lewiston" , job: "Service Tech" },
      { name: "Kevin Riley", directory: "--", ext: "--", cell: "(440)-452-0538", locale: "Franklin" , job: "Warehouse Associate" },
      { name: "Ken Blaha", directory: "--", ext: "--", cell: "(513) 430-0626", locale: "Franklin" , job: "Technical Trainer" },
      { name: "Kyle Simmons", directory: "(207) 440-5298", ext: "5298", cell: "No xfers", locale: "Lewiston" , job: " End-User Software Spc" },
      { name: "Linda D'Alessandro", directory: "--", ext: "5038", cell: "--", locale: "Lewiston" , job: "SAP Project Mgr" },
      { name: "Lisa Hepler", directory: "(207) 440-5120", ext: "5120", cell: "--", locale: "Lewiston" , job: "Accounting Mgr" },
      { name: "Luca Bosco", directory: "(207) 440-5182", ext: "5182", cell: "(207) 240-5908", locale: "Lewiston" , job: "Service Sales Support" },
      { name: "Luke Avery", directory: "(207) 440-5171", ext: "5171", cell: "(207) 713-0024", locale: "Lewiston" , job: "Operations Plant Mgr" },
      { name: "Mark Zeigler", directory: "--", ext: "5045", cell: "(207) 330-5863", locale: "Lewiston" , job: "Service Tech Support" },
      { name: "Mary Kay Blatz", directory: "(207) 440-5204", ext: "5204", cell: "(207) 576-2145", locale: "Lewiston" , job: "Safety Mgr" },
      { name: "Marquetta Day", directory: "(937) 365-7885", ext: "7885", cell: "(513) 292-7687", locale: "Franklin" , job: "Warehouse Associate" },
      { name: "Matt Morgan", directory: "(207) 440-5106", ext: "5106", cell: "--", locale: "Lewiston" , job: "Material Planner II" },
      { name: "Matt Hyndman", directory: "(207) 440-5143", ext: "5143", cell: "(207) 310-8283", locale: "Lewiston" , job: "Service Sales Mgr" },
      { name: "Matt McElreath", directory: "(207) 440-5150", ext: "5150", cell: "(207) 330-8017", locale: "Lewiston" , job: "Sr. Regional Mgr" },
      { name: "Melinda Rowe", directory: "(207) 440-5160", ext: "5160", cell: "(207) 576-0361", locale: "Lewiston" , job: "Installation Coordinator" },
      { name: "Michael Richards", directory: "(937) 365-7873", ext: "7873", cell: "(5113) 292-2181", locale: "Franklin" , job: "Line Supr" },
      { name: "Michael Matthis", directory: "(207) 440-5118", ext: "5118", cell: "(207) 270-0356", locale: "Lewiston" , job: "Regional Sales Spc" },
      { name: "Michelle James", directory: "(937) 365-7894 , (207) 440-5194", ext: "7894 , 5194", cell: "(207) 240-7460", locale: "Lewiston" , job: "Marketing Spc" },
      { name: "Milton Hughes", directory: "--", ext: "--", cell: "(513) 630-7690", locale: "--" , job: " Training Supr" },
      { name: "Mauricio Luna", directory: "--", ext: "--", cell: "(513) 493-9600", locale: "Franklin" , job: " Warehouse Coordinator" },
      { name: "Nick Cail", directory: "(937) 365-7883", ext: "7883", cell: "--", locale: "Franklin" , job: "Service Coordinator" },
      { name: "Nick Van Benschoten", directory: "(937) 365-7881", ext: "7881", cell: "(513) 526-8820", locale: "Franklin" , job: "Service Sales Spc" },
      { name: "Nancy Keating", directory: "--", ext: "7851", cell: "(513) 567-2055", locale: "Franklin" , job: "Talent Acquisition Coordinator" },
      { name: "Nichole May", directory: "--", ext: "--", cell: "(513) 525-7269", locale: "Franklin" , job: "Service Inside Sales" },
      { name: "Phil Lessard", directory: "(207) 440-5151", ext: "5151", cell: "(207) 240-2160", locale: "Lewiston" , job: "Production Engrg Mgr" },
      { name: "Pier Pini", directory: "--", ext: "5137", cell: "(609) 235-7656", locale: "Lewiston" , job: "Customer Software Engr" },
      { name: "Quang Nguyen", directory: "(207) 440-5168", ext: "5168", cell: "(513) 292-3204", locale: "Lewiston" , job: "IT Sr Support Spc" },
      { name: "Rick Havener", directory: "(207) 440-5136", ext: "5136", cell: "(207) 240-3539", locale: "Lewiston" , job: "Sales Director" },
      { name: "Roger Michaud", directory: "--", ext: "--", cell: "(513) 526-7270", locale: "Franklin" , job: "Quality Engr" },
      { name: "Ron Mazurek", directory: "--", ext: "--", cell: "(207) 240-4620", locale: "Lewiston" , job: "Service Tech" },
      { name: "Sara Daigle", directory: "(207) 440-5119", ext: "5119", cell: "(207) 576-0323", locale: "Lewiston" , job: "HR Mgr - Lewiston" },
      { name: "Sherekon Green", directory: "(207) 440-5173", ext: "5173", cell: "(207) 576-4030", locale: "Lewiston" , job: "Tech Support Supr" },
      { name: "Stephen Akers", directory: "(937) 365-7879", ext: "7879", cell: "(513) 267-9444", locale: "Franklin" , job: "Quality Mgr" },
      { name: "Stephen Miller", directory: "(207) 440-5139", ext: "5139", cell: "(207) 576-0291", locale: "Lewiston" , job: "Finance Director" },
      { name: "Steven Erlandson", directory: "--", ext: "--", cell: "(513) 401-3033", locale: "Franklin" , job: "Regional Sales Spc" },
      { name: "Steven Hamberlin", directory: "(207) 440-5125", ext: "5125", cell: "(207) 440-3882", locale: "Lewiston" , job: "Installations Supr" },
      { name: "Shelby Adkins", directory: "(937) 365-7862", ext: "7862", cell: "(513) 292-9222", locale: "Franklin" , job: "Buyer" },
      { name: "Scott Niemi", directory: "(207) 440-5157", ext: "5157", cell: "(513) 292-2172", locale: "Lewiston" , job: "Hardware Support Spc" },
      { name: "Sergio Bivona", directory: "--", ext: "--", cell: "(513) 849-5997", locale: "Franklin" , job: "Installation Coordinator Supervisor" },
      { name: "Tricia Asselin", directory: "(207) 440-5107", ext: "5107", cell: "--", locale: "Lewiston" , job: "Administrative Assistant" },
      { name: "Thomas Laine", directory: "(937) 365-7869", ext: "7869", cell: "(513) 464-4132", locale: "Franklin" , job: "Logistics Supr" },
      { name: "Tim Becker", directory: "(937) 365-7864", ext: "7864", cell: "(513) 479-5128", locale: "Franklin" , job: "HR Director" },
      { name: "Tim Dorman", directory: "(207) 440-5128", ext: "5128", cell: "(207) 713-4164", locale: "Lewiston" , job: "Regional Dealer Mgr" },
      { name: "Tim Donahue", directory: "--", ext: "5110", cell: "(207) 358-7960", locale: "Lewiston" , job: "Production Associate" },
      { name: "Tim Peterson", directory: "(207) 440-5164", ext: "5164", cell: "--", locale: "Lewiston" , job: "Sr Mech Design Engr" },
      { name: "Tom Miller", directory: "--", ext: "--", cell: "(513) 430-0611", locale: "Franklin" , job: "Field Tech" },
      { name: "William Bogan", directory: "--", ext: "--", cell: "(513) 963-0324", locale: "Franklin" , job: "Line Supervisor" },
      { name: "Vincenzo Fontanello", directory: "--", ext: "--", cell: "(513) 963-0333", locale: "Franklin" , job: "Demand Planning Manager" },
      { name: "Valentina Cecchi", directory: "(207) 440-5180", ext: "5180", cell: "(207) 440-3161", locale: "Franklin" , job: "Director of Marketing" },
     ];

    return _.sampleSize(phones, 6).map((phone) => {
      return {
        name: phone.name,
        directory: phone.directory,
        ext: phone.ext,
        cell: phone.cell,
        locale: phone.locale,
        job: phone.job,
      };
    });
  },
  fakePhotos() {
    const photos = [];
    for (let i = 0; i < 15; i++) {
      photos[photos.length] =
        imageAssets[
          "/src/assets/images/profile-" + _.random(1, 15) + ".jpg"
        ].default;
    }
    return _.sampleSize(photos, 10);
  },
  fakeImages() {
    const images = [];
    for (let i = 0; i < 15; i++) {
      images[images.length] =
        imageAssets[
          "/src/assets/images/preview-" + _.random(1, 15) + ".jpg"
        ].default;
    }
    return _.sampleSize(images, 10);
  },
  fakeDates() {
    const dates = [];
    for (let i = 0; i < 5; i++) {
      dates[dates.length] = dayjs
        .unix(_.random(1586584776897, 1672333200000) / 1000)
        .format("DD MMMM YYYY");
    }
    return _.sampleSize(dates, 3);
  },
  fakeTimes() {
    const times = [
      "01:10 PM",
      "05:09 AM",
      "06:05 AM",
      "03:20 PM",
      "04:50 AM",
      "07:00 PM",
    ];
    return _.sampleSize(times, 3);
  },
  fakeFormattedTimes() {
    const times = [
      _.random(10, 60) + " seconds ago",
      _.random(10, 60) + " minutes ago",
      _.random(10, 24) + " hours ago",
      _.random(10, 20) + " days ago",
      _.random(10, 12) + " months ago",
    ];
    return _.sampleSize(times, 3);
  },
  fakeTotals() {
    return _.shuffle([_.random(20, 220), _.random(20, 120), _.random(20, 50)]);
  },
  fakeTrueFalse() {
    return _.sampleSize([0, 1, 1], 1);
  },
  fakeStocks() {
    return _.shuffle([_.random(50, 220), _.random(50, 120), _.random(50, 50)]);
  },
  fakeProducts() {
    const products = [
      { name: "Dell XPS 13", category: "PC & Laptop" },
      { name: "Apple MacBook Pro 13", category: "PC & Laptop" },
      { name: "Oppo Find X2 Pro", category: "Smartphone & Tablet" },
      { name: "Samsung Galaxy S20 Ultra", category: "Smartphone & Tablet" },
      { name: "Sony Master Series A9G", category: "Electronic" },
      { name: "Samsung Q90 QLED TV", category: "Electronic" },
      { name: "Nike Air Max 270", category: "Sport & Outdoor" },
      { name: "Nike Tanjun", category: "Sport & Outdoor" },
      { name: "Nikon Z6", category: "Photography" },
      { name: "Sony A7 III", category: "Photography" },
    ];
    return _.shuffle(products);
  },
  fakeCategories() {
    const categories = [
      { name: "PC & Laptop", tags: "Apple, Asus, Lenovo, Dell, Acer" },
      {
        name: "Smartphone & Tablet",
        tags: "Samsung, Apple, Huawei, Nokia, Sony",
      },
      { name: "Electronic", tags: "Sony, LG, Toshiba, Hisense, Vizio" },
      {
        name: "Home Appliance",
        tags: "Whirlpool, Amana, LG, Frigidaire, Samsung",
      },
      { name: "Photography", tags: "Canon, Nikon, Sony, Fujifilm, Panasonic" },
      { name: "Fashion & Make Up", tags: "Nike, Adidas, Zara, H&M, Levi’s" },
      {
        name: "Kids & Baby",
        tags: "Mothercare, Gini & Jony, H&M, Babyhug, Liliput",
      },
      { name: "Hobby", tags: "Bandai, Atomik R/C, Atlantis Models, Carisma" },
      {
        name: "Sport & Outdoor",
        tags: "Nike, Adidas, Puma, Rebook, Under Armour",
      },
    ];

    return _.sampleSize(categories, 3).map((category) => {
      return {
        name: category.name,
        tags: category.tags,
        slug: _.replace(
          _.replace(_.toLower(category.name), / /g, "-"),
          "&",
          "and"
        ),
      };
    });
  },
  fakeNews() {
    const news = [
      {
        title: "Desktop publishing software like Aldus PageMaker",
        superShortContent: _.truncate(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      },
      {
        title: "Dummy text of the printing and typesetting industry",
        superShortContent: _.truncate(
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      },
      {
        title: "Popularised in the 1960s with the release of Letraset",
        superShortContent: _.truncate(
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
          {
            length: 30,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      },
      {
        title: "200 Latin words, combined with a handful of model sentences",
        superShortContent: _.truncate(
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          {
            length: 50,
            omission: "",
          }
        ),
        shortContent: _.truncate(
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
          {
            length: 150,
            omission: "",
          }
        ),
        content:
          "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.",
      },
    ];
    return _.shuffle(news);
  },
  fakeFiles() {
    const files = [
      { fileName: "Celine Dion - Ashes.mp4", type: "MP4", size: "20 MB" },
      { fileName: "Laravel 7", type: "Empty Folder", size: "120 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1.2 MB" },
      { fileName: "Repository", type: "Folder", size: "20 KB" },
      { fileName: "Resources.txt", type: "TXT", size: "2.2 MB" },
      { fileName: "Routes.php", type: "PHP", size: "1 KB" },
      { fileName: "Dota 2", type: "Folder", size: "112 GB" },
      { fileName: "Documentation", type: "Empty Folder", size: "4 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1.4 MB" },
      { fileName: fakers.fakeImages()[0], type: "Image", size: "1 MB" },
    ];
    return _.shuffle(files);
  },
  fakeJobs() {
    const jobs = [
      "Frontend Engineer",
      "Software Engineer",
      "Backend Engineer",
      "DevOps Engineer",
    ];
    return _.shuffle(jobs);
  },
  fakeNotificationCount() {
    return _.random(1, 7);
  },
  fakeFoods() {
    const foods = [
      {
        name: "Vanilla Latte",
        image: imageAssets["/src/assets/images/food-beverage-1.jpg"].default,
      },
      {
        name: "Milkshake",
        image: imageAssets["/src/assets/images/food-beverage-2.jpg"].default,
      },
      {
        name: "Soft Drink",
        image: imageAssets["/src/assets/images/food-beverage-3.jpg"].default,
      },
      {
        name: "Root Beer",
        image: imageAssets["/src/assets/images/food-beverage-4.jpg"].default,
      },
      {
        name: "Pocari",
        image: imageAssets["/src/assets/images/food-beverage-5.jpg"].default,
      },
      {
        name: "Ultimate Burger",
        image: imageAssets["/src/assets/images/food-beverage-6.jpg"].default,
      },
      {
        name: "Hotdog",
        image: imageAssets["/src/assets/images/food-beverage-7.jpg"].default,
      },
      {
        name: "Avocado Burger",
        image: imageAssets["/src/assets/images/food-beverage-8.jpg"].default,
      },
      {
        name: "Spaghetti Fettucine Aglio with Beef Bacon",
        image: imageAssets["/src/assets/images/food-beverage-9.jpg"].default,
      },
      {
        name: "Spaghetti Fettucine Aglio with Smoked Salmon",
        image: imageAssets["/src/assets/images/food-beverage-10.jpg"].default,
      },
      {
        name: "Curry Penne and Cheese",
        image: imageAssets["/src/assets/images/food-beverage-11.jpg"].default,
      },
      {
        name: "French Fries",
        image: imageAssets["/src/assets/images/food-beverage-12.jpg"].default,
      },
      {
        name: "Virginia Cheese Fries",
        image: imageAssets["/src/assets/images/food-beverage-13.jpg"].default,
      },
      {
        name: "Virginia Cheese Wedges",
        image: imageAssets["/src/assets/images/food-beverage-14.jpg"].default,
      },
      {
        name: "Fried/Grilled Banana",
        image: imageAssets["/src/assets/images/food-beverage-15.jpg"].default,
      },
      {
        name: "Crispy Mushroom",
        image: imageAssets["/src/assets/images/food-beverage-16.jpg"].default,
      },
      {
        name: "Fried Calamari",
        image: imageAssets["/src/assets/images/food-beverage-17.jpg"].default,
      },
      {
        name: "Chicken Wings",
        image: imageAssets["/src/assets/images/food-beverage-18.jpg"].default,
      },
      {
        name: "Snack Platter",
        image: imageAssets["/src/assets/images/food-beverage-19.jpg"].default,
      },
    ];
    return _.shuffle(foods);
  },
};

const fakerData = [];
for (let i = 0; i < 20; i++) {
  fakerData[fakerData.length] = {
    users: fakers.fakeUsers(),
    phones: fakers.fakePhones(),
    photos: fakers.fakePhotos(),
    images: fakers.fakeImages(),
    dates: fakers.fakeDates(),
    times: fakers.fakeTimes(),
    formattedTimes: fakers.fakeFormattedTimes(),
    totals: fakers.fakeTotals(),
    trueFalse: fakers.fakeTrueFalse(),
    stocks: fakers.fakeStocks(),
    products: fakers.fakeProducts(),
    categories: fakers.fakeCategories(),
    news: fakers.fakeNews(),
    files: fakers.fakeFiles(),
    jobs: fakers.fakeJobs(),
    notificationCount: fakers.fakeNotificationCount(),
    foods: fakers.fakeFoods(),
  };
}

const install = (app) => {
  app.config.globalProperties.$f = () => {
    return fakerData;
  };
};

export { install as default, fakerData as faker };

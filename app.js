//    DATA  
var SPECIAL_SECTIONS = [
{code:“FWC”,name:“Einleitung & WM-History”,group:“Spezial”,stickers:[
{id:“00”,name:“Panini Logo”},{id:“FWC1”,name:“Official Emblem”},{id:“FWC2”,name:“Official Emblem 2”},
{id:“FWC3”,name:“Official Mascots”},{id:“FWC4”,name:“Official Slogan”},{id:“FWC5”,name:“Official Ball”},
{id:“FWC6”,name:“Kanada Host Cities”},{id:“FWC7”,name:“Mexiko Host Cities”},{id:“FWC8”,name:“USA Host Cities”},
{id:“FWC9”,name:“Italien 1934”},{id:“FWC10”,name:“Uruguay 1950”},{id:“FWC11”,name:“W-Dtl 1954”},
{id:“FWC12”,name:“Brasilien 1962”},{id:“FWC13”,name:“W-Dtl 1974”},{id:“FWC14”,name:“Argentinien 1986”},
{id:“FWC15”,name:“Brasilien 1994”},{id:“FWC16”,name:“Brasilien 2002”},{id:“FWC17”,name:“Italien 2006”},
{id:“FWC18”,name:“Deutschland 2014”},{id:“FWC19”,name:“Argentinien 2022”}
]},
{code:“CCL”,name:“Coca-Cola Sticker”,group:“Spezial”,stickers:[
{id:“CCL1”,name:“Coca-Cola 1”},{id:“CCL2”,name:“Coca-Cola 2”},{id:“CCL3”,name:“Coca-Cola 3”},
{id:“CCL4”,name:“Coca-Cola 4”},{id:“CCL5”,name:“Coca-Cola 5”},{id:“CCL6”,name:“Coca-Cola 6”},
{id:“CCL7”,name:“Coca-Cola 7”},{id:“CCL8”,name:“Coca-Cola 8”},{id:“CCL9”,name:“Coca-Cola 9”},
{id:“CCL10”,name:“Coca-Cola 10”},{id:“CCL11”,name:“Coca-Cola 11”},{id:“CCL12”,name:“Coca-Cola 12”}
]}
];

var TEAMS = [
{code:“MEX”,name:“Mexiko (MEX)”,group:“A”,players:[“Team Logo”,“Luis Malagon”,“Johan Vasquez”,“Jorge Sanchez”,“Cesar Montes”,“Jesus Gallardo”,“Israel Reyes”,“Diego Lainez”,“Carlos Rodriguez”,“Edson Alvarez”,“Orbelin Pineda”,“Marcel Ruiz”,“Team Photo”,“Erick Sanchez”,“Hirving Lozano”,“Santiago Gimenez”,“Raul Jimenez”,“Alexis Vega”,“Roberto Alvarado”,“Cesar Huerta”]},
{code:“RSA”,name:“Suedafrika (RSA)”,group:“A”,players:[“Team Logo”,“Ronwen Williams”,“Sipho Chaine”,“Aubrey Modiba”,“Samukele Kabini”,“Mbekezeli Mbokazi”,“Khulumani Ndamane”,“Siyabonga Ngezana”,“Khuliso Mudau”,“Nkosinathi Sibisi”,“Teboho Mokoena”,“Thalente Mbatha”,“Team Photo”,“Bathasi Aubaas”,“Yaya Sithole”,“Sipho Mbule”,“Lyle Foster”,“Iqraam Rayners”,“Mohau Nkota”,“Oswin Appollis”]},
{code:“KOR”,name:“Suedkorea (KOR)”,group:“A”,players:[“Team Logo”,“Hyeon-woo Jo”,“Seung-Gyu Kim”,“Min-jae Kim”,“Yu-min Cho”,“Young-woo Seol”,“Han-beom Lee”,“Tae-seok Lee”,“Myung-jae Lee”,“Jae-sung Lee”,“In-beom Hwang”,“Kang-in Lee”,“Team Photo”,“Seung-ho Paik”,“Jens Castrop”,“Dongg-yeong Lee”,“Gue-sung Cho”,“Heung-min Son”,“Hee-chan Hwang”,“Hyeon-Gyu Oh”]},
{code:“CZE”,name:“Tschechien (CZE)”,group:“A”,players:[“Team Logo”,“Matej Kovar”,“Jindrich Stanek”,“Ladislav Krejci”,“Vladimir Coufal”,“Jaroslav Zeleny”,“Tomas Holes”,“David Zima”,“Michal Sadilek”,“Lukas Provod”,“Lukas Cerv”,“Tomas Soucek”,“Team Photo”,“Pavel Sulc”,“Matej Vydra”,“Vasil Kusej”,“Tomas Chory”,“Vaclav Cerny”,“Adam Hlozek”,“Patrik Schick”]},
{code:“CAN”,name:“Kanada (CAN)”,group:“B”,players:[“Team Logo”,“Dayne St.Clair”,“Alphonso Davies”,“Alistair Johnston”,“Samuel Adekugbe”,“Riche Larvea”,“Derek Cornelius”,“Moise Bombito”,“Kamal Miller”,“Stephen Eustaquio”,“Ismael Kone”,“Jonathan Osorio”,“Team Photo”,“Jacob Shaffelburg”,“Mathieu Choiniere”,“Niko Sigur”,“Tajon Buchanan”,“Liam Millar”,“Cyle Larin”,“Jonathan David”]},
{code:“BIH”,name:“Bosnien (BIH)”,group:“B”,players:[“Team Logo”,“Nikola Vasilj”,“Amer Dedic”,“Sead Kolasinac”,“Tarik Muharemovic”,“Nihad Mujakic”,“Nikola Katic”,“Amir Hadziahmetovic”,“Benjamin Tahirovic”,“Armin Gigovic”,“Ivan Sunjic”,“Ivan Basic”,“Team Photo”,“Dzenis Burnic”,“Esmir Bajraktarevic”,“Amar Memic”,“Ermedin Demirovic”,“Edin Dzeko”,“Samed Bazdar”,“Haris Tabakovic”]},
{code:“QAT”,name:“Katar (QAT)”,group:“B”,players:[“Team Logo”,“Meshaal Barsham”,“Sultan Albrake”,“Lucas Mendes”,“Homam Ahmed”,“Boualem Khoukhi”,“Pedro Miguel”,“Tarek Salman”,“Mohamed Al-Mannai”,“Karim Boudiaf”,“Assim Madibo”,“Ahmed Fatehi”,“Team Photo”,“Mohammed Waad”,“Abdulaziz Hatem”,“Hassan Al-Haydos”,“Edmilson Junior”,“Akram Hassan Afif”,“Ahmed Al Ganehi”,“Almoez Ali”]},
{code:“SUI”,name:“Schweiz (SUI)”,group:“B”,players:[“Team Logo”,“Gregor Kobel”,“Yvon Mvogo”,“Manuel Akanji”,“Ricardo Rodriguez”,“Nico Elvedi”,“Aurele Amenda”,“Silvan Widmer”,“Granit Xhaka”,“Denis Zakaria”,“Remo Freuler”,“Fabian Rieder”,“Team Photo”,“Ardon Jashari”,“Johan Manzambi”,“Michel Aebischer”,“Breel Embolo”,“Ruben Vargas”,“Dan Ndoye”,“Zeki Amdouni”]},
{code:“BRA”,name:“Brasilien (BRA)”,group:“C”,players:[“Team Logo”,“Alisson”,“Bento”,“Marquinhos”,“Eder Militao”,“Gabriel Magalhaes”,“Danilo”,“Wesley”,“Lucas Paqueta”,“Casemiro”,“Bruno Guimaraes”,“Luiz Henrique”,“Team Photo”,“Vinicius Junior”,“Rodrygo”,“Joao Pedro”,“Matheus Cunha”,“Gabriel Martinelli”,“Raphinha”,“Estevao”]},
{code:“MAR”,name:“Marokko (MAR)”,group:“C”,players:[“Team Logo”,“Yassine Bounou”,“Munir El Kajoui”,“Achraf Hakimi”,“Noussair Mazraoui”,“Nayef Aguerd”,“Roman Saiss”,“Jawad El Yamio”,“Adam Masina”,“Sofyan Amrabat”,“Azzedine Ounahi”,“Eliesse Ben Seghir”,“Team Photo”,“Bilal El Khannouss”,“Ismael Saibari”,“Youssef En-Nesyri”,“Abde Ezzalzouli”,“Soufiane Rahimi”,“Brahim Diaz”,“Ayoub El Kaabi”]},
{code:“HAI”,name:“Haiti (HAI)”,group:“C”,players:[“Team Logo”,“Johny Placide”,“Carlens Arcus”,“Martin Experience”,“Jean-Kevin Duverne”,“Ricardo Ade”,“Duke Lacroix”,“Garven Metusala”,“Hannes Delcroix”,“Leverton Pierre”,“Danley Jean Jacques”,“Jean-Ricner Bellegarde”,“Team Photo”,“Christopher Attys”,“Derrick Etienne Jr”,“Josue Casimir”,“Ruben Providence”,“Duckens Nazon”,“Louicius Deedson”,“Frantzdy Pierrot”]},
{code:“SCO”,name:“Schottland (SCO)”,group:“C”,players:[“Team Logo”,“Angus Gunn”,“Jack Hendry”,“Kieran Tierney”,“Aaron Hickey”,“Andrew Robertson”,“Scott McKenna”,“John Souttar”,“Anthony Ralston”,“Grant Hanley”,“Scott McTominay”,“Billy Gilmour”,“Team Photo”,“Lewis Ferguson”,“Ryan Christie”,“Kenny McLean”,“John McGinn”,“Lyndon Dykes”,“Che Adams”,“Ben Gannon-Doak”]},
{code:“USA”,name:“USA”,group:“D”,players:[“Team Logo”,“Matt Freese”,“Chris Richards”,“Tim Ream”,“Mark McKenzie”,“Alex Freeman”,“Antonee Robinson”,“Tyler Adams”,“Tanner Tessmann”,“Weston McKenny”,“Christian Roldan”,“Timothy Weah”,“Team Photo”,“Diego Luna”,“Malik Tillman”,“Christian Pulisic”,“Brenden Aaronson”,“Ricardo Pepi”,“Haji Wright”,“Folarin Balogun”]},
{code:“PAR”,name:“Paraguay (PAR)”,group:“D”,players:[“Team Logo”,“Roberto Fernandez”,“Orlando Gill”,“Gustavo Gomez”,“Fabian Balbuena”,“Juan Jose Caceres”,“Omar Alderete”,“Junior Alonso”,“Mathias Villasanti”,“Diego Gomez”,“Damian Bobadilla”,“Andres Cubas”,“Team Photo”,“Matias Galarza Fonda”,“Julio Enciso”,“Alejandro Romero Gamarra”,“Miguel Almiron”,“Ramon Sosa”,“Angel Romero”,“Antonio Sanabria”]},
{code:“AUS”,name:“Australien (AUS)”,group:“D”,players:[“Team Logo”,“Mathew Ryan”,“Joe Gauci”,“Harry Souttar”,“Alessandro Circati”,“Jordan Bos”,“Aziz Behich”,“Cameron Burgess”,“Lewis Miller”,“Milos Degenek”,“Jackson Irvine”,“Riley McGree”,“Team Photo”,“Aiden O’Neill”,“Connor Metcalfe”,“Patrick Yazbek”,“Craig Goodwin”,“Kusini Vengi”,“Nestory Irankunda”,“Mohamed Toure”]},
{code:“TUR”,name:“Tuerkei (TUR)”,group:“D”,players:[“Team Logo”,“Ugurcan Cakir”,“Mert Muldur”,“Zeki Celik”,“Abdulkerim Bardakci”,“Caglar Soyuncu”,“Merih Demiral”,“Ferdi Kadioglu”,“Kaan Ayhan”,“Ismail Yuksek”,“Hakan Calhanoglu”,“Orkun Kokcu”,“Team Photo”,“Arda Guler”,“Irfan Can Kahveci”,“Yunus Akgun”,“Can Uzun”,“Baris Alper Yilmaz”,“Kerem Akturkoglu”,“Kenan Yildiz”]},
{code:“GER”,name:“Deutschland (GER)”,group:“D”,players:[“Team Logo”,“Marc-Andre ter Stegen”,“Jonathan Tah”,“David Raum”,“Nico Schlotterbeck”,“Antonio Rudiger”,“Waldemar Anton”,“Ridle Baku”,“Maximilian Mittelstadt”,“Joshua Kimmich”,“Florian Wirtz”,“Felix Nmecha”,“Team Photo”,“Leon Goretzka”,“Jamal Musiala”,“Serge Gnabry”,“Kai Havertz”,“Leroy Sane”,“Karim Adeyemi”,“Nick Woltemade”]},
{code:“CUW”,name:“Curacao (CUW)”,group:“E”,players:[“Team Logo”,“Eloy Room”,“Armando Obispo”,“Sherel Floranus”,“Jurien Gaari”,“Joshua Brenet”,“Roshon Van Eijma”,“Shurandy Sambo”,“Livano Comenencia”,“Godfried Roemeratoe”,“Juninho Bacuna”,“Leandro Bacuna”,“Team Photo”,“Tahith Chong”,“Kenji Gorre”,“Jearl Margaritha”,“Jurgen Locadia”,“Jeremy Antonisse”,“Gervane Kastaneer”,“Sontje Hansen”]},
{code:“IVC”,name:“Elfenbeinkueste (IVC)”,group:“E”,players:[“Team Logo”,“Yahia Fofana”,“Ghislain Konan”,“Wilfried Singo”,“Odilon Kossounou”,“Evan Ndicka”,“Willy Boly”,“Emmanuel Agbadou”,“Ousmane Diomande”,“Franck Kessie”,“Seko Fofana”,“Ibrahim Sangare”,“Team Photo”,“Jean-Philippe Gbamin”,“Amad Diallo”,“Sebastien Haller”,“Simon Adingra”,“Yan Diomande”,“Evann Guessand”,“Oumar Diakite”]},
{code:“ECU”,name:“Ecuador (ECU)”,group:“E”,players:[“Team Logo”,“Hernan Galindez”,“Gonzalo Valle”,“Piero Hincapie”,“Pervis Estupinian”,“Willian Pacho”,“Angelo Preciado”,“Joel Ordonez”,“Moises Caicedo”,“Alan Franco”,“Kendry Paez”,“Pedro Vite”,“Team Photo”,“John Yeboah”,“Leonardo Campana”,“Gonzalo Plata”,“Nilson Angulo”,“Alan Minda”,“Kevin Rodriguez”,“Enner Valencia”]},
{code:“NED”,name:“Niederlande (NED)”,group:“E”,players:[“Team Logo”,“Bart Verbruggen”,“Virgil van Dijk”,“Micky van de Ven”,“Jurrien Timber”,“Denzel Dumfries”,“Nathan Ake”,“Jeremie Frimpong”,“Jan Paul van Hecke”,“Tijjani Reijnders”,“Ryan Gravenberch”,“Teun Koopmeiners”,“Team Photo”,“Frenkie de Jong”,“Xavi Simons”,“Justin Kluivert”,“Memphis Depay”,“Donyell Malen”,“Wout Weghorst”,“Cody Gakpo”]},
{code:“JPN”,name:“Japan (JPN)”,group:“F”,players:[“Team Logo”,“Zion Suzuki”,“Henry Heroki Mochizuki”,“Ayumu Seko”,“Junnosuke Suzuki”,“Shogo Taniguchi”,“Tsuyoshi Watanabe”,“Kaishu Sano”,“Yuki Soma”,“Ao Tanaka”,“Daichi Kamada”,“Takefusa Kubo”,“Team Photo”,“Ritsu Doan”,“Keito Nakamura”,“Takumi Minamino”,“Shuto Machino”,“Junya Ito”,“Koki Ogawa”,“Ayase Ueda”]},
{code:“SWE”,name:“Schweden (SWE)”,group:“F”,players:[“Team Logo”,“Victor Johansson”,“Isak Hien”,“Gabriel Gudmundsson”,“Emil Holm”,“Victor Nilsson Lindelof”,“Gustaf Lagerbielke”,“Lucas Bergvall”,“Hugo Larsson”,“Jesper Karlstrom”,“Yasin Ayari”,“Mattias Svanberg”,“Team Photo”,“Daniel Svensson”,“Ken Sema”,“Roony Bardghji”,“Dejan Kulusevski”,“Anthony Elanga”,“Alexander Isak”,“Viktor Gyokeres”]},
{code:“TUN”,name:“Tunesien (TUN)”,group:“F”,players:[“Team Logo”,“Bechir Ben Said”,“Aymen Dahmen”,“Yan Valery”,“Montassar Talbi”,“Yassine Meriah”,“Ali Abdi”,“Dylan Bronn”,“Ellyes Skhiri”,“Aissa Laidouni”,“Ferjani Sassi”,“Mohamed Ali Ben Romdhane”,“Team Photo”,“Hannibal Mejbri”,“Elias Achouri”,“Elias Saad”,“Hazem Mastouri”,“Ismael Gharbi”,“Sayfallah Ltaief”,“Naim Sliti”]},
{code:“BEL”,name:“Belgien (BEL)”,group:“F”,players:[“Team Logo”,“Thibaut Courtois”,“Arthur Theate”,“Timothy Castagne”,“Zeno Debast”,“Brandon Mechele”,“Maxim De Cuyper”,“Thomas Meunier”,“Youri Tielemans”,“Amadou Onana”,“Nicolas Raskin”,“Alexis Saelemaekers”,“Team Photo”,“Hans Vanaken”,“Kevin De Bruyne”,“Jeremy Doku”,“Charles De Ketelaere”,“Leandro Trossard”,“Lois Openda”,“Romelu Lukaku”]},
{code:“EGY”,name:“Aegypten (EGY)”,group:“G”,players:[“Team Logo”,“Mohamed El Shenawy”,“Mohamed Hany”,“Mohamed Hamdy”,“Yasser Ibrahim”,“Khaled Sobhi”,“Ramy Rabia”,“Hossam Abdelmaguid”,“Ahmed Fatouh”,“Marwan Attia”,“Zizo”,“Hamdy Fathy”,“Team Photo”,“Mohamed Lasheen”,“Emam Ashour”,“Osama Faisal”,“Mohamed Salah”,“Mostafa Mohamed”,“Trezeguet”,“Omar Marmoush”]},
{code:“IRN”,name:“Iran (IRN)”,group:“G”,players:[“Team Logo”,“Alireza Beiranvand”,“Morteza Pouraliganji”,“Ehsan Hajsafi”,“Milad Mohammadi”,“Shojae Khalilzadeh”,“Ramin Rezaeian”,“Hossein Kanaani”,“Sadegh Moharrami”,“Saleh Hardani”,“Saeed Ezatolahi”,“Saman Ghoddos”,“Team Photo”,“Omid Noorafkan”,“Roozbeh Cheshmi”,“Mohammad Mohebi”,“Sardar Azmoun”,“Mehdi Taremi”,“Alireza Jahanbakhsh”,“Ali Gholizadeh”]},
{code:“NZL”,name:“Neuseeland (NZL)”,group:“G”,players:[“Team Logo”,“Max Crocombe Payne”,“Alex Paulsen”,“Michael Boxall”,“Liberato Cacace”,“Tim Payne”,“Tyler Bindon”,“Francis de Vries”,“Finn Surman”,“Joe Bell”,“Sarpreet Singh”,“Ryan Thomas”,“Team Photo”,“Matthew Garbett”,“Marko Stamenic”,“Ben Old”,“Chris Wood”,“Elijah Just”,“Callum McCowatt”,“Kosta Barbarouses”]},
{code:“ESP”,name:“Spanien (ESP)”,group:“G”,players:[“Team Logo”,“Unai Simon”,“Robin Le Normand”,“Aymeric Laporte”,“Dean Huijsen”,“Pedro Porro”,“Dani Carvajal”,“Marc Cucurella”,“Martin Zubimendi”,“Rodri”,“Pedri”,“Fabian Ruiz”,“Team Photo”,“Mikel Merino”,“Lamine Yamal”,“Dani Olmo”,“Nico Williams”,“Ferran Torres”,“Alvaro Morata”,“Mikel Oyarzabal”]},
{code:“CPV”,name:“Kap Verde (CPV)”,group:“H”,players:[“Team Logo”,“Vozinha”,“Logan Costa”,“Pico”,“Diney”,“Steven Moreira”,“Wagner Pina”,“Joao Paulo”,“Yannick Semedo”,“Kevin Pina”,“Patrick Andrade”,“Jamiro Monteiro”,“Team Photo”,“Deroy Duarte”,“Garry Rodrigues”,“Jovane Cabral”,“Ryan Mendes”,“Dailon Livramento”,“Willy Semedo”,“Bebe”]},
{code:“KSA”,name:“Saudi-Arabien (KSA)”,group:“H”,players:[“Team Logo”,“Nawaf Alaqidi”,“Abdulrahman Al-Sanbi”,“Saud Abdulhamid”,“Nawaf Bouwashl”,“Jihad Thakri”,“Moteb Al-Harbi”,“Hassan Altambakti”,“Musab Aljuwayr”,“Ziyad Aljohani”,“Abdullah Alkhaibari”,“Nasser Aldawsari”,“Team Photo”,“Saleh Abu Alshamat”,“Marwan Alsahafi”,“Salem Aldawsari”,“Abdulrahman Al-Aboud”,“Feras Akbrikan”,“Saleh Alshehri”,“Abdullah Al-Hamdan”]},
{code:“URU”,name:“Uruguay (URU)”,group:“H”,players:[“Team Logo”,“Sergio Rochet”,“Santiago Mele”,“Ronald Araujo”,“Jose Maria Gimenez”,“Sebastian Caceres”,“Mathias Olivera”,“Guillermo Varela”,“Nahitan Nandez”,“Federico Valverde”,“Giorgian De Arrascaeta”,“Rodrigo Bentancur”,“Team Photo”,“Manuel Ugarte”,“Nicolas de la Cruz”,“Maxi Araujo”,“Darwin Nunez”,“Federico Vinas”,“Rodrigo Aguirre”,“Facundo Pellistri”]},
{code:“FRA”,name:“Frankreich (FRA)”,group:“I”,players:[“Team Logo”,“Mike Maignan”,“Theo Hernandez”,“William Saliba”,“Jules Kounde”,“Ibrahima Konate”,“Dayot Upamecano”,“Lucas Digne”,“Aurelien Tchouameni”,“Eduardo Camavinga”,“Manu Kone”,“Adrien Rabiot”,“Team Photo”,“Michael Olise”,“Ousmane Dembele”,“Bradley Barcola”,“Desire Doue”,“Kingsley Coman”,“Hugo Ekitike”,“Kylian Mbappe”]},
{code:“SEN”,name:“Senegal (SEN)”,group:“I”,players:[“Team Logo”,“Edouard Mendy”,“Yehvann Diouf”,“Moussa Niakhate”,“Abdoulaye Seck”,“Ismail Jakobs”,“El Hadji Malick Diouf”,“Kalidou Koulibaly”,“Idrissa Gana Gueye”,“Pape Matar Sarr”,“Pape Gueye”,“Habib Diarra”,“Team Photo”,“Lamine Camara”,“Sadio Mane”,“Ismaila Sarr”,“Boulaye Dia”,“Iliman Ndiaye”,“Nicolas Jackson”,“Krepin Diatta”]},
{code:“IRQ”,name:“Irak (IRQ)”,group:“I”,players:[“Team Logo”,“Jalal Hassan”,“Rebin Sulaka”,“Hussein Ali”,“Akam Hashem”,“Merchas Doski”,“Zaid Tahseen”,“Manaf Younis”,“Zidane Iqbal”,“Amir Al-Ammari”,“Ibrahim Bavesh”,“Ali Jasim”,“Team Photo”,“Youssef Amyn”,“Aimar Sher”,“Marko Farji”,“Osama Rashid”,“Ali Al-Hamadi”,“Aymen Hussein”,“Mohanad Ali”]},
{code:“NOR”,name:“Norwegen (NOR)”,group:“I”,players:[“Team Logo”,“Orjan Nyland”,“Julian Ryerson”,“Leo Ostigard”,“Kristoffer Ajer”,“Marcus Holmgren Pedersen”,“David Moller Wolfe”,“Torbjorn Heggem”,“Morten Thorsby”,“Martin Odegaard”,“Sander Berge”,“Andreas Schjelderup”,“Team Photo”,“Patrick Berg”,“Erling Haaland”,“Alexander Sorloth”,“Aron Donnum”,“Jorgen Strand Larsen”,“Antonio Nusa”,“Oscar Bobb”]},
{code:“ARG”,name:“Argentinien (ARG)”,group:“J”,players:[“Team Logo”,“Emiliano Martinez”,“Nahuel Molina”,“Cristian Romero”,“Nicolas Otamendi”,“Nicolas Tagliafico”,“Leonardo Balerdi”,“Enzo Fernandez”,“Alexis Mac Allister”,“Rodrigo De Paul”,“Exequiel Palacios”,“Leandro Paredes”,“Team Photo”,“Nico Paz”,“Franco Mastantuono”,“Nico Gonzalez”,“Lionel Messi”,“Lautaro Martinez”,“Julian Alvarez”,“Giuliano Simeone”]},
{code:“ALG”,name:“Algerien (ALG)”,group:“J”,players:[“Team Logo”,“Alexis Guendouz”,“Ramy Bensebaini”,“Youcef Atal”,“Rayan Ait-Nouri”,“Mohamed Amine Tougai”,“Aissa Mandi”,“Ismael Bennacer”,“Houssem Aquar”,“Hicham Boudaoui”,“Ramiz Zerrouki”,“Nabil Bentalab”,“Team Photo”,“Fares Chaibi”,“Riyad Mahrez”,“Said Benrahma”,“Anis Hadj Moussa”,“Amine Gouiri”,“Baghdad Bounedjah”,“Mohammed Amoura”]},
{code:“AUT”,name:“Oesterreich (AUT)”,group:“J”,players:[“Team Logo”,“Alexander Schlager”,“Patrick Pentz”,“David Alaba”,“Kevin Danso”,“Philipp Lienhart”,“Stefan Posch”,“Phillipp Mwene”,“Alexander Prass”,“Xaver Schlager”,“Marcel Sabitzer”,“Konrad Laimer”,“Team Photo”,“Florian Grillitsch”,“Nicolas Seiwald”,“Romano Schmid”,“Patrick Wimmer”,“Christoph Baumgartner”,“Michael Gregoritsch”,“Marko Arnautovic”]},
{code:“JOR”,name:“Jordanien (JOR)”,group:“J”,players:[“Team Logo”,“Yazeed Abulaila”,“Ihsan Haddad”,“Mohammad Abu Hashish”,“Yazan Al-Arab”,“Abdallah Nasib”,“Saleem Obaid”,“Mohammad Abualnadi”,“Ibrahim Saadeh”,“Nizar Al-Rashdan”,“Noor Al-Rawabdeh”,“Mohannad Abu Taha”,“Team Photo”,“Amer Jamous”,“Musa Al-Taamari”,“Yazan Al-Naimat”,“Mahmoud Al-Mardi”,“Ali Olwan”,“Mohammad Abu Zrayq”,“Ibrahim Sabra”]},
{code:“POR”,name:“Portugal (POR)”,group:“K”,players:[“Team Logo”,“Diogo Costa”,“Jose Sa”,“Ruben Dias”,“Joao Cancelo”,“Diogo Dalot”,“Nuno Mendes”,“Vitinha”,“Ruben Neves”,“Joao Neves”,“Bruno Fernandes”,“Bernardo Silva”,“Team Photo”,“Otavio”,“Joao Felix”,“Pedro Neto”,“Rafael Leao”,“Cristiano Ronaldo”,“Diogo Jota”,“Goncalo Ramos”]},
{code:“COL”,name:“Kolumbien (COL)”,group:“K”,players:[“Team Logo”,“Camilo Vargas”,“Carlos Cuesta”,“Davinson Sanchez”,“Yerry Mina”,“Johan Mojica”,“Daniel Munoz”,“Jefferson Lerma”,“Matheus Uribe”,“Richard Rios”,“James Rodriguez”,“Jhon Arias”,“Team Photo”,“Juan Cuadrado”,“Sebastian Villa”,“Luis Diaz”,“Jhon Cordoba”,“Radamel Falcao”,“Rafael Santos Borre”,“Jhon Duran”]},
{code:“GHA”,name:“Ghana (GHA)”,group:“K”,players:[“Team Logo”,“Lawrence Ati Zigi”,“Ibrahim Danlad”,“Alexander Djiku”,“Abdul Rahman Baba”,“Daniel Amartey”,“Gideon Mensah”,“Joseph Aidoo”,“Tariq Lamptey”,“Elisha Owusu”,“Iddrisu Baba”,“Thomas Partey”,“Team Photo”,“Mohammed Kudus”,“Osman Bukari”,“Daniel Kofi Kyereh”,“Jordan Ayew”,“Inaki Williams”,“Antoine Semenyo”,“Kwabena Owusu”]},
{code:“CRO”,name:“Kroatien (CRO)”,group:“K”,players:[“Team Logo”,“Dominik Livakovic”,“Ivica Ivusic”,“Josko Gvardiol”,“Dejan Lovren”,“Josip Sutalo”,“Domagoj Vida”,“Josip Juranovic”,“Borna Sosa”,“Marcelo Brozovic”,“Mateo Kovacic”,“Milan Badelj”,“Team Photo”,“Luka Modric”,“Lovro Majer”,“Mario Pasalic”,“Ante Budimir”,“Ivan Perisic”,“Andrej Kramaric”,“Bruno Petkovic”]},
{code:“ENG”,name:“England (ENG)”,group:“L”,players:[“Team Logo”,“Jordan Pickford”,“Dean Henderson”,“Reece James”,“Trent Alexander-Arnold”,“John Stones”,“Marc Guehi”,“Luke Shaw”,“Kyle Walker”,“Declan Rice”,“Kobbie Mainoo”,“Jude Bellingham”,“Team Photo”,“Phil Foden”,“Bukayo Saka”,“Jack Grealish”,“Marcus Rashford”,“Harry Kane”,“Cole Palmer”,“Ollie Watkins”]},
{code:“COD”,name:“Kongo DR (COD)”,group:“L”,players:[“Team Logo”,“Joris Kayembe”,“Lionel Mpasi”,“Christian Luyindama”,“Chancel Mbemba”,“Marcel Tisserand”,“Cedric Bakambu”,“Paul-Jose M’Poku”,“Samuel Bastien”,“Nathan Bakumbu”,“Yoane Wissa”,“Silas Katompa”,“Team Photo”,“Mechak Jordan”,“Theo Bongonda”,“Dodi Lukebakio”,“Arthur Masuaku”,“Cedric Bakambu II”,“Mathis Bolly”,“Jordan Ikoko”]},
{code:“PAN”,name:“Panama (PAN)”,group:“L”,players:[“Team Logo”,“Orlando Mosquera”,“Luis Mejia”,“Eric Davis”,“Harold Cummings”,“Fidel Escobar”,“Andres Andrade”,“Roderick Miller”,“Jose Fajardo”,“Adalberto Carrasquilla”,“Anibal Godoy”,“Edgar Barcenas”,“Team Photo”,“Cecilio Waterman”,“Ismael Diaz”,“Miguel Angel Taylor”,“Rolando Blackburn”,“Alberto Quintero”,“Alfredo Stephens”,“Adolfo Machado”]},
{code:“UZB”,name:“Usbekistan (UZB)”,group:“J”,players:[“Team Logo”,“Eldorbek Suyunov”,“Otabek Shukurov”,“Eldor Shomurodov”,“Jasurbek Yakhshiboev”,“Umid Dzhalilov”,“Khojiakbar Alijonov”,“Abbosbek Fayzullaev”,“Jamshid Iskanderov”,“Otabek Zukhurjonov”,“Shamsiddin Kalandarov”,“Javokhir Sidiqov”,“Team Photo”,“Dostonbek Khamdamov”,“Jaloliddin Masharipov”,“Akbar Djuraev”,“Saidakbar Komilov”,“Bobur Abdixoliqov”,“Nasrulloh Abdullayev”,“Ruslan Nishonov”]}
];

// Build checklist
var CHECKLIST = {};
var ALL_IDS = [];
var TOTAL = 0;
var ALL_SECTIONS = [];

SPECIAL_SECTIONS.forEach(function(sec) {
ALL_SECTIONS.push({code:sec.code,name:sec.name,group:“Spezial”,stickers:sec.stickers,isSpecial:true});
sec.stickers.forEach(function(s) {
CHECKLIST[s.id] = {id:s.id,name:s.name,section:sec.code,sectionName:sec.name,isSpecial:true};
ALL_IDS.push(s.id);
});
});
TEAMS.forEach(function(t) {
var stickers = t.players.map(function(p,i){ return {id:t.code+(i+1),name:p,foil:i===0}; });
ALL_SECTIONS.push({code:t.code,name:t.name,group:’Gruppe ’+t.group,stickers:stickers,isSpecial:false});
stickers.forEach(function(s) {
CHECKLIST[s.id] = {id:s.id,name:s.name,section:t.code,sectionName:t.name,teamCode:t.code};
ALL_IDS.push(s.id);
});
});
TOTAL = ALL_IDS.length;

// State
var state = {owned:{},needed:{}};
var currentMode = ‘add’;
var albFilter = ‘all’;
var currentSection = null;
var currentPopupId = null;
var toastTimer = null;

// Load from localStorage
try {
var saved = localStorage.getItem(‘panini26_v4’);
if(saved) state = JSON.parse(saved);
} catch(e){}

function save() {
try { localStorage.setItem(‘panini26_v4’, JSON.stringify(state)); } catch(e){}
}

// Parse IDs from text
var ALL_CODES = ALL_SECTIONS.map(function(s){return s.code;});
function parseIds(text) {
var upper = text.toUpperCase();
var found = [];
var re = new RegExp(’\b(’+ALL_CODES.join(’|’)+’)’+’(\d{1,2})\b’,‘g’);
var m;
while((m=re.exec(upper))!==null){
var id=m[1]+m[2];
if(CHECKLIST[id]&&found.indexOf(id)<0) found.push(id);
}
if(upper.indexOf(‘00’)>=0&&found.indexOf(‘00’)<0) found.push(‘00’);
return found;
}

function applyIds(ids, mode) {
if(!ids.length){showToast(‘Keine gueltigen Codes.’);return;}
ids.forEach(function(id){
if(mode===‘add’) state.owned[id]=(state.owned[id]||0)+1;
else if(mode===‘remove’){if((state.owned[id]||0)>1)state.owned[id]–;else delete state.owned[id];}
else if(mode===‘need’) state.needed[id]=true;
else delete state.needed[id];
});
save(); render();
var labels={add:‘hinzugefuegt’,remove:‘entfernt’,need:‘als fehlend markiert’,unneed:‘aktualisiert’};
showToast(ids.length+’ Bild(er) ‘+labels[mode]+’ ok’);
}

function showToast(msg) {
clearTimeout(toastTimer);
var t=document.getElementById(‘toast’);
t.textContent=msg; t.classList.remove(‘hidden’);
toastTimer=setTimeout(function(){t.classList.add(‘hidden’);},2400);
}

//    RENDER  
function render() {
var owned=Object.keys(state.owned).length;
var doubles=ALL_IDS.filter(function(id){return state.owned[id]>1;}).length;
var missing=TOTAL-owned;
var needed=ALL_IDS.filter(function(id){return state.needed[id]&&!state.owned[id];}).length;
var pct=Math.round((owned/TOTAL)*100);

document.getElementById(‘st-owned’).textContent=owned;
document.getElementById(‘st-doubles’).textContent=doubles;
document.getElementById(‘st-missing’).textContent=missing;
document.getElementById(‘st-needed’).textContent=needed;
document.getElementById(‘pb-txt’).textContent=owned+’ / ‘+TOTAL+’ (’+pct+’%)’;
document.getElementById(‘pb-fill’).style.width=pct+’%’;

renderSecGrid();
renderOverview();
if(currentSection) renderDetail(currentSection);
}

function stkStatus(id){
if(state.owned[id]>1) return ‘double’;
if(state.owned[id]===1) return ‘owned’;
if(state.needed[id]) return ‘needed’;
return ‘missing’;
}

function secStats(sec){
var tot=sec.stickers.length;
var own=sec.stickers.filter(function(s){return state.owned[s.id];}).length;
return {tot:tot,own:own,mis:tot-own};
}

function renderSecGrid() {
var grid=document.getElementById(‘sec-grid’);
var filtered=ALL_SECTIONS.filter(function(sec){
var st=secStats(sec);
if(albFilter===‘complete’) return st.mis===0;
if(albFilter===‘started’) return st.own>0&&st.mis>0;
if(albFilter===‘empty’) return st.own===0;
return true;
});
grid.innerHTML=filtered.map(function(sec){
var st=secStats(sec);
var pct=Math.round((st.own/st.tot)*100);
var ok=st.mis===0?‘color:var(–g)’:‘color:var(–mu)’;
var cls=sec.isSpecial?‘sec-card special’:‘sec-card’;
return ‘<div class="'+cls+'" onclick="openDetail(\''+sec.code+'\')">’+
‘<div class="glbl">’+sec.group+’</div>’+
‘<h4>’+sec.name+’</h4>’+
‘<div class="mini-bar"><div class="mini-f" style="width:'+pct+'%"></div></div>’+
‘<div class="sec-meta"><span>’+st.own+’/’+st.tot+’</span>’+
‘<span style="'+ok+'">’+(st.mis===0?‘Komplett’:st.mis+’ fehlen’)+’</span></div></div>’;
}).join(’’);
}

function openDetail(code) {
currentSection=code;
document.getElementById(‘album-list’).classList.add(‘hidden’);
document.getElementById(‘album-detail’).classList.remove(‘hidden’);
renderDetail(code);
}

function closeDetail() {
currentSection=null;
document.getElementById(‘album-list’).classList.remove(‘hidden’);
document.getElementById(‘album-detail’).classList.add(‘hidden’);
}

function renderDetail(code) {
var sec=ALL_SECTIONS.find(function(s){return s.code===code;});
if(!sec) return;
var st=secStats(sec);
document.getElementById(‘detail-header’).innerHTML=
‘<div style="font-size:1rem;font-weight:800;margin-bottom:3px">’+sec.name+’</div>’+
‘<div style="font-size:.72rem;color:var(--mu);margin-bottom:8px">’+sec.group+’ - ‘+st.own+’/’+st.tot+’ gesammelt</div>’;
document.getElementById(‘stk-grid’).innerHTML=sec.stickers.map(function(s){
var status=stkStatus(s.id);
var badge=state.owned[s.id]>1?’<span class="dbadge">x’+state.owned[s.id]+’</span>’:’’;
return ‘<div class="stk '+status+'" onclick="openPopup(\''+s.id+'\')">’+
badge+’<div>’+s.id+’</div><div class="nm">’+s.name+’</div></div>’;
}).join(’’);
}

function renderOverview() {
var doubles=ALL_IDS.filter(function(id){return state.owned[id]>1;});
var missing=ALL_IDS.filter(function(id){return !state.owned[id];});

function groupBySec(ids){
var map={};
ids.forEach(function(id){
var s=CHECKLIST[id].section,sn=CHECKLIST[id].sectionName;
if(!map[s]) map[s]={name:sn,ids:[]};
map[s].ids.push(id);
});
return Object.values(map);
}

var dEl=document.getElementById(‘ov-doubles’);
if(doubles.length===0){dEl.innerHTML=’<span class="empty">Keine Doppelten.</span>’;}
else {
dEl.innerHTML=groupBySec(doubles).map(function(sec){
return ‘<div style="width:100%;margin-bottom:7px"><div style="font-size:.68rem;color:var(--mu);margin-bottom:3px">’+sec.name+’</div>’+
sec.ids.map(function(id){return ‘<span class="pill d">’+id+’ x’+state.owned[id]+’</span>’;}).join(’’)+’</div>’;
}).join(’’);
}

var mEl=document.getElementById(‘ov-missing’);
if(missing.length===0){mEl.innerHTML=’<span style="color:var(--g);font-weight:bold">Album komplett!</span>’;}
else {
mEl.innerHTML=groupBySec(missing).map(function(sec){
return ‘<div style="width:100%;margin-bottom:7px"><div style="font-size:.68rem;color:var(--mu);margin-bottom:3px">’+sec.name+’</div>’+
sec.ids.map(function(id){return ‘<span class="pill n">’+id+’</span>’;}).join(’’)+’</div>’;
}).join(’’);
}
}

//    TABS  
function switchTab(name, btn) {
[‘manual’,‘album’,‘overview’].forEach(function(t){
document.getElementById(‘tab-’+t).classList.add(‘hidden’);
});
document.querySelectorAll(’.tab’).forEach(function(b){b.classList.remove(‘active’);});
document.getElementById(‘tab-’+name).classList.remove(‘hidden’);
btn.classList.add(‘active’);
if(name===‘album’){ closeDetail(); renderSecGrid(); }
}

//    MANUAL  
function setMode(mode, btn) {
currentMode=mode;
document.querySelectorAll(’.mb’).forEach(function(b){
b.className=‘mb’;
});
btn.className=‘mb active-’+mode;
}

function applyManual() {
var text=document.getElementById(‘manual-input’).value;
var ids=parseIds(text);
applyIds(ids, currentMode);
document.getElementById(‘manual-input’).value=’’;
}

//    ALBUM FILTER  
function setAlbFilter(f, btn) {
albFilter=f;
document.querySelectorAll(’.flt’).forEach(function(b){b.classList.remove(‘active’);});
btn.classList.add(‘active’);
renderSecGrid();
}

//    POPUP  
function openPopup(id) {
currentPopupId=id;
var info=CHECKLIST[id];
var count=state.owned[id]||0;
document.getElementById(‘popup-title’).textContent=id+’ - ‘+info.name;
document.getElementById(‘popup-sub’).textContent=count>0?‘Aktuell: ‘+count+‘x vorhanden’:‘Noch nicht vorhanden’;
document.getElementById(‘popup-add’).textContent=’+ Hinzufuegen (’+(count)+’ -> ‘+(count+1)+’)’;
document.getElementById(‘popup-rem’).textContent=’- Entfernen (’+(count)+’ -> ‘+Math.max(0,count-1)+’)’;
document.getElementById(‘popup-rem’).disabled=count===0;
document.getElementById(‘stk-popup’).classList.remove(‘hidden’);
}

function closePopup() { document.getElementById(‘stk-popup’).classList.add(‘hidden’); }

function popupAction(action) {
if(!currentPopupId) return;
applyIds([currentPopupId], action);
closePopup();
}

//    KPI MODAL  
function showKpi(type) {
var cfgs = {
owned:{title:‘Habe ich’,color:‘var(–g)’,ids:ALL_IDS.filter(function(id){return state.owned[id]>=1;})},
doubles:{title:‘Doppelte’,color:‘var(–y)’,ids:ALL_IDS.filter(function(id){return state.owned[id]>1;})},
missing:{title:‘Fehlende’,color:‘var(–r)’,ids:ALL_IDS.filter(function(id){return !state.owned[id];})},
needed:{title:‘Gesuchte’,color:‘var(–p)’,ids:ALL_IDS.filter(function(id){return state.needed[id]&&!state.owned[id];})}
};
var cfg=cfgs[type];
var map={};
cfg.ids.forEach(function(id){
var s=CHECKLIST[id].section,sn=CHECKLIST[id].sectionName;
if(!map[s]) map[s]={name:sn,ids:[]};
map[s].ids.push(id);
});
var clr = type===‘doubles’?‘rgba(245,158,11,.12)’:type===‘missing’?‘rgba(239,68,68,.1)’:type===‘needed’?‘rgba(168,85,247,.12)’:‘rgba(34,197,94,.12)’;
var tcl = type===‘doubles’?‘var(–y)’:type===‘missing’?‘var(–r)’:type===‘needed’?‘var(–p)’:‘var(–g)’;
document.getElementById(‘kpi-title’).innerHTML=’<span style="color:'+cfg.color+'">’+cfg.title+’</span> <span style="font-size:.75rem;color:var(--mu)">’+cfg.ids.length+’ Sticker</span>’;
var body=Object.values(map).map(function(sec){
return ‘<div style="margin-bottom:10px"><div style="font-size:.68rem;color:var(--mu);font-weight:700;text-transform:uppercase;margin-bottom:4px">’+sec.name+’</div>’+
‘<div style="display:flex;flex-wrap:wrap;gap:3px">’+
sec.ids.map(function(id){
return ‘<span style="padding:2px 8px;border-radius:999px;font-size:.72rem;font-weight:700;background:'+clr+';color:'+tcl+';border:1px solid '+tcl.replace(')',',0.25)')+'">’+id+(type===‘doubles’?’ x’+state.owned[id]:’’)+’</span>’;
}).join(’’)+’</div></div>’;
}).join(’’);
if(!body) body=’<p style="color:var(--mu);font-style:italic">Keine Sticker.</p>’;
document.getElementById(‘kpi-body’).innerHTML=body;
document.getElementById(‘kpi-modal’).classList.remove(‘hidden’);
}
function closeKpi(){ document.getElementById(‘kpi-modal’).classList.add(‘hidden’); }

//    EXPORT MODAL  
function showExportModal() {
var doubles=ALL_IDS.filter(function(id){return state.owned[id]>1;});
var missing=ALL_IDS.filter(function(id){return !state.owned[id];});
function grp(ids){var m={};ids.forEach(function(id){var s=CHECKLIST[id].section,sn=CHECKLIST[id].sectionName;if(!m[s])m[s]={name:sn,ids:[]};m[s].ids.push(id);});return Object.values(m);}
var owned=Object.keys(state.owned).length;
var html=””;
html+=”<div style='display:flex;gap:8px;margin-bottom:12px'>”;
html+=”<div style='flex:1;text-align:center;background:rgba(34,197,94,.08);border:1px solid rgba(34,197,94,.25);border-radius:10px;padding:7px'><div style='font-size:1.3rem;font-weight:800;color:var(--g)'>”+owned+”</div><div style='font-size:.62rem;color:var(--mu)'>HABE ICH</div></div>”;
html+=”<div style='flex:1;text-align:center;background:rgba(245,158,11,.08);border:1px solid rgba(245,158,11,.25);border-radius:10px;padding:7px'><div style='font-size:1.3rem;font-weight:800;color:var(--y)'>”+doubles.length+”</div><div style='font-size:.62rem;color:var(--mu)'>DOPPELTE</div></div>”;
html+=”<div style='flex:1;text-align:center;background:rgba(239,68,68,.08);border:1px solid rgba(239,68,68,.25);border-radius:10px;padding:7px'><div style='font-size:1.3rem;font-weight:800;color:var(--r)'>”+missing.length+”</div><div style='font-size:.62rem;color:var(--mu)'>FEHLEN</div></div>”;
html+=”</div>”;
html+=”<div style='font-size:.9rem;font-weight:800;color:var(--y);margin-bottom:7px'>Doppelte (”+doubles.length+”)</div>”;
if(!doubles.length){html+=”<p style='color:var(--mu);font-style:italic'>Keine.</p>”;}
else{grp(doubles).forEach(function(s){html+=”<div style='margin-bottom:8px'><div style='font-size:.68rem;color:var(--mu);margin-bottom:3px'>”+s.name+”</div><div>”;s.ids.forEach(function(id){html+=”<span style='padding:2px 8px;border-radius:999px;font-size:.72rem;font-weight:700;background:rgba(245,158,11,.12);color:var(--y)'>”+id+” x”+state.owned[id]+”</span> “;});html+=”</div></div>”;});}
html+=”<div style='height:1px;background:var(--br);margin:10px 0'></div>”;
html+=”<div style='font-size:.9rem;font-weight:800;color:var(--r);margin-bottom:7px'>Fehlende (”+missing.length+”)</div>”;
if(!missing.length){html+=”<p style='color:var(--g);font-weight:bold'>Album komplett!</p>”;}
else{grp(missing).forEach(function(s){html+=”<div style='margin-bottom:8px'><div style='font-size:.68rem;color:var(--mu);margin-bottom:3px'>”+s.name+”</div><div>”;s.ids.forEach(function(id){html+=”<span style='padding:2px 8px;border-radius:999px;font-size:.72rem;font-weight:700;background:rgba(239,68,68,.1);color:var(--r)'>”+id+”</span> “;});html+=”</div></div>”;});}
document.getElementById(“exp-body”).innerHTML=html;
document.getElementById(“exp-modal”).classList.remove(“hidden”);
}

function closeExpModal(){ document.getElementById(‘exp-modal’).classList.add(‘hidden’); }

//    PRINT  
function doPrint() {
var doubles=ALL_IDS.filter(function(id){return state.owned[id]>1;});
var missing=ALL_IDS.filter(function(id){return !state.owned[id];});
function grp(ids){var m={};ids.forEach(function(id){var s=CHECKLIST[id].section,sn=CHECKLIST[id].sectionName;if(!m[s])m[s]={name:sn,ids:[]};m[s].ids.push(id);});return Object.values(m);}
var owned=Object.keys(state.owned).length;
var date=new Date().toLocaleDateString(“de-CH”);
var dRows=””;
if(!doubles.length){dRows=”<p>Keine.</p>”;}
else{grp(doubles).forEach(function(s){dRows+=”<div style=margin-bottom:8px><b>”+s.name+”</b><br>”;s.ids.forEach(function(id){dRows+=”<span style=background:#fef9c3;padding:1px 6px;border-radius:10px;margin:2px;display:inline-block;font-size:9px>”+id+” x”+state.owned[id]+”</span>”;});dRows+=”</div>”;});}
var mRows=””;
if(!missing.length){mRows=”<p style=color:green;font-weight:bold>Komplett!</p>”;}
else{grp(missing).forEach(function(s){mRows+=”<div style=margin-bottom:8px><b>”+s.name+”</b><br>”;s.ids.forEach(function(id){mRows+=”<span style=background:#eff6ff;padding:1px 6px;border-radius:10px;margin:2px;display:inline-block;font-size:9px>”+id+”</span>”;});mRows+=”</div>”;});}
var html=”<!DOCTYPE html><html><head><meta charset=utf-8><title>Panini WM 2026</title>”;
html+=”<style>body{font-family:Arial,sans-serif;margin:16px;font-size:12px}@media print{button{display:none}}</style></head><body>”;
html+=”<button onclick=window.print() style=padding:8px;background:#e11d48;color:white;border:none;border-radius:6px;cursor:pointer;margin-bottom:12px>Drucken</button>”;
html+=”<h1 style=font-size:18px;color:#e11d48>Panini WM 2026</h1>”;
html+=”<p style=color:#666;font-size:11px;margin-bottom:12px>Stand: “+date+” | “+owned+” gesammelt | “+doubles.length+” doppelt | “+missing.length+” fehlen</p>”;
html+=”<h2 style=color:#d97706>Doppelte (”+doubles.length+”)</h2>”+dRows;
html+=”<h2 style=color:#2563eb>Fehlende (”+missing.length+”)</h2>”+mRows;
html+=”</body></html>”;
var w=window.open(””,”_blank”);
if(w){w.document.write(html);w.document.close();}
else{showToast(“Popup blockiert”);}
}

function resetAll() {
if(!confirm(‘Alles zuruecksetzen?’)) return;
state={owned:{},needed:{}};
save(); render();
showToast(‘Zurueckgesetzt.’);
}

// Init
render();

//    INIT EVENT LISTENERS  
document.getElementById(‘tabs’).addEventListener(‘click’, function(e) {
var btn = e.target.closest(’[data-tab]’);
if(!btn) return;
var name = btn.getAttribute(‘data-tab’);
document.querySelectorAll(’.tab’).forEach(function(b){b.classList.remove(‘active’);});
btn.classList.add(‘active’);
[‘manual’,‘album’,‘overview’].forEach(function(t){
document.getElementById(‘tab-’+t).classList.add(‘hidden’);
});
document.getElementById(‘tab-’+name).classList.remove(‘hidden’);
if(name===‘album’){ closeDetail(); renderSecGrid(); }
});

document.getElementById(‘mode-btns’).addEventListener(‘click’, function(e) {
var btn = e.target.closest(’[data-mode]’);
if(!btn) return;
currentMode = btn.getAttribute(‘data-mode’);
document.querySelectorAll(’#mode-btns .mb’).forEach(function(b){ b.className=‘mb’; });
btn.className = ‘mb active-’+currentMode;
});

document.getElementById(‘alb-filters’).addEventListener(‘click’, function(e) {
var btn = e.target.closest(’[data-filter]’);
if(!btn) return;
albFilter = btn.getAttribute(‘data-filter’);
document.querySelectorAll(’#alb-filters .flt’).forEach(function(b){b.classList.remove(‘active’);});
btn.classList.add(‘active’);
renderSecGrid();
});

document.getElementById(‘btn-apply’).addEventListener(‘click’, applyManual);
document.getElementById(‘btn-back’).addEventListener(‘click’, closeDetail);
document.getElementById(‘btn-export’).addEventListener(‘click’, showExportModal);
document.getElementById(‘btn-print’).addEventListener(‘click’, doPrint);
document.getElementById(‘btn-reset’).addEventListener(‘click’, resetAll);
document.getElementById(‘btn-close-kpi’).addEventListener(‘click’, closeKpi);
document.getElementById(‘btn-close-exp’).addEventListener(‘click’, closeExpModal);
document.getElementById(‘btn-cancel-popup’).addEventListener(‘click’, closePopup);
document.getElementById(‘popup-add-btn’).addEventListener(‘click’, function(){ popupAction(‘add’); });
document.getElementById(‘popup-rem-btn’).addEventListener(‘click’, function(){ popupAction(‘remove’); });

document.getElementById(‘kpi-owned’).addEventListener(‘click’, function(){ showKpi(‘owned’); });
document.getElementById(‘kpi-doubles’).addEventListener(‘click’, function(){ showKpi(‘doubles’); });
document.getElementById(‘kpi-missing’).addEventListener(‘click’, function(){ showKpi(‘missing’); });
document.getElementById(‘kpi-needed’).addEventListener(‘click’, function(){ showKpi(‘needed’); });

document.getElementById(‘kpi-modal’).addEventListener(‘click’, function(e){
if(e.target===this) closeKpi();
});
document.getElementById(‘exp-modal’).addEventListener(‘click’, function(e){
if(e.target===this) closeExpModal();
});
document.getElementById(‘stk-popup’).addEventListener(‘click’, function(e){
if(e.target===this) closePopup();
});

(this.webpackJsonpherodirectory=this.webpackJsonpherodirectory||[]).push([[0],[,,,function(e){e.exports=JSON.parse('[{"id":1,"firstName":"Peter","lastName":"Parker","alias":"Spider-Man","image":"https://heroichollywood.com/wp-content/uploads/2019/08/Tom_Holland_Spider-Man_Sony_Marvel.jpg","email":"friendlyneighborhood@spiderman.com","occupation":"Photographer"},{"id":2,"firstName":"Thanos","lastName":"","alias":"The Mad Titan","image":"https://cdn.vox-cdn.com/thumbor/FUiZhxG5CqieDugP3dvkh_QpQ3c=/0x0:2000x1000/1400x933/filters:focal(654x138:974x458):no_upscale()/cdn.vox-cdn.com/uploads/chorus_image/image/59408999/Thanos_MCU.0.jpg","email":"onesnap@sacrificeyourdaughter.com","occupation":"Autocrat"},{"id":3,"firstName":"Wade","lastName":"Wilson","alias":"Deadpool","image":"https://img1.looper.com/img/gallery/some-major-changes-could-be-coming-for-deadpool-3/intro-1582726273.jpg","email":"mercwithamouth@breakthefourthwall.com","occupation":"Mercenary"},{"id":4,"firstName":"Tony","lastName":"Stark","alias":"Iron Man","image":"https://www.nme.com/wp-content/uploads/2019/05/avengersrdj-696x442.jpg","email":"loveu3000@starkindustries.com","occupation":"Tech Tychoon"},{"id":5,"firstName":"Natasha","lastName":"Romanov","alias":"Black Widow","image":"https://am24.mediaite.com/tms/cnt/uploads/2016/08/blackwidow.jpg","email":"reformedassassin@redroom.com","occupation":"Spy"},{"id":6,"firstName":"Steve","lastName":"Rodgers","alias":"Captain America","image":"https://cdn.britannica.com/30/182830-050-96F2ED76/Chris-Evans-title-character-Joe-Johnston-Captain.jpg","email":"peggy4me@firstavenger.org","occupation":"Soldier"},{"id":7,"firstName":"Bruce","lastName":"Banner","alias":"Hulk","image":"https://img.etimg.com/thumb/msid-72400227,width-1200,height-900,imgsize-349917,overlay-etpanache/photo.jpg","email":"hulk@smash.com","occupation":"Scientist"},{"id":8,"firstName":"Logan","lastName":"Howlett","alias":"Wolverine","image":"https://cdn.britannica.com/72/182872-050-914C987D/Hugh-Jackman-title-character-The-Wolverine-James.jpg","email":"thebestatwhatIdo@weaponx.com","occupation":"Assassin"},{"id":9,"firstName":"Wanda","lastName":"Maximoff","alias":"Scarlet Witch","image":"https://img1.looper.com/img/gallery/why-scarlet-witchs-powers-are-underrated/intro-1571667819.jpg","email":"androidlove@nomoremutants.com","occupation":"Witch"},{"id":10,"firstName":"Thor","lastName":"Odinson","alias":"God of Thunder","image":"https://c4.wallpaperflare.com/wallpaper/70/1011/821/thor-fat-thor-marvel-cinematic-universe-hd-wallpaper-preview.jpg","email":"asgardian1@odinson.org","occupation":"N/A"},{"id":11,"firstName":"Clint","lastName":"Barton","alias":"Hawkeye","image":"https://i.pinimg.com/originals/10/f8/1d/10f81dd91b84c7fc7edaec391a0555cc.jpg","email":"Hawkeye@HawkeyeInvestigations.com","occupation":"Agent"},{"id":12,"firstName":"Victor","lastName":"Shade","alias":"Vision","image":"https://depor.com/resizer/eLnu2vjclc86euMU8cDsVBR9ACU=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/YV3CY6UETVDZPHFIDUI4WVK2JQ.jpg","email":"wandalove@vivvin.com","occupation":"N/A"}]')},,,,,,,,,,function(e,a,t){e.exports=t(23)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),i=t.n(n),o=t(7),r=t.n(o),l=(t(18),t(4)),s=t(5),c=t(8),m=t(9),d=t(10),u=t(11),h=t(12);t(19);var p=function(e){return i.a.createElement("h1",{className:"title"},e.children)},g=t(3);t(20);var f=function(e){return i.a.createElement("div",{className:"container"},e.children)};t(21);var N=function(e){return i.a.createElement("div",null,i.a.createElement("p",null,"Enter your heroe's First or Last name below with a capital letter to search or click alphabetize to view a sorted list!"),i.a.createElement("br",null),i.a.createElement("p",null,"Click Submit again to reset the list of heroes."),i.a.createElement("div",{className:"entertext"},i.a.createElement("form",{className:"form"},i.a.createElement("input",{value:e.firstName,name:"firstName",onChange:e.handleInputChange,type:"text",placeholder:"First or Last name only"}),i.a.createElement("br",null),i.a.createElement("br",null),i.a.createElement("button",{className:"btn btn-danger btn-lg shadow",onClick:e.handleFormSubmit},"Submit"))))};t(22);var v=function(e){return i.a.createElement(f,null,i.a.createElement("div",{className:"content"},e.employeeList.length?i.a.createElement("ul",null,e.employeeList.map((function(a){return i.a.createElement("div",{className:"card"},i.a.createElement("li",{className:"list-group-item",key:a.id},i.a.createElement("div",{id:"name"},a.firstName," ",a.lastName),i.a.createElement("div",{id:"alias"},a.alias),i.a.createElement("div",{id:"occupation"},a.occupation),i.a.createElement("div",{id:"email"},"Email: ",a.email)),i.a.createElement("div",{className:"img-container"},i.a.createElement("img",{alt:e.firstName,src:a.image})))}))):i.a.createElement("h2",null,"Sorry, No Heroe by that name")))},b=function(e){Object(u.a)(t,e);var a=Object(h.a)(t);function t(){var e;Object(m.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(e=a.call.apply(a,[this].concat(i))).state={sorted:g,firstName:"",lastName:"",alias:""},e.handleInputChange=function(a){var t=a.target.value,n=a.target.name;e.setState(Object(c.a)({},n,t))},e.handleFormSubmit=function(a){a.preventDefault();var t=Object(l.a)(Array,Object(s.a)(g));console.log(t);var n=t.filter((function(a){return console.log(a.firstName),console.log(e.state.firstName),console.log(a.firstName.includes(e.state.firstName)),a.firstName.includes(e.state.firstName)||a.lastName.includes(e.state.firstName)}));console.log(n),e.setState({sorted:n}),e.setState({firstName:"",lastName:"",alias:""})},e.sortName=function(){var a=Object(l.a)(Array,Object(s.a)(g));console.log(a);var t=a.sort((function(e,a){return console.log(e.firstName,a.firstName),console.log(a.firstName-e.firstName),e.firstName>a.firstName?1:a.firstName>e.firstName?-1:0}));console.log(t),e.setState({sorted:t})},e}return Object(d.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(f,null,i.a.createElement(p,null,"Welcome to the ",i.a.createElement("p",null,"MARVEL Employment Agency!")),i.a.createElement(N,{firstName:this.state.firstName,lastName:this.state.lastName,alias:this.state.alias,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit}),i.a.createElement(f,null,i.a.createElement("div",{className:"abcButton"},i.a.createElement("button",{className:"btn btn-warning btn-sm shadow",onClick:this.sortName},"Alphabetize Heroes"))),i.a.createElement(v,{employeeList:this.state.sorted})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[13,1,2]]]);
//# sourceMappingURL=main.d2743c4e.chunk.js.map
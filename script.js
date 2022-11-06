AOS.init();

var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 750 - margin.left - margin.right,
    height = 500 - margin.top - margin.bottom;

var svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

// Lecture des données
d3.csv("data.csv", function(data) {

    var allGroup = d3.map(data, function(d){return(d.genre)}).keys()

    // Ajout des options dans la liste déroulante
    d3.select("#selectButton")
      .selectAll('myOptions')
     	.data(allGroup)
      .enter()
    	.append('option')
      .text(function (d) { return d; })
      .attr("value", function (d) { return d; })

    var myColor = d3.scaleOrdinal()
      .domain(allGroup)
      .range(d3.schemeSet2);

    // Ajout de l'axe des abscisses
    var x = d3.scaleLinear()
      .domain(d3.extent(data, function(d) { return d.annee; }))
      .range([ 0, width ]);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x).ticks(10));
    svg.append("text")             
      .attr("transform",
            "translate(" + (width/2) + " ," + 
                           (height + margin.top + 20) + ")")
      .style("text-anchor", "middle")
      .style("font-size","0.9em")
      .style("font-weight","bold")
      .text("Année");

    // Ajout de l'axe des ordonnées
    var y = d3.scaleLinear()
      .domain([0, d3.max(data, function(d) { return +d.popularite; })])
      .range([ height, 0 ]);
    svg.append("g")
      .call(d3.axisLeft(y))
    svg.append("text")
      .attr("transform", "rotate(-90)")
      .attr("y", 0 - margin.left)
      .attr("x",0 - (height / 2))
      .attr("dy", "1em")
      .style("text-anchor", "middle")
      .style("font-size","0.9em")
      .style("font-weight","bold")
      .text("Places dans le Billboard Hot 100 en %");    


    // Initialisation du graphique avec la première donnée de la liste déroulante
    var line = svg
      .append('g')
      .append("path")
        .datum(data.filter(function(d){return d.genre==allGroup[0]}))
        .attr("d", d3.line()
          .x(function(d) { return x(d.annee) })
          .y(function(d) { return y(+d.popularite) })
        )
        .attr("stroke", function(d){ return myColor("genre") })
        .style("stroke-width", 4)
        .style("fill", "none")

    // Fonction qui change le graphique 
    function update(selectedGroup) {

      var dataFilter = data.filter(function(d){return d.genre==selectedGroup})

      line
          .datum(dataFilter)
          .transition()
          .duration(1000)
          .attr("d", d3.line()
            .x(function(d) { return x(d.annee) })
            .y(function(d) { return y(+d.popularite) })
          )
          .attr("stroke", function(d){ return myColor(selectedGroup) })
    }

    // Fonction updateChart selon l'option selectionnée
    d3.select("#selectButton").on("change", function(d) {
        var selectedOption = d3.select(this).property("value")
        update(selectedOption)

          var source = document.getElementById('audio');
          var labelaudio = document.getElementById('labelaudio');

          if (document.getElementById('selectButton').value == "Ska/Reggae/Dancehall"){
            source.setAttribute("src", "audio/Ska:Reggae:Dancehall/Bob Marley - Natural Mystic.mp3");
            labelaudio.innerHTML = 'Bob Marley - Natural Mystic';
          }else{
            labelaudio.innerHTML = "";
          }
          if (document.getElementById('selectButton').value == "Metal"){
            source.setAttribute("src", "audio/Metal/Metallica Master of Puppets.mp3");
            labelaudio.innerHTML = 'Metallica - Master of Puppets';
          }
          if (document.getElementById('selectButton').value == "Punk"){
            source.setAttribute("src", "audio/Punk/The Clash - London Calling.mp3");
            labelaudio.innerHTML = 'The Clash - London Calling';
          }
          if (document.getElementById('selectButton').value == "Blues"){
            source.setAttribute("src", "audio/Blues/Christian Willisohn - Blues In My Bottle.mp3");
            labelaudio.innerHTML = 'Christian Willisohn - Blues In My Bottle';
          }
          if (document.getElementById('selectButton').value == "Latin"){
            source.setAttribute("src", "audio/Latin/Luis Fonsi - Despacito ft Daddy Yankee.mp3");
            labelaudio.innerHTML = 'Luis Fonsi - Despacito ft Daddy Yankee';
          }
          if (document.getElementById('selectButton').value == "Jazz"){
            source.setAttribute("src", "audio/Jazz/Ray Charles - Georgia On My Mind.mp3");
            labelaudio.innerHTML = 'Ray Charles - Georgia On My Mind';
          }
          if (document.getElementById('selectButton').value == "House/Electronic/Trance"){
            source.setAttribute("src", "audio/House:Electronic:Trance/Daft Punk - One More Time.mp3");
            labelaudio.innerHTML = 'Daft Punk - One More Time';
          }
          if (document.getElementById('selectButton').value == "Folk"){
            source.setAttribute("src", "audio/Folk/The Pogues - If I Should Fall From Grace With God.mp3");
            labelaudio.innerHTML = 'The Pogues - If I Should Fall From Grace With God';
          }
          if (document.getElementById('selectButton').value == "Soul"){
            source.setAttribute("src", "audio/Soul/Aretha Franklin - I Never Loved A Man (The Way I Love You).mp3");
            labelaudio.innerHTML = 'Aretha Franklin - I Never Loved A Man (The Way I Love You)';
          }
          if (document.getElementById('selectButton').value == "R&B"){
            source.setAttribute("src", "audio/R&B/Gnarls Barkley - Crazy.mp3");
            labelaudio.innerHTML = 'Gnarls Barkley - Crazy';
          }
          if (document.getElementById('selectButton').value == "Rock & Roll"){
            source.setAttribute("src", "audio/Rock & Roll/Elvis Presley - That's All Right.mp3");
            labelaudio.innerHTML = "Elvis Presley - That's All Right";
          }
          if (document.getElementById('selectButton').value == "Rock"){
            source.setAttribute("src", "audio/Rock/Led Zeppelin - Stairway To Heaven.mp3");
            labelaudio.innerHTML = 'Led Zeppelin - Stairway To Heaven';
          }
          if (document.getElementById('selectButton').value == "Country"){
            source.setAttribute("src", "audio/Country/Willie Nelson - On The Road Again.mp3");
            labelaudio.innerHTML = 'Willie Nelson - On The Road Again';
          }
          if (document.getElementById('selectButton').value == "Pop"){
            source.setAttribute("src", "audio/Pop/Michael Jackson - Billie Jean.mp3");
            labelaudio.innerHTML = 'Michael Jackson - Billie Jean';
          }
          if(document.getElementById('selectButton').value == "Rap/Hip-Hop"){
            source.setAttribute("src", "audio/Rap:Hip-Hop/Eminem - Lose Yourself.mp3");
            labelaudio.innerHTML = 'Eminem - Lose Yourself';
          }
    })

});
AOS.init();

// Source : https://d3-graph-gallery.com

// Graphique
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
      .text("Place dans le Billboard Hot 100 en %");    


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
          var audiospotify = document.querySelector('.audiospotify');

          if (document.getElementById('selectButton').value == "Ska/Reggae/Dancehall"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/64xslN8DB3jG1tK2l3H1mA?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Ska/Reggae/Dancehall"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Metal"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2MuWTIM3b0YEAskbeeFE1i?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Metal"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Punk"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/124Y9LPRCAz3q2OP0iCvcJ?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Punk"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Blues"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2W8lZ7Jl3HG3sILlXcNyB8?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Blues"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Latin"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/6habFhsOp2NvshLv26DqMb?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Latin"></iframe>';
          }

          if (document.getElementById('selectButton').value == "Jazz"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/47mA6f44zxLtdATOoY7GjN?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Jazz"></iframe>';
          }
          if (document.getElementById('selectButton').value == "House/Electronic/Trance"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0DiWol3AO6WpXZgp0goxAV?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="House/Electronic/Trance"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Folk"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1Z5rTFsClLFgsIGuZ7Ymt2?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Folk"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Soul"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1hES47PrbU8GPTI5A9lsr0?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Soul"></iframe>';
          }
          if (document.getElementById('selectButton').value == "R&B"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1vxw6aYJls2oq3gW0DujAo?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="R&B"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Rock & Roll"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/1l5LxX34FgwqlhvMb7BPXq?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Rock & Roll"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Rock"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/0DANcJuMamcL9NyYkEWWTq?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Rock"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Country"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/2GyH5rvdnfkjzsTFaWrrov?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Country"></iframe>';
          }
          if (document.getElementById('selectButton').value == "Pop"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7J1uxwnxfQLu4APicE5Rnj?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Pop"></iframe>';
          }
          if(document.getElementById('selectButton').value == "Rap/Hip-Hop"){
            audiospotify.innerHTML = '<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7MJQ9Nfxzh8LPZ9e9u68Fq?utm_source=generator&theme=0" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Rap/Hip-Hop"></iframe>';
          }
    })

});
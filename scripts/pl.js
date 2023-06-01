Events.on(ContentInitEvent, e => {
    Vars.content.planet("ereki_clones-erekit").generator = new ErekirPlanetGenerator();
    Vars.content.planet("ereki_clones-erekiu").generator = new ErekirPlanetGenerator();
    Vars.content.planet("ereki_clones-erekiv").generator = new ErekirPlanetGenerator();
    Vars.content.planet("ereki_clones-erekiw").generator = new ErekirPlanetGenerator(); 
    Vars.content.planet("ereki_clones-erekix").generator = new ErekirPlanetGenerator(); 
    Vars.content.planet("ereki_clones-erekiy").generator = new ErekirPlanetGenerator(); 
});

function alt_epg_heightMult(a){var b = new ErekirPlanetGenerator(); b.heightMult =a; return b;}
function alt_epg_heightPow(a){var b = new ErekirPlanetGenerator(); b.heightPow =a; return b;}
function alt_epg_heightScl(a){var b = new ErekirPlanetGenerator(); b.heightScl =a; return b;}
function alt_epg_octaves(a){var b = new ErekirPlanetGenerator(); b.octaves =a; return b;}
function alt_epg_persistence(a){var b = new ErekirPlanetGenerator(); b.persistence =a; return b;}
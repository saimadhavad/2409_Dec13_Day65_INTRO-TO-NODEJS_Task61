import { movieName,movieCast,director,aboutKAPlot } from "./kaMovie.js";
import { gaamiMovieName,gaamiMovieCast,gaamiMovieDirector,aboutGaamimoviePlot } from "./gaamiMovie.js";


console.log("INSIDE server.js");
console.log("------ KA MOVIE DETAILS ------");
console.log(`MOVIE NAME : ${movieName}`);
console.log(`MOVIE CAST : ${movieCast}`);
console.log(`MOVIE DIRECTOR : ${director}`);
aboutKAPlot();
console.log("------ GAAMI MOVIE DETAILS ------");
console.log(`MOVIE NAME : ${gaamiMovieName}`);
console.log(`MOVIE CAST : ${gaamiMovieCast}`);
console.log(`MOVIE DIRECTOR : ${gaamiMovieDirector}`);
aboutGaamimoviePlot();

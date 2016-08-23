define(['modules/app', 'services/imageService'], function (app, service) {

    var imageService;

    describe("Image service specification", function () {

        beforeEach(module("myApp"));
        beforeEach(inject(function (_imageService_) {
            imageService = _imageService_;
        }));


        var mockMovies = { "Search": [{ "Title": "Titanic", "Year": "1997", "imdbID": "tt0120338", "Type": "movie", "Poster": "N/A" }, { "Title": "Titanic II", "Year": "2010", "imdbID": "tt1640571", "Type": "movie", "Poster": "N/A" }, { "Title": "Titanic: The Legend Goes On...", "Year": "2000", "imdbID": "tt0330994", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg" }], "totalResults": "181", "Response": "True" }


        it("Should change img url in two of three movies", function () {
            imageService.changeImageToNotFound(mockMovies, 'N/A', 'http://www.mock.pl');
            var changed = true;
            for (var i = 0; i < mockMovies.Search.length; i++) {
                if (!mockMovies.Search[i].Poster.startsWith("http")) {
                    changed = false;
                    break;
                }
            }
            expect(changed).toBe(true);

        });

       var mockMovies1 = { "Search": [{ "Title": "Titanic", "Year": "1997", "imdbID": "tt0120338", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg" }, { "Title": "Titanic II", "Year": "2010", "imdbID": "tt1640571", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg" }, { "Title": "Titanic: The Legend Goes On...", "Year": "2000", "imdbID": "tt0330994", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg" }], "totalResults": "181", "Response": "True" }


        it("Should not change img url in movies objects", function () {
            imageService.changeImageToNotFound(mockMovies1, 'N/A', 'http://www.mock.pl');
            var changed = false;
            for (var i = 0; i < mockMovies1.Search.length; i++) {
                if (mockMovies1.Search[i].Poster === "http://www.mock.pl") {
                    changed = true;
                    break;
                }
            }
            expect(changed).toBe(false);

        });

        var mockMovies2 = {}
        it("Should do nothing when movies object is empty", function () {

            imageService.changeImageToNotFound(mockMovies2, 'N/A', 'http://www.mock.pl');
        });

        var mockMovies3 = { "Search": [{ "Title": "Titanic", "Year": "1997", "imdbID": "tt0120338", "Type": "movie"}, { "Title": "Titanic: The Legend Goes On...", "Year": "2000", "imdbID": "tt0330994", "Type": "movie", "Poster": "http://ia.media-imdb.com/images/M/MV5BMTg5MjcxODAwMV5BMl5BanBnXkFtZTcwMTk4OTMwMg@@._V1_SX300.jpg" }], "totalResults": "181", "Response": "True" }

        it("Shound not throw an error when one object movie doesn't have Poster property", function () {
            imageService.changeImageToNotFound(mockMovies3, 'N/A', 'http://www.mock.pl');
            var changed = true;
            for (var i = 0; i < mockMovies.Search.length; i++) {
                if (!mockMovies.Search[i].Poster.startsWith("http")) {
                    changed = false;
                    break;
                }
            }
            expect(changed).toBe(true);


        });

    });

});
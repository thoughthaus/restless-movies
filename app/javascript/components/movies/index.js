var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
import { Query } from "react-apollo";
import gql from "graphql-tag";
import * as React from "react";
var MoviesQuery = /** @class */ (function (_super) {
    __extends(MoviesQuery, _super);
    function MoviesQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MoviesQuery;
}(Query));
var Movies = function () { return (React.createElement(MoviesQuery, { query: gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      query movies {\n        movies {\n          id\n          title\n          reviews {\n            rating\n            comment\n          }\n        }\n      }\n    "], ["\n      query movies {\n        movies {\n          id\n          title\n          reviews {\n            rating\n            comment\n          }\n        }\n      }\n    "]))) }, function (_a) {
    var loading = _a.loading, error = _a.error, data = _a.data;
    if (loading)
        return React.createElement("p", null, "Loading...");
    if (error)
        return React.createElement("p", null, "Error :(");
    return data.movies.map(function (_a) {
        var title = _a.title, id = _a.id, reviews = _a.reviews;
        return (React.createElement("div", { key: id },
            React.createElement("h2", null, title),
            reviews.map(function (_a) {
                var rating = _a.rating;
                return (React.createElement("div", null,
                    "Rating: ",
                    rating));
            })));
    });
})); };
export default Movies;
var templateObject_1;
//# sourceMappingURL=index.js.map
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
import ReactPaginate from "react-paginate";
var MoviesQuery = /** @class */ (function (_super) {
    __extends(MoviesQuery, _super);
    function MoviesQuery() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MoviesQuery;
}(Query));
var Movies = /** @class */ (function (_super) {
    __extends(Movies, _super);
    function Movies() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            search: null,
            limit: 5,
            offset: 0
        };
        _this.handlePageClick = function (data, fetchMore) {
            var selected = data.selected;
            var offset = Math.ceil(selected * _this.state.limit);
            _this.setState({ offset: offset }, function () {
                fetchMore({
                    variables: {
                        offset: offset
                    },
                    updateQuery: function (prev, _a) {
                        var fetchMoreResult = _a.fetchMoreResult;
                        if (!fetchMoreResult)
                            return prev;
                        return fetchMoreResult;
                    }
                });
            });
        };
        return _this;
    }
    Movies.prototype.render = function () {
        var _this = this;
        var _a = this.state, search = _a.search, limit = _a.limit, offset = _a.offset;
        return (React.createElement(React.Fragment, null,
            React.createElement("input", { onChange: function (e) { return _this.setState({ search: e.target.value }); } }),
            React.createElement(MoviesQuery, { query: gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n            query movies($search: String, $limit: Int!, $offset: Int!) {\n              movies(search: $search) {\n                totalCount\n                collection(limit: $limit, offset: $offset) {\n                  id\n                  title\n                  reviews {\n                    id\n                    rating\n                    comment\n                  }\n                }\n              }\n            }\n          "], ["\n            query movies($search: String, $limit: Int!, $offset: Int!) {\n              movies(search: $search) {\n                totalCount\n                collection(limit: $limit, offset: $offset) {\n                  id\n                  title\n                  reviews {\n                    id\n                    rating\n                    comment\n                  }\n                }\n              }\n            }\n          "]))), variables: {
                    search: search,
                    limit: limit,
                    offset: offset
                } }, function (_a) {
                var loading = _a.loading, error = _a.error, data = _a.data, fetchMore = _a.fetchMore;
                if (loading)
                    return React.createElement("p", null, "Loading...");
                if (error)
                    return React.createElement("p", null, "Error :(");
                return (React.createElement(React.Fragment, null,
                    data.movies.collection.map(function (_a) {
                        var title = _a.title, id = _a.id, reviews = _a.reviews;
                        return (React.createElement("div", { key: id },
                            React.createElement("h2", null, title),
                            reviews.map(function (_a) {
                                var rating = _a.rating, reviewId = _a.id;
                                return (React.createElement("li", { key: reviewId },
                                    "Rating: ",
                                    rating));
                            })));
                    }),
                    React.createElement(ReactPaginate, { previousLabel: "previous", nextLabel: "next", breakLabel: "...", pageCount: data.movies.totalCount / limit, marginPagesDisplayed: 2, pageRangeDisplayed: 5, onPageChange: function (pageData) {
                            return _this.handlePageClick(pageData, fetchMore);
                        } })));
            })));
    };
    return Movies;
}(React.Component));
export default Movies;
var templateObject_1;
//# sourceMappingURL=index.js.map
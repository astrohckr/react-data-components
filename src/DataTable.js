var React = require('react');
var Table = require('./Table');
var Pagination = require('./Pagination');
var SelectField = require('./SelectField');
var SearchField = require('./SearchField');

var DataMixin = require('./DataMixin');

var DataTable = React.createClass({

  mixins: [ DataMixin ],

  render() {
    var page = this.buildPage();

    return (
      <div className={this.props.className}>
		<SelectField
			id="page-menu"
			label="Page size:"
			value={this.state.pageLength}
			options={this.props.pageLengthOptions}
			onChange={this.onPageLengthChange}
		/>
		<SearchField
			id="search-field"
			label="Search:"
			value={this.state.filterValues.globalSearch}
			onChange={this.onFilter.bind(this, 'globalSearch')}
		/>
		<Pagination
			className="pagination pull-right"
			currentPage={page.currentPage}
			totalPages={page.totalPages}
			onChangePage={this.onChangePage}
		/>
        <Table
          className="table table-bordered"
          dataArray={page.data}
          columns={this.props.columns}
          keys={this.props.keys}
          buildRowOptions={this.props.buildRowOptions}
          sortBy={this.state.sortBy}
          onSort={this.onSort}
        />
      </div>
    );
  },
});

module.exports = DataTable;

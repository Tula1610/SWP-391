import React, { Component } from 'react';
import Select from 'react-select';
import './Content.css';

export default class Content extends Component {
  state = {
    value: []
  };

  optionsData = [
    {
      label: "Bathing",
      value: "Bathing"
    },
    {
      label: "Trim nails",
      value: "Trim nails"
    },
    {
      label: "Dye hair",
      value: "Dye hair"
    },
    {
      label: "Grooming",
      value: "Grooming"
    }
  ];

  handleChange = (selectedOptions) => {
    this.setState({ value: selectedOptions });
  };

  Group = (props) => {
    const {
      Heading,
      getStyles,
      label,
      innerProps,
      headingProps,
      cx,
      theme
    } = props;
    const dailectContainerStyles = {
      paddingTop: '5px'
    };
    return (
      <div aria-label={label} style={getStyles("group", props)} {...innerProps}>
        <Heading theme={theme} getStyles={getStyles} cx={cx} {...headingProps}></Heading>
        <div>{label}</div>
        <div style={dailectContainerStyles}></div>
      </div>
    );
  };

  getOptionStyles = (defaultStyles) => ({
    ...defaultStyles
  });

  Option = (props) => {
    const {
      data,
      getStyles,
      innerRef,
      innerProps,
      isSelected
    } = props;
    const defaultStyles = getStyles("option", props);
    const styles = this.getOptionStyles(defaultStyles);
    return (
      <div {...innerProps} ref={innerRef} style={styles} className="custom-option">
        <input type="checkbox" checked={isSelected} readOnly />
        <label>{data.label}</label>
      </div>
    );
  };

  render() {
    const { value } = this.state;
    const customComponents = {
      Group: this.Group,
      Option: this.Option
    };
    return (
      <div className='content'>
        <div className='container'>
          <div className='container-heading'><h1>Create Combo</h1></div>
          <form>
            <div className='combo'>
              <div className='create-combo'>
                <div className='input-group mb-3'>
                  <div className="input-group-text">Combo Name</div>
                  <input
                    type='text'
                    className='form-control'
                    id='combo-name'
                    placeholder='Enter'
                    required
                  />
                </div>

                <div className='input-group mb-3'>
                  <div className="input-group-text">Service</div>
                  <Select
                    value={value}
                    onChange={this.handleChange}
                    options={this.optionsData}
                    isMulti={true}
                    components={customComponents}
                    hideSelectedOptions={false}
                    closeMenuOnSelect={false}
                    className="custom-select-container"
                    classNamePrefix="custom-select"
                  />
                </div>

                <div className='input-group mb-3'>
                  <div className="input-group-text">Price</div>
                  <input
                    type='text'
                    className='form-control'
                    id='price'
                    placeholder='Enter'
                    required
                  />
                </div>

                <div className='input-group mb-3'>
                  <div className="input-group-text">Start date</div>
                  <input
                    type='text'
                    className='form-control'
                    id='start-date'
                    placeholder='Enter'
                    required
                  />
                </div>

                <div className='input-group mb-3'>
                  <div className="input-group-text">End date</div>
                  <input
                    type='text'
                    className='form-control'
                    id='end-date'
                    placeholder='Enter'
                    required
                  />
                </div>
              </div>
            </div>

            <button className='btn btn-success' type='submit'>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

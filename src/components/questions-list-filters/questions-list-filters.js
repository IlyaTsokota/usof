import React, {memo, useEffect, useState} from "react";
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import {fetchDataPromise} from "Actions/utills/fetch-data";
import {withUsofService} from "../hoc";
import './questions-list-filters.scss';


const QuestionsListFilters = memo(({ usofService, sorting, setSorting, filters, setFilters }) => {
    const [categories, setCategories] = useState(null);

    useEffect(() => {
        fetchDataPromise({
            service: usofService.getCategories,
            data: null,
        }).then((response) => {
            setCategories(response.data);
        });
    }, [usofService]);

    const setFilterCategories = ({ target }, id) => {
        setFilters((state) => {
            const { checked } = target;
            const stateCategories = state.categories || [];
            let categories;

            if (checked) {
                categories = [...stateCategories, id];
            } else {
                const index = stateCategories.findIndex((categoryId) => id === categoryId);
                categories = [...stateCategories.slice(0, index), ...stateCategories.slice(index + 1)];
            }

            return {
                ...state,
                categories,
            };
        });
    };

    console.log(filters);

    return (
      <div className='questions-list-filters'>
          <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Sort By</InputLabel>
              <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={sorting}
                  label="Sort By"
                  onChange={({ target }) => {
                      setSorting(target.value);
                  }}
              >
                  <MenuItem value={false}>Default</MenuItem>
                  <MenuItem value={true}>Most Popular</MenuItem>
              </Select>
          </FormControl>
          {
              categories && (
                  <FormControl fullWidth component="fieldset" variant="standard" style={{marginTop: "15px"}}>
                      <FormLabel component="legend">Categories</FormLabel>
                      <FormGroup>
                          {
                              categories.map(({ name, id }) => {
                                  const checked = filters.categories && filters.categories.findIndex((val) => val === id) !== -1;

                                  return (
                                      <FormControlLabel key={id} value={id}
                                          control={
                                              <Checkbox checked={checked || false} onChange={(e) => setFilterCategories(e, id)} name={"filter_" + id}/>
                                          }
                                          label={name}
                                      />
                                  );
                              })
                          }
                      </FormGroup>
                  </FormControl>
              )
          }
      </div>
    );
});

export default withUsofService()(QuestionsListFilters);
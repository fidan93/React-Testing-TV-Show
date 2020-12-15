import React  from 'react';
import {render,screen, waitFor} from '@testing-library/react';
import App from './App';
import {fetchShow as mockFetchShow} from './api/fetchShow'
import userEvent from '@testing-library/user-event';

jest.mock('./api/fetchShow');

test('renders without errors',async ()=>{
    mockFetchShow.mockResolvedValueOnce({
        data: {
            name: "Stranger Things",
            summary: "<p>gyikjkjb</p>",
            image:{original:"http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"}},
            _embedded:{
                episodes:[
                {id:1,
                image:{medium:"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"},
                name:"chapter 1",
                season: 1,
                number:1,
                summary: '<p>Hi</p>',
                runtime:60
                        }]
                    }
    });
    render(<App />)

});

test('fetch data',async ()=>{
    mockFetchShow.mockResolvedValueOnce({
        data: {
            name: "Stranger Things",
            summary: "<p>gyikjkjb</p>",
            image:{original:"http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"}},
            _embedded:{
                episodes:[
                {id:1,
                image:{medium:"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"},
                name:"chapter 1",
                season: 1,
                number:1,
                summary: '<p>Hi</p>',
                runtime:60
                        }]
                    }
    });
    render(<App />);

    await waitFor(()=>{
       const show = screen.getByText("gyikjkjb");
      expect(show).toBeInTheDocument()
    })

})
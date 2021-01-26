import React from 'react';
import {screen,render, waitFor } from '@testing-library/react';
import App from './App';

import {fetchShow as mockFetchShow } from './api/fetchShow'
import userEvent from '@testing-library/user-event';
jest.mock('./api/fetchShow');



test('renders without errors',async () => {
   mockFetchShow.mockResolvedValueOnce({
      data:{
        name: "Stranger Things",
        summary: "<p>gyikjkjb</p>",
        image:{original:"http://static.tvmaze.com/uploads/images/original_untouched/200/501942.jpg"},
          _embedded:{
            episodes:[{
            id: 553946,
            image: {medium: "http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"},
            name: "Chapter One: The Vanishing of Will Byers",
            number: 1,
            runtime: 60,
            season: 1,
            summary: "<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>"
             }]
            }
           }
        })
   render(<App />)

   await waitFor(() => {
       expect(screen.getByText(/gyikjkjb/i)).toBeInTheDocument()
   })
   const select = screen.getByText(/select a season/i)
   userEvent.click(select);

  const season = screen.getByText(/season 1/i)
  userEvent.click(season);
  
  const title = await screen.findByText(/Chapter One: The Vanishing of Will Byers/i)
  expect(title).toBeInTheDocument();
})

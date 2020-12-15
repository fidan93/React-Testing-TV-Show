import React from 'react'

import {render,screen} from '@testing-library/react';

import Episodes from './Episodes';

test("test if renders", ()=>{
   render( <Episodes episodes={[]}/> )
})

test('render episodes',()=>{

    const {rerender} = render(<Episodes episodes={[]}/>);

    let episodeObjects = screen.queryAllByTestId(/episode/i);
    expect(episodeObjects).toHaveLength(0);

    const episodes = [
         {  id:1,
            image:{medium:"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"},
            name:"chapter 1",
            season: 1,
            number:1,
            summary: '<p>Hi</p>',
            runtime:60 },

            {  id:2,
                image:{medium:"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"},
                name:"chapter 2",
                season: 2,
                number:2,
                summary: '<p>Hello</p>',
                runtime:69 }
    ]

    rerender(<Episodes episodes={episodes}/>);
    
    episodeObjects = screen.queryAllByTestId(/episode/i)
    expect(episodeObjects).toHaveLength(2);

})
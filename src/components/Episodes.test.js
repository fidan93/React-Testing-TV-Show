import React from 'react';
import {screen,render} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Episodes from './Episodes';

const episodes = [
    {id:1,
    image:{medium:"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"},
    name: "Chapter One: The Vanishing of Will Byers",
    season:1,
    number:1,
    summary:"<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    runtime: 60
},
{   id:2,
    image:{medium:"http://static.tvmaze.com/uploads/images/medium_landscape/67/168918.jpg"},
    name: "Chapter Two: The Vanishing of Will Byers",
    season:1,
    number:2,
    summary:"<p>A young boy mysteriously disappears, and his panicked mother demands that the police find him. Meanwhile, the boy's friends conduct their own search, and meet a mysterious girl in the forest.</p>",
    runtime: 60
},

]

test('renders',() => {
    const {rerender} = render(<Episodes episodes = {[]}/>)
     let episodesObj = screen.queryAllByTestId('episode');
      expect(episodesObj).toHaveLength(0)

    rerender(<Episodes episodes = {episodes} />);
    episodesObj = screen.queryAllByTestId('episode');
    expect(episodesObj).toHaveLength(2)
})
import React from 'react';
import './QuestionAnswer.css';

const QuestionAnswer = () => {
    return (
        <div className='container'>
            <div>
            <h2>1.How React Works?</h2>
            <p>React is a JavaScript library for building user interfaces. It uses a declarative paradigm that makes it easier to reason about your application and aims to be both efficient and flexible. React will efficiently update and render just the right component when your data changes.A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state. React helps to view make your code more predictable and easier to debug. It is a component based and build encapsulated components that manage their own state, then compose them to make complex UIs. </p>
            </div>
            <h2>2.What are the difference between useState and Props?</h2>
            <div className='difference-container'>
                <div>
                <h4>Props:</h4>
                <p>
                   (a) props are immutable.<br/>
                   (b) props make components reusable.<br/>
                   (c) props are readable only. <br/>
                   (d) props allow you to send data another component .
                </p>
                </div>
                <div>
                <h4>useState:</h4>
                <p>
                    (a) state is mutable.<br/>
                    (b) state cannot make components reusable. <br/>
                    (c) state changes can be asynchronous.<br/>
                    (d) The state is a local data storage that is local<br/> to the component only and cannot be passed to other components. 
                </p>
                </div>
            </div>
            <div>
                <h2>How does useState Works?</h2>
                <p>useState is a Hook which is a special function that takes the initial
                state as an argument and returns an array of two entries. You create a
                functional component and throw some React hook at it that tracks
                state, can also update it, and it just works.States forms the heart
                and soul which makes React a go-to library for ease of use and smooth
                 user experience. With function components, there comes a hook known as
                useState which enables you to define an internal state of a functional
                component.
                </p>
            </div>
        </div>
    );
};

export default QuestionAnswer;
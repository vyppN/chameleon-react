import React, { Component } from "react";

import Chameleon from "@vyppn/chameleon";

export default class App extends Component {
  state = {
    colors: null,
    imageUrl:
      "https://images.unsplash.com/photo-1568495824441-a2052db83f64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
  };

  async componentDidMount() {
    const res = await Chameleon(this.state.imageUrl);
    this.setState({ colors: res.result });
  }

  getColor = async url => {
    const res = await Chameleon(url);
    this.setState({ colors: res.result });
  };

  setImage = event => {
    this.setState({ imageUrl: event.target.value }, () => {
      this.getColor(this.state.imageUrl);
    });
  };

  render() {
    if (!this.state.colors) return null;
    return (
      <div style={{ display: "flex",padding:20 }}>
        <div style={{ padding: 20 }}>
          <h3>Image</h3>
          <img src={this.state.imageUrl} style={{ maxWidth: 500,border:'1px solid #888' }} />
        </div>
        <div style={{ padding: 20, marginTop: 0 }}>
        <h1><span style={{color:`#${this.state.colors[0].color}`}}>Chameleon React</span> by vyppN</h1>
          <div style={{ display: "flex", alignItems: "center" }}>
            <input
              type="text"
              style={{ height: 30, width: 400, fontSize: 14 }}
              value={this.state.imageUrl}
              onChange={this.setImage}
            />
          </div>
          <h4>Dominant Colors</h4>
          <pre>
            <ul>
              {this.state.colors.map((color, index) => (
                <li
                  key={index.toString()}
                  style={{ color: `#${color.color}`, fontSize: 18 }}
                >
                  #{color.color}: {Math.round(color.percent * 100)}%
                </li>
              ))}
            </ul>
          </pre>
          <div
            style={{
              width: 500,
              height: 50,
              backgroundColor: `#${this.state.colors[0].color}`,
              display: "flex",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <div style={{ color: `#${this.state.colors[4].color}` }}>
              Recommended Color
            </div>
          </div>

          <div style={{ display: "flex", width: 500, height: 60 }}>
            {this.state.colors.map((color, index) => (
              <div
                key={index.toString()}
                style={{
                  display:'flex',
                  justifyContent:'center',
                  alignItems:'center',
                  width: 100,
                  height: 60,
                  backgroundColor: `#${color.color}`
                }}
              >
                <pre style={{fontSize:16,fontWeight:'bold'}}>#{color.color.toString().toUpperCase()}</pre>
              </div>
            ))}
          </div>
          <pre style={{marginLeft:-80}}>
          {`
          MIT License

          Copyright (c) 2019 by vyppN

          Permission is hereby granted, free of charge, to any person obtaining a copy
          of this software and associated documentation files (the "Software"), to deal
          in the Software without restriction, including without limitation the rights
          to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
          copies of the Software, and to permit persons to whom the Software is
          furnished to do so, subject to the following conditions:

          The above copyright notice and this permission notice shall be included in all
          copies or substantial portions of the Software.

          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
          IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
          FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
          AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
          LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
          OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
          SOFTWARE.`}
          </pre>
        </div>
      </div>
    );
  }
}

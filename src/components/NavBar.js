import React, { Component } from 'react'
import duck from './duck.png'


export class NavBar extends Component {
  render() {
    return (
      <div>
        
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse " id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2  ">
                <li className="nav-item"><a class="navbar-brand" href="/"><img src={duck} alt="NewsBytes" width="50" height="40"/></a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/entertainment">Entertainment</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/business">Business</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/health">Health</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/science">Science</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/sports">Sports</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/technology">Technology</a></li>
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="/contact">Contact</a></li>
              </ul>
              <form className="d-flex" role="search">                
              <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Login</button>
              <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                ...
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" class="btn btn-primary">Understood</button>
                            </div>
                        </div>
                    </div>
                </div>
              </form>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default NavBar

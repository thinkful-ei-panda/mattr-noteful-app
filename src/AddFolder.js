import React, { Component } from 'react';
import ErrorBoundary from './ErrorBoundary'

export default class AddFolder extends Component {
    constructor(props){
        super(props);
        this.state={
            folderName: {
                value: '',
                touched: false
            }
        }
    }

    updateFolderName(event){
        this.setState({folderName: {value: '', touched: true}})

    }

    validateFolderName() {
        const FolderName = this.state.folderName.value.trim();
        if (FolderName.length === 0) {
          return 'Folder Name is required';
        } else if (FolderName.length < 3) {
          return 'Name must be at least 3 characters long';
        }
      }

    render() {
        const FolderNameError = this.validateFolderName();
        return (
            <div>
                <form className="add-folder-form" onSubmit={e => this.handleAddFolderSubmit(e)}>
                <h2>Add Folder</h2>
                <div className="add-folder-hint">* required field</div>  
                <div className="form-group">
                <label htmlFor="folder-name">Folder Name *</label>
                <input type="text" className="folder-name" name="folder-name" id="folder-name" onChange={e => this.props.updateFolderName(e.target.value)} defaultValue="folder name" />
                <ErrorBoundary message={FolderNameError}/>
                {this.state.folderName.touched && <ErrorBoundary message={this.validateFolderName} />}
                </div>
                </form>
            </div>
        )
    }
}

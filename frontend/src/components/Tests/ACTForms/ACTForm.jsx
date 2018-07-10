import React, {Component} from 'react';
import { CONSTANTS } from '../../../assets/devMock/devMock';

class ACTForm extends Component {
    render() {
        return (
            <section>
                <h3 class="major">ACT</h3>
                <form method="post" action="#">
                    <div class="fields">
                        <div class="field">
                            <label for="test-version">Select Test Verion</label>
                            <select name="demo-category" id="demo-category">
                                <option value="">-</option>
                                <option value="1">61C</option>
                                <option value="2">71F</option>
                                <option value="3">73B</option>
                                <option value="4">74B</option>
                            </select>
                        </div>
                        
                    </div>
                </form>
            </section>
        );
    }
}

export default ACTForm;
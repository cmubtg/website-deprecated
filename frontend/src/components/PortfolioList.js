import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class PortfolioList extends React.Component {
    state = {
      portfolios: []
    }
    componentDidMount = async()=> {
        try{
            const response = await axios.get(`http://localhost:1337/portfolios`)
            this.setState({ portfolios: response.data });
        } catch (error) {
            this.setState({ error })
        }
      }

      render() {
          const { error, portfolio } = this.state;

          if (error) {
            return <div>An error occured: {error.message}</div>;
          }

        return (
          <ul>
            { this.state.portfolios.map(portfolio => (
            <li key={portfolio.id}>
                <Link to={"members/"+portfolio.id}>{portfolio.firstname} {portfolio.lastname}</Link>
            </li>
            ))}
          </ul>
        )
      }
}
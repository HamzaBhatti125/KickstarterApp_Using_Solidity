import React, { Component } from "react";
import { Card, Grid } from "semantic-ui-react";
import Layout from "../../components/Layout";
import Campaign from "../../ethereum/campaign";
import web3 from "../../ethereum/web3";
import ContributeFrom from "../../components/ContributeFrom";

class CampaignShow extends Component {
  static async getInitialProps(props) {
    //console.log(props.query.address); //actual address of the campaign coming from url
    const campaign = Campaign(props.query.address);
    const summary = await campaign.methods.getSummary().call();

    return {
      minContribution: summary[0],
      balance: summary[1],
      requestsCount: summary[2],
      approversCount: summary[3],
      manager: summary[4],
    };
  }

  renderCards() {
    const { minContribution, balance, requestsCount, approversCount, manager } =
      this.props;
    const items = [
      {
        header: manager,
        meta: "Address of Manager",
        description:
          "The manager created this campaign and can create request to withdraw money",
        style: { overflowWrap: "break-word" },
      },
      {
        header: minContribution,
        meta: "Minimum Contribution (wei)",
        description:
          "You must contribute atleast this much wei to become contributor",
        style: { overflowWrap: "break-word" },
      },
      {
        header: requestsCount,
        meta: "Number of requests",
        description: "A request try to withdraw money from the contract",
        style: { overflowWrap: "break-word" },
      },
      {
        header: approversCount,
        meta: "Number of Approvers",
        description:
          "Number of approvers who have already contributed to this campaign",
        style: { overflowWrap: "break-word" },
      },
      {
        header: web3.utils.fromWei(balance, "ether"),
        meta: "Campaign Balance (ether)",
        description:
          "The balance is how much money this campaign has left to spend",
        style: { overflowWrap: "break-word" },
      },
    ];

    return <Card.Group items={items} />;
  }

  render() {
    return (
      <Layout>
        <h3>Campaign Show</h3>
        <Grid>
          <Grid.Column width={12}>{this.renderCards()}</Grid.Column>
          <Grid.Column width={4}>
            <ContributeFrom />
          </Grid.Column>
        </Grid>
      </Layout>
    );
  }
}

export default CampaignShow;

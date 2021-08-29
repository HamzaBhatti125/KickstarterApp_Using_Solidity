import web3 from "./web3";

const address = "0xdb9967d83f4d14a3b8609d073bc29eeaf9cebcb6"
const abi = [
	{
		"constant": false,
		"inputs": [
			{
				"name": "minimum",
				"type": "uint256"
			}
		],
		"name": "createCampaign",
		"outputs": [],
		"payable": false,
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [
			{
				"name": "",
				"type": "uint256"
			}
		],
		"name": "deployedCampaigns",
		"outputs": [
			{
				"name": "",
				"type": "address"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	},
	{
		"constant": true,
		"inputs": [],
		"name": "getDeployedCampaigns",
		"outputs": [
			{
				"name": "",
				"type": "address[]"
			}
		],
		"payable": false,
		"stateMutability": "view",
		"type": "function"
	}
]

export default new web3.eth.Contract(abi, address);

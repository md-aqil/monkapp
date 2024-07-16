const TOKEN_ABI = [
	{
		inputs: [],
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "user",
				type: "address",
			},
			{
				indexed: false,
				internalType: "uint256",
				name: "amount",
				type: "uint256",
			},
		],
		name: "Bought",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "uint8",
				name: "version",
				type: "uint8",
			},
		],
		name: "Initialized",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "previousOwner",
				type: "address",
			},
			{
				indexed: true,
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{
		inputs: [],
		name: "BUSD",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_referrer",
				type: "address",
			},
			{
				internalType: "uint256",
				name: "_amount",
				type: "uint256",
			},
		],
		name: "buy",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_tokenAddress",
				type: "address",
			},
		],
		name: "initialize",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "owner",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		name: "referralStore",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [],
		name: "renounceOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "tokenAddress",
		outputs: [
			{
				internalType: "address",
				name: "",
				type: "address",
			},
		],
		stateMutability: "view",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newOwner",
				type: "address",
			},
		],
		name: "transferOwnership",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_transferTo",
				type: "address",
			},
		],
		name: "withdrawBNB",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "_tokenAddress",
				type: "address",
			},
			{
				internalType: "address",
				name: "_transferTo",
				type: "address",
			},
		],
		name: "withdrawToken",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
];
export const BUSD_ABI = [
	{
		constant: false,
		inputs: [],
		name: "disregardProposeOwner",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "name",
		outputs: [{ name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "_spender", type: "address" },
			{ name: "_value", type: "uint256" },
		],
		name: "approve",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "assetProtectionRole",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "totalSupply",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "r", type: "bytes32[]" },
			{ name: "s", type: "bytes32[]" },
			{ name: "v", type: "uint8[]" },
			{ name: "to", type: "address[]" },
			{ name: "value", type: "uint256[]" },
			{ name: "fee", type: "uint256[]" },
			{ name: "seq", type: "uint256[]" },
			{ name: "deadline", type: "uint256[]" },
		],
		name: "betaDelegatedTransferBatch",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "sig", type: "bytes" },
			{ name: "to", type: "address" },
			{ name: "value", type: "uint256" },
			{ name: "fee", type: "uint256" },
			{ name: "seq", type: "uint256" },
			{ name: "deadline", type: "uint256" },
		],
		name: "betaDelegatedTransfer",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "_from", type: "address" },
			{ name: "_to", type: "address" },
			{ name: "_value", type: "uint256" },
		],
		name: "transferFrom",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "initializeDomainSeparator",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "decimals",
		outputs: [{ name: "", type: "uint8" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "unpause",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_addr", type: "address" }],
		name: "unfreeze",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "claimOwnership",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_newSupplyController", type: "address" }],
		name: "setSupplyController",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "paused",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ name: "_addr", type: "address" }],
		name: "balanceOf",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "initialize",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "pause",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "getOwner",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ name: "target", type: "address" }],
		name: "nextSeqOf",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_newAssetProtectionRole", type: "address" }],
		name: "setAssetProtectionRole",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_addr", type: "address" }],
		name: "freeze",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "owner",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "symbol",
		outputs: [{ name: "", type: "string" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_newWhitelister", type: "address" }],
		name: "setBetaDelegateWhitelister",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_value", type: "uint256" }],
		name: "decreaseSupply",
		outputs: [{ name: "success", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ name: "_addr", type: "address" }],
		name: "isWhitelistedBetaDelegate",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [
			{ name: "_to", type: "address" },
			{ name: "_value", type: "uint256" },
		],
		name: "transfer",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_addr", type: "address" }],
		name: "whitelistBetaDelegate",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_proposedOwner", type: "address" }],
		name: "proposeOwner",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_value", type: "uint256" }],
		name: "increaseSupply",
		outputs: [{ name: "success", type: "bool" }],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "betaDelegateWhitelister",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "proposedOwner",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_addr", type: "address" }],
		name: "unwhitelistBetaDelegate",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [
			{ name: "_owner", type: "address" },
			{ name: "_spender", type: "address" },
		],
		name: "allowance",
		outputs: [{ name: "", type: "uint256" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [{ name: "_addr", type: "address" }],
		name: "wipeFrozenAddress",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "EIP712_DOMAIN_HASH",
		outputs: [{ name: "", type: "bytes32" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [{ name: "_addr", type: "address" }],
		name: "isFrozen",
		outputs: [{ name: "", type: "bool" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: true,
		inputs: [],
		name: "supplyController",
		outputs: [{ name: "", type: "address" }],
		payable: false,
		stateMutability: "view",
		type: "function",
	},
	{
		constant: false,
		inputs: [],
		name: "reclaimBUSD",
		outputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		payable: false,
		stateMutability: "nonpayable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "from", type: "address" },
			{ indexed: true, name: "to", type: "address" },
			{ indexed: false, name: "value", type: "uint256" },
		],
		name: "Transfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "owner", type: "address" },
			{ indexed: true, name: "spender", type: "address" },
			{ indexed: false, name: "value", type: "uint256" },
		],
		name: "Approval",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "currentOwner", type: "address" },
			{ indexed: true, name: "proposedOwner", type: "address" },
		],
		name: "OwnershipTransferProposed",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: true, name: "oldProposedOwner", type: "address" }],
		name: "OwnershipTransferDisregarded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "oldOwner", type: "address" },
			{ indexed: true, name: "newOwner", type: "address" },
		],
		name: "OwnershipTransferred",
		type: "event",
	},
	{ anonymous: false, inputs: [], name: "Pause", type: "event" },
	{ anonymous: false, inputs: [], name: "Unpause", type: "event" },
	{
		anonymous: false,
		inputs: [{ indexed: true, name: "addr", type: "address" }],
		name: "AddressFrozen",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: true, name: "addr", type: "address" }],
		name: "AddressUnfrozen",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: true, name: "addr", type: "address" }],
		name: "FrozenAddressWiped",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "oldAssetProtectionRole", type: "address" },
			{ indexed: true, name: "newAssetProtectionRole", type: "address" },
		],
		name: "AssetProtectionRoleSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "to", type: "address" },
			{ indexed: false, name: "value", type: "uint256" },
		],
		name: "SupplyIncreased",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "from", type: "address" },
			{ indexed: false, name: "value", type: "uint256" },
		],
		name: "SupplyDecreased",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "oldSupplyController", type: "address" },
			{ indexed: true, name: "newSupplyController", type: "address" },
		],
		name: "SupplyControllerSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "from", type: "address" },
			{ indexed: true, name: "to", type: "address" },
			{ indexed: false, name: "value", type: "uint256" },
			{ indexed: false, name: "seq", type: "uint256" },
			{ indexed: false, name: "fee", type: "uint256" },
		],
		name: "BetaDelegatedTransfer",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{ indexed: true, name: "oldWhitelister", type: "address" },
			{ indexed: true, name: "newWhitelister", type: "address" },
		],
		name: "BetaDelegateWhitelisterSet",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: true, name: "newDelegate", type: "address" }],
		name: "BetaDelegateWhitelisted",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [{ indexed: true, name: "oldDelegate", type: "address" }],
		name: "BetaDelegateUnwhitelisted",
		type: "event",
	},
];
export const BUSD_ADDRESS = "0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56";
export const PRIVATE_SALE_ADDRESS = "0x877a209C9541C244a2c27A3dBdA774114260c938";
export const REFERRAL_ADDRESS = "0x0000000000000000000000000000000000000000";
export const TEST_CHAIN_ID = 97
export const MAIN_CHAIN_ID = 56

const PRIVATE_SALE_ADDRESS_TEST = "0x157657c8a45b1d2b4319e81d9053536691a7e2a0";
const BUSD_ADDRESS_TEST = "0x63f1E5fCEd1555a203D6397cE34f0FA7EB6a8528";

const BUSD_ABI_TEST = [
	{
		inputs: [
			{ internalType: "address", name: "_logic", type: "address" },
			{ internalType: "address", name: "admin_", type: "address" },
			{ internalType: "bytes", name: "_data", type: "bytes" },
		],
		stateMutability: "payable",
		type: "constructor",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: false,
				internalType: "address",
				name: "previousAdmin",
				type: "address",
			},
			{
				indexed: false,
				internalType: "address",
				name: "newAdmin",
				type: "address",
			},
		],
		name: "AdminChanged",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "beacon",
				type: "address",
			},
		],
		name: "BeaconUpgraded",
		type: "event",
	},
	{
		anonymous: false,
		inputs: [
			{
				indexed: true,
				internalType: "address",
				name: "implementation",
				type: "address",
			},
		],
		name: "Upgraded",
		type: "event",
	},
	{ stateMutability: "payable", type: "fallback" },
	{
		inputs: [],
		name: "admin",
		outputs: [{ internalType: "address", name: "admin_", type: "address" }],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{ internalType: "address", name: "newAdmin", type: "address" },
		],
		name: "changeAdmin",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [],
		name: "implementation",
		outputs: [
			{
				internalType: "address",
				name: "implementation_",
				type: "address",
			},
		],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address",
			},
		],
		name: "upgradeTo",
		outputs: [],
		stateMutability: "nonpayable",
		type: "function",
	},
	{
		inputs: [
			{
				internalType: "address",
				name: "newImplementation",
				type: "address",
			},
			{ internalType: "bytes", name: "data", type: "bytes" },
		],
		name: "upgradeToAndCall",
		outputs: [],
		stateMutability: "payable",
		type: "function",
	},
	{ stateMutability: "payable", type: "receive" },
];

 export const getBusdABI = (chainId='')=>{
	// if(chainId==MAIN_CHAIN_ID) return BUSD_ABI
	return BUSD_ABI_TEST
}

 export const getBusdToken = (chainId='')=>{
	// if(chainId==MAIN_CHAIN_ID) return BUSD_ADDRESS
	return BUSD_ADDRESS_TEST
}

 export const getPrivateSaleABI = (chainId='')=>{
	// if(chainId==MAIN_CHAIN_ID) return TOKEN_ABI
	return TOKEN_ABI
}

 export const getPrivateSaleToken = (chainId='')=>{
	return '0x0227587AC1E0A153e4B71aD81f398CC31e8B2a7e'

	// return '0x88B127E5d112ED2D95b31d65De0a8f5EB36761c2'

	// if(chainId==MAIN_CHAIN_ID) return PRIVATE_SALE_ADDRESS
	
	return PRIVATE_SALE_ADDRESS_TEST
}
export const VEYFI_OPTIONS_ABI = [
	{
		name: 'Killed',
		inputs: [{name: 'yfi_recovered', type: 'uint256', indexed: false}],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'Sweep',
		inputs: [
			{name: 'token', type: 'address', indexed: true},
			{name: 'amount', type: 'uint256', indexed: false}
		],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'PendingOwnershipTransfer',
		inputs: [
			{name: 'previous_owner', type: 'address', indexed: true},
			{name: 'pending_owner', type: 'address', indexed: true}
		],
		anonymous: false,
		type: 'event'
	},
	{
		name: 'OwnershipTransferred',
		inputs: [
			{name: 'previous_owner', type: 'address', indexed: true},
			{name: 'new_owner', type: 'address', indexed: true}
		],
		anonymous: false,
		type: 'event'
	},
	{name: 'SetPayee', inputs: [{name: 'payee', type: 'address', indexed: true}], anonymous: false, type: 'event'},
	{
		stateMutability: 'nonpayable',
		type: 'constructor',
		inputs: [
			{name: 'yfi', type: 'address'},
			{name: 'd_yfi', type: 'address'},
			{name: 've_yfi', type: 'address'},
			{name: 'owner', type: 'address'},
			{name: 'price_feed', type: 'address'},
			{name: 'curve_pool', type: 'address'},
			{name: 'scaling_factor', type: 'uint256'}
		],
		outputs: []
	},
	{
		stateMutability: 'payable',
		type: 'function',
		name: 'redeem',
		inputs: [{name: 'amount', type: 'uint256'}],
		outputs: [{name: '', type: 'uint256'}]
	},
	{
		stateMutability: 'payable',
		type: 'function',
		name: 'redeem',
		inputs: [
			{name: 'amount', type: 'uint256'},
			{name: 'recipient', type: 'address'}
		],
		outputs: [{name: '', type: 'uint256'}]
	},
	{stateMutability: 'view', type: 'function', name: 'discount', inputs: [], outputs: [{name: '', type: 'uint256'}]},
	{
		stateMutability: 'view',
		type: 'function',
		name: 'eth_required',
		inputs: [{name: 'amount', type: 'uint256'}],
		outputs: [{name: '', type: 'uint256'}]
	},
	{
		stateMutability: 'view',
		type: 'function',
		name: 'get_latest_price',
		inputs: [],
		outputs: [{name: '', type: 'uint256'}]
	},
	{
		stateMutability: 'view',
		type: 'function',
		name: 'scaling_factor',
		inputs: [],
		outputs: [{name: '', type: 'uint256'}]
	},
	{
		stateMutability: 'view',
		type: 'function',
		name: 'scaling_factor_ramp',
		inputs: [],
		outputs: [
			{name: '', type: 'uint256'},
			{name: '', type: 'uint256'},
			{name: '', type: 'uint256'},
			{name: '', type: 'uint256'}
		]
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		name: 'set_payee',
		inputs: [{name: 'new_payee', type: 'address'}],
		outputs: []
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		name: 'start_ramp',
		inputs: [{name: 'new', type: 'uint256'}],
		outputs: []
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		name: 'start_ramp',
		inputs: [
			{name: 'new', type: 'uint256'},
			{name: 'duration', type: 'uint256'}
		],
		outputs: []
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		name: 'start_ramp',
		inputs: [
			{name: 'new', type: 'uint256'},
			{name: 'duration', type: 'uint256'},
			{name: 'start', type: 'uint256'}
		],
		outputs: []
	},
	{stateMutability: 'nonpayable', type: 'function', name: 'stop_ramp', inputs: [], outputs: []},
	{stateMutability: 'nonpayable', type: 'function', name: 'kill', inputs: [], outputs: []},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		name: 'sweep',
		inputs: [{name: 'token', type: 'address'}],
		outputs: [{name: '', type: 'uint256'}]
	},
	{
		stateMutability: 'nonpayable',
		type: 'function',
		name: 'transfer_ownership',
		inputs: [{name: 'new_owner', type: 'address'}],
		outputs: []
	},
	{stateMutability: 'nonpayable', type: 'function', name: 'accept_ownership', inputs: [], outputs: []},
	{stateMutability: 'view', type: 'function', name: 'owner', inputs: [], outputs: [{name: '', type: 'address'}]},
	{
		stateMutability: 'view',
		type: 'function',
		name: 'pending_owner',
		inputs: [],
		outputs: [{name: '', type: 'address'}]
	},
	{stateMutability: 'view', type: 'function', name: 'killed', inputs: [], outputs: [{name: '', type: 'bool'}]},
	{stateMutability: 'view', type: 'function', name: 'payee', inputs: [], outputs: [{name: '', type: 'address'}]}
] as const;

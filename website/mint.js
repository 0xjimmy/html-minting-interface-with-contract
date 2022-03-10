const abi = [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "maxSupply",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "privatePriceInWei",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "publicPriceInWei",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxPrivateMint",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "maxPublicMint",
          "type": "uint256"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "inputs": [],
      "name": "ApprovalCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApprovalToCurrentOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "ApproveToCaller",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "AuxQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "BalanceQueryForZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "MintZeroQuantity",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "OwnerQueryForNonexistentToken",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferCallerNotOwnerNorApproved",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferFromIncorrectOwner",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToNonERC721ReceiverImplementer",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "TransferToZeroAddress",
      "type": "error"
    },
    {
      "inputs": [],
      "name": "URIQueryForNonexistentToken",
      "type": "error"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "approved",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "ApprovalForAll",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "MAX_SUPPLY",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "newSupply",
          "type": "uint256"
        }
      ],
      "name": "burnSupply",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "getApproved",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "_address",
          "type": "address"
        }
      ],
      "name": "getPrivateMinted",
      "outputs": [
        {
          "internalType": "uint64",
          "name": "",
          "type": "uint64"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        }
      ],
      "name": "isApprovedForAll",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxPrivateMints",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "maxPublicMints",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "merkleRoot",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "ownerOf",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint64",
          "name": "amount",
          "type": "uint64"
        },
        {
          "internalType": "bytes32[]",
          "name": "proof",
          "type": "bytes32[]"
        },
        {
          "internalType": "bytes32",
          "name": "leaf",
          "type": "bytes32"
        }
      ],
      "name": "privateMint",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "privatePrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "publicPrice",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "reserveAndStart",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        },
        {
          "internalType": "bytes",
          "name": "_data",
          "type": "bytes"
        }
      ],
      "name": "safeTransferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "root",
          "type": "bytes32"
        }
      ],
      "name": "setAllowListMerkleRoot",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "operator",
          "type": "address"
        },
        {
          "internalType": "bool",
          "name": "approved",
          "type": "bool"
        }
      ],
      "name": "setApprovalForAll",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "baseURI",
          "type": "string"
        }
      ],
      "name": "setBaseURI",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_maxPublicMints",
          "type": "uint256"
        }
      ],
      "name": "setMaxPublicMints",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "setPrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_price",
          "type": "uint256"
        }
      ],
      "name": "setPrivatePrice",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startPrivateSale",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "startPublicSale",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes4",
          "name": "interfaceId",
          "type": "bytes4"
        }
      ],
      "name": "supportsInterface",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "togglePublicSale",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "tokenURI",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "tokenId",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "withdraw",
      "outputs": [],
      "stateMutability": "payable",
      "type": "function"
    }
  ]

const Web3Modal = window.Web3Modal.default
const WalletConnectProvider = window.WalletConnectProvider.default

const providerOptions = {
  walletconnect: {
    package: WalletConnectProvider,
    options: { infuraId: "5db7e8a28a494045889c5d510b378cb0" }
  },
}

const HASH = (string) => {
  return ethers.utils.keccak256(ethers.utils.toUtf8Bytes(string))
}

export default class MintingBox {
  constructor(address, privateList_) {
    this.privateList = privateList_.split(',').filter(good => good ? true : false).map(x => ethers.utils.getAddress(x))

    this.titleComponent = document.querySelector('.mintTitle')
    this.remainingCount = document.querySelector('.mintRemainingCount')
    this.decrementButton = document.querySelector('.mintDecrement')
    this.amountButton = document.querySelector('.mintAmount')
    this.incrementButton = document.querySelector('.mintIncrement')
    this.maxButton = document.querySelector('.mintSetMax')
    this.mintButton = document.querySelector('.mintButton')
    this.maxSet = 1
    
    this.incrementButton.addEventListener('click', () => {
      if (Number(this.amountButton.innerText) < this.maxSet) {
        this.amountButton.innerText = Number(this.amountButton.innerText) + 1
        this.updateUI()
      }
    })
    this.decrementButton.addEventListener('click', () => {
      if (Number(this.amountButton.innerText) > 1) {
        this.amountButton.innerText = Number(this.amountButton.innerText) - 1
        this.updateUI()
      }
    })
    this.maxButton.addEventListener('click', () => {
      this.amountButton.innerText = this.maxSet
      this.updateUI()
    })

    const provider = new ethers.providers.JsonRpcProvider('http://localhost:8545');
    this.contract = new ethers.Contract(address, abi, provider)
    this.update()
    provider.on('block', () => this.update())

    this.mintButton.addEventListener('click', async () => {
      if(!this.selectedAccount) {
        const sync = async () => {
          try {
            const web3Modal = new Web3Modal({
              network: "mainnet",
              cacheProvider: false,
              providerOptions,
              disableInjectedProvider: false
            })
            this.web3Provider = await web3Modal.connect()
            this.web3Provider.once("accountsChanged", () => sync())
            this.web3Provider.once("chainChanged", () => sync())
            this.web3Provider.once("networkChanged", () => sync())
            this.accountProvider = new ethers.providers.Web3Provider(this.web3Provider)
            this.fetchAccountData()
          } catch(e) {
            console.log("Could not get a wallet connection", e)
            this.selectedAccount = null
            this.accountProvider = null
          }
        }
        await sync();
        await this.fetchAccountData()
      } else {
      await this.fetchAccountData()
        if (this.selectedAccount && this.chainId === 31337) {
          const userContract = this.contract.connect(this.accountProvider.getSigner())
          if (this.mintStatus === 1) {
            userContract.privateMint(ethers.BigNumber.from(this.amountButton.innerText), this.proof, this.leaf, { value: this.priceInWei.mul(this.amountButton.innerText) }).then(tx => tx.wait(1)).then(() => this.fetchAccountData)
          }
          if (this.mintStatus === 2) {
            userContract.mint(ethers.BigNumber.from(this.amountButton.innerText), { value: this.priceInWei.mul(this.amountButton.innerText) }).then(tx => tx.wait(1)).then(() => this.fetchAccountData)
          }
        }
      }
    })
  }

   async fetchAccountData() {
    const { chainId } = await this.accountProvider.getNetwork()
    this.chainId = chainId
    const signer = this.accountProvider.getSigner()
    this.selectedAccount = ethers.utils.getAddress(await signer.getAddress())
    await this.update();
  }

  async update() {
    const [mintedAmount, maxSupply] = await Promise.all([this.contract.totalSupply(), this.contract.MAX_SUPPLY()])
    this.remainingCount.innerText = `${mintedAmount.toString()}/${maxSupply.toString()}`
    const [startedAllowlist, startedPublic] = await Promise.all([this.contract.startPrivateSale(), this.contract.startPublicSale()])
    this.mintStatus = startedAllowlist ? (startedPublic ? 2 : 1) : 0
    const [publicPrice, privatePrice, privateMax, publicMax] = await Promise.all([this.contract.publicPrice(), this.contract.privatePrice(), this.contract.maxPrivateMints(), this.contract.maxPublicMints()])    
    this.maxSet = this.mintStatus === 1 ? Number(privateMax.toString()) : Number(publicMax.toString())
    if (Number(this.amountButton.innerText) > this.maxSet) this.amountButton.innerText = this.maxSet
    this.priceInWei = this.mintStatus === 1 ? privatePrice : publicPrice
    this.merkleRoot = await this.contract.merkleRoot();

    if (this.selectedAccount && this.mintStatus === 1) {
      const privateMintsCount = await this.contract.getPrivateMinted(this.selectedAccount)
      this.maxSet = this.maxSet - Number(privateMintsCount.toString()) 
      if (Number(this.amountButton.innerText) > this.maxSet) this.amountButton.innerText = this.maxSet
      
      if (this.privateList.filter(item => item === this.selectedAccount).length > 0) {
        const leaves = this.privateList.map(x => HASH(x))
        const tree = new MerkleTree(leaves, ethers.utils.keccak256, { sort: true })
        const root = tree.getHexRoot()
        this.leaf = HASH(ethers.utils.getAddress(this.selectedAccount))
        this.proof = tree.getHexProof(this.leaf)
        console.log(this.leaf, this.proof)
      } else {
        this.leaf = null
        this.proof = null
      }
    }
    this.updateUI()
  }

  updateUI() {
    if (this.selectedAccount && this.chainId !== 31337) {
        this.mintButton.innerText = "Switch to Ethereum Mainnet"
    } else if (!this.selectedAccount) { 
      this.mintButton.innerText = `Connect Wallet`
    } else {
      if (this.mintStatus === 1 && !this.proof) {
        this.mintButton.innerText = `Not eligible for private sale`
      } else {
        this.mintButton.innerText = `Mint ${Number(this.amountButton.innerText)} (${ethers.utils.formatEther(this.priceInWei.mul(this.amountButton.innerText))} ETH)`
      }
    }
  }
}

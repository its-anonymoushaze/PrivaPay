# PrivaPay - Private, Programmable Payroll on Aleo Blockchain

![PrivaPay Logo](./src/assets/illustrations/PrivaPay.svg)

## 🔒 Overview

PrivaPay is a next-generation payroll solution built on the Aleo blockchain that prioritizes privacy and confidentiality without sacrificing transparency. This React application leverages Aleo's zero-knowledge proof technology to revolutionize organizational compensation management.

## ✨ Key Features

### 🔐 Private Organization Creation
- Establish decentralized organizations with complete privacy
- Leverage Aleo's zero-knowledge infrastructure for confidential operations
- Maintain organizational control with provable ownership
- Flexible privacy settings for organizational data

### 👥 Confidential Employee Management
- Add team members with encrypted salary information
- Set compensation details visible only to authorized parties
- Customize access controls using Aleo's programmable privacy
- Implement role-based permissions for payroll management

### 💸 Private, On-Demand Salary Access
- Employees can withdraw earnings anytime without revealing balances
- Zero-knowledge proofs verify withdrawal eligibility without exposing data
- Private transactions shield salary information from public blockchain
- Confidential financial operations for all users

### Decentralized Voting System
- Employees can vote on proposals without revealing their identities
- Zero-knowledge proofs ensure vote validity without exposing choices
- Private ballots maintain confidentiality in decision-making
- Experience a fair and transparent voting process

## 🛠️ Technology Stack

- **Frontend**: React.js with TypeScript
- **IPFS Management**: Pinata
- **Styling**: Tailwind CSS
- **Blockchain**: Aleo Network
- **Smart Contracts**: Written in LEO (Aleo's programming language)
- **Authentication**: Aleo Wallet Connect
- **Testing**: Jest and React Testing Library

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- An Aleo wallet (like [Puzzle Wallet](https://www.puzzlewallet.app/) or Leo Wallet)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/privapay.git
cd privapay
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file based on `.env.example` and add your configuration:
```
VITE_NETWORK_TYPE=
VITE_PRIVAPAY_CONTRACT_NAME=
VITE_ALEO_BASE_URL=
VITE_DAO_CONTRACT_NAME=
VITE_TOKEN_REGISTRY_CONTRACT_NAME=
VITE_GATEWAY_URL=
VITE_ANS_URL=
VITE_JWT_SECRET=
```

4. Start the development server:
```bash
npm start
# or
yarn start
```

5. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.


## 🌐 Aleo Integration

PrivaPay connects to the Aleo blockchain using the official Aleo SDK. The application interacts with custom smart contracts written in LEO that handle:

1. Organization creation and management
2. Employee registration and salary configuration
3. Fund deposits and withdrawals with zero-knowledge proofs
4. Permission management and access controls



## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

For questions or support, please contact:
- Email: support@privapay.com
- Twitter: [@PrivaPay](https://twitter.com/PrivaPay)
- Discord: [PrivaPay Community](https://discord.gg/privapay)

## 🙏 Acknowledgements

- [Aleo](https://aleo.org/) - For their revolutionary privacy-preserving blockchain technology
- [Leo Programming Language](https://leo-lang.org/) - For enabling privacy-first smart contracts
- All our early adopters and contributors

---

Built with ❤️ by the PrivaPay Team

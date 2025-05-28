# KiteAI v3

KiteAI v3 is a Node.js-based automation tool designed to handle quizzes, chats, faucets, and referrals using multiple accounts and optional proxy support.

---

## Features

✔️ Auto Daily Quiz  
✔️ Auto Onboard Quiz  
✔️ Auto Chat  
✔️ Auto Faucet  
✔️ Auto Referral *(may not work if Discord and Twitter are not bound)*  
✔️ Proxy Toggle Support  
✔️ Multi-Account Handling via Private Keys

---

## Installation

Clone the repository:

```bash
git clone https://github.com/itsmesatyavir/kiteai_v3
```

```bash
cd kiteai_v3
```

Install dependencies:

```bash
npm install
```

---

## Configuration

### 1. Add Private Keys

Create or edit `privateKeys.txt` and add one private key per line:

```bash
nano privateKeys.txt
```

### 2. Disable Proxy (Optional)

```bash
node toggleUseProxy.js false
```

### 3. Add Proxies

Create or edit `proxy.txt` with one proxy per line in format:

```
ip:port
or
username:password@ip:port
```

```bash
nano proxy.txt
```

### 4. Enable Proxy

```bash
node toggleUseProxy.js true
```

---

## Running the Script

Start the bot:

```bash
node main
```

---

## Notes
- Telegram:- 
- Ensure Discord and Twitter are connected for referrals to function properly.
- Use proxies to prevent rate limiting or IP bans when using multiple accounts.

---

## License

This project is licensed under the [MIT License](LICENSE).

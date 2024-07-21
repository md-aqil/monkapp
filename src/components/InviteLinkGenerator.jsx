import React, { useState } from 'react';

const InviteLinkGenerator = () => {
  const [usdtAddress, setUsdtAddress] = useState('');
  const [inviteLink, setInviteLink] = useState('');
  const [isLinkGenerated, setIsLinkGenerated] = useState(false);

  const handleInputChange = (e) => {
    setUsdtAddress(e.target.value);
  };

  const handleGenerateLink = () => {
    const link = `http://www.blackmonk.io/referral?start=${usdtAddress}`;
    setInviteLink(link);
    setIsLinkGenerated(true);
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(inviteLink);
    alert('Invite link copied to clipboard!');
  };

  return (
    <div className="max-w-xl mx-auto my-10 p-5 rounded-lg shadow-md">
      <h2 className=" text-center text-white mb-5 heading">Generate Invite Link</h2>
      <div className="mb-4">
        <label className="block text-white text-sm font-bold mb-2" htmlFor="usdtAddress">
          Enter USDT Address
        </label>
        <input
          type="text"
          id="usdtAddress"
          value={usdtAddress}
          onChange={handleInputChange}
          required
          className="w-full px-3 py-2 text-gray-800 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-lime-300"
          placeholder="Enter USDT Address"
        />
      </div>
      <div>
        {!isLinkGenerated ? (
          <button
            onClick={handleGenerateLink}
            className="w-full bg-lime-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-300 active:scale-95"
          >
            Generate
          </button>
        ) : (
          <button
            onClick={handleCopyLink}
            className="w-full bg-lime-300 text-gray-800 px-4 py-2 rounded-lg shadow hover:bg-lime-400 focus:outline-none focus:ring-2 focus:ring-lime-300 active:scale-95"
          >
            Copy
          </button>
        )}
      </div>
      {inviteLink && (
        <div className="mt-4 bg-gray-900 text-white p-3 rounded-lg break-all">
          {inviteLink}
        </div>
      )}
    </div>
  );
};

export default InviteLinkGenerator;

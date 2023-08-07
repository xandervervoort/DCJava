const axios = require('axios');

const applicationId = '1093189880600866967';
const token = 'MTA5MzE4OTg4MDYwMDg2Njk2Nw.GVpFu7.-gqshoP8brSx9M8hi4C4G59oANRdFgNibtlG94';
const commandIdToRemove = '1134810547838271499';

const url = `https://discord.com/api/v9/applications/${applicationId}/commands/${commandIdToRemove}`;

axios.delete(url, {
  headers: {
    Authorization: `Bot ${token}`,
  },
})
  .then(() => {
    console.log('Slash command removed successfully!');
  })
  .catch((error) => {
    if (error.response) {
      console.error('Error removing slash command:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  });

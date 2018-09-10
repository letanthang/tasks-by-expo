import { Permissions, Notifications } from 'expo';

// const PUSH_ENDPOINT = 'http://ec2-52-15-37-87.us-east-2.compute.amazonaws.com:1234/register-token-device';
// const PUSH_ENDPOINT = 'http://172.17.13.25:1234/register-token-device'
const PUSH_ENDPOINT = 'http://10.17.16.39:1234/register-token-device'

export default async function registerForPushNotificationsAsync() {
  const { status: existingStatus } = await Permissions.getAsync(
    Permissions.NOTIFICATIONS
  );
  let finalStatus = existingStatus;

  // only ask if permissions have not already been determined, because
  // iOS won't necessarily prompt the user a second time.
  if (existingStatus !== 'granted') {
    // Android remote notification permissions are granted during the app
    // install, so this will only ask on iOS
    const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    finalStatus = status;
  }

  // Stop here if the user did not grant permissions
  if (finalStatus !== 'granted') {
    return;
  }

  // Get the token that uniquely identifies this device
  let token = await Notifications.getExpoPushTokenAsync();

  console.log(token);
  //return null;

  // POST the token to your backend server from where you can retrieve it to send push notifications.
  return fetch(PUSH_ENDPOINT, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      secretCode: "MAMFRESH_APP",
      tokenDevice: token,
      "userId": 123456
    }),
  });
}

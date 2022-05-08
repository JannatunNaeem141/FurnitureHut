import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div>
                <div>
                    <h4>1. Whats the difference between authorization and authentication?</h4>
                    <h5>Authentication</h5>
                    <p>
                        <ul>
                            <li>Authentication is the process of identifying a user to provide access to a system.</li>
                            <li>In this, the user or client and server are verified.</li>
                            <li>It is usually performed before the authorization.</li>
                            <li>It requires the login details of the user, such as user name & password, etc.</li>
                            <li>Data is provided through the Token Ids.</li>
                            <li>Authentication credentials can be partially changed by the user as per the requirement.</li>
                        </ul>
                    </p>
                    <h5>Authorization</h5>
                    <p>
                        <ul>
                            <li>Authorization is the process of giving permission to access the resources.</li>
                            <li>In this, it is verified that if the user is allowed through the defined policies and rules.</li>
                            <li>It is usually done once the user is successfully authenticated.</li>
                            <li>It requires the user's privilege or security level.</li>
                            <li>Data is provided through the access tokens.</li>
                            <li>Authorization permissions cannot be changed by the user.</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h4>2. Why am I using firebase?</h4>
                    <p>Google Firebase offers many features that pitch it as the go-to backend development tool for web and mobile apps. It reduces development workload and time. And it's a perfect prototyping tool. Firebase is simple, lightweight, friendly, and industrially recognized.</p>
                    <p>Firebase is a good choice if we want to deploy a working product on the cloud rapidly. Plus, as mentioned, we might want to try it out if we need a backend but don't have a backend development background.</p>
                </div>
                <div>
                    <h4>3. What other options do you have to implement authentication?</h4>
                    <p>There are several authentication options available to authenticate users and provide access to resources.</p>

                    <p>
                        <ul>
                            <li>
                                <h5>Token Authentication</h5>
                                <p>A token can be defined as a digitally encoded signature used to authenticate and authorize a user to access specific resources on a network.</p>
                            </li>
                            <li>
                                <h5>Standard Authentication</h5>
                                <p>Standard authentication is one of the most common and basic authentication options that help users authenticate by entering their credentials using a user id and a password.</p>
                            </li>
                            <li>
                                <h5>Multi-Factor Authentication (MFA)</h5>
                                <p>Multi-factor authentication (or MFA) is a multi-layered security system that verifies the identity of users for login or other transactions.</p>
                            </li>
                            <li>
                                <h5>Passwordless Authentication</h5>
                                <p>A passwordless authentication system swaps the use of a traditional password with more certain factors. These extra-security methods may include a magic link, fingerprint, PIN, or a secret token delivered via email or text message.</p>
                            </li>
                            <li>
                                <h5>Social Authentication</h5>
                                <p>Social login enables users to use existing login credentials from a social networking platform including Facebook, Google, Twitter, and more, enabling simplified logins and registrations.</p>
                            </li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h4>4. What other services does firebase provide other than authentication?</h4>
                    <p>Firebase provides a number of services, including:</p>
                    <p>
                        <ul>
                            <li>Analytics – Google Analytics for Firebase offers free, unlimited reporting on as many as 500 separate events.</li>
                            <li>Authentication – Firebase Authentication makes it easy for developers to build secure authentication systems and enhances the sign-in and onboarding experience for users.</li>
                            <li>Cloud messaging – Firebase Cloud Messaging (FCM) is a cross-platform messaging tool that lets companies reliably receive and deliver messages on iOS, Android and the web at no cost.</li>
                            <li>Realtime database – the Firebase Realtime Database is a cloud-hosted NoSQL database that enables data to be stored and synced between users in real time.</li>
                            <li>Crashlytics – Firebase Crashlytics is a real-time crash reporter that helps developers track, prioritize and fix stability issues that reduce the quality of their apps.</li>
                            <li>Performance – Firebase Performance Monitoring service gives developers insight into the performance characteristics of their iOS and Android apps to help them determine where and when the performance of their apps can be improved.</li>
                            <li>Test lab – Firebase Test Lab is a cloud-based app-testing infrastructure. With one operation, developers can test their iOS or Android apps across a variety of devices and device configurations.</li>
                        </ul>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs'>
            <div>
                <div>
                    <h4>1. Whats the difference between JavaScript and NodeJs?</h4>
                    <h5>Javascript</h5>
                    <p>
                        <ul>
                            <li>Javascript is a programming language that is used for writing scripts on the website.</li>
                            <li>Javascript can only be run in the browsers.</li>
                            <li>It is basically used on the client-side.</li>
                            <li>Javascript is capable enough to add HTML and play with the DOM. </li>
                            <li>Javascript is used in frontend development.</li>
                            <li>Some of the javascript frameworks are RamdaJS, TypedJS, etc.</li>
                        </ul>
                    </p>
                    <h5>NodeJs</h5>
                    <p>
                        <ul>
                            <li>NodeJS is a Javascript runtime environment.</li>
                            <li>We can run Javascript outside the browser with the help of NodeJS.</li>
                            <li>It is mostly used on the server-side.</li>
                            <li>Nodejs does not have capability to add HTML tags.</li>
                            <li>Nodejs is used in server-side development.</li>
                            <li>Some of the Nodejs modules are Lodash, express etc. These modules are to be imported from npm. </li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h4>2. When should we use nodejs and when should we use mongodb?</h4>
                    <p>MongoDB is the Document Oriented Database. MongoDB stores a lot of data in JSON format. MongoDB's performance is much faster than any RDBMS. MongoDB is designed to work with Large Scale Data. MongoDB can work on multiple servers. MongoDB can handle a large number of access requests easily.</p>
                    <p>There are 2 design patterns in programming. One is asynchronous programming and the other is synchronous programming. NodeJS by default follows the Asynchronous pattern. That is, it does not wait for a task to be completed. In the meantime, NodeJS started another job. That’s why we use NodeJS.</p>
                </div>
                <div>
                    <h4>3. What is the differences between SQL and NoSQL database?</h4>
                    <h5>SQL</h5>
                    <p>
                        <ul>
                            <li>Relational database management system(RDBMS).</li>
                            <li>These databases have fixed or static or predefined schema.</li>
                            <li>These databases are not suited for hierarchical data storage.</li>
                            <li>These databases are best suited for complex queries.</li>
                            <li>Vertically Scalable.</li>
                            <li>Follows ACID property.</li>
                        </ul>
                    </p>
                    <h5>NoSQL</h5>
                    <p>
                        <ul>
                            <li>Non-relational or distributed database system.</li>
                            <li>They have dynamic schema.</li>
                            <li>These databases are best suited for hierarchical data storage.</li>
                            <li>These databases are not so good for complex queries.</li>
                            <li>Horizontally scalable.</li>
                            <li>Follows CAP(consistency, availability, partition tolerance).</li>
                        </ul>
                    </p>
                </div>
                <div>
                    <h4>4. What is the purpose of jwt and how does it work?</h4>
                    <h5>Purpose of JWT:</h5>
                    <p>In short, JWTs are used as a secure way to authenticate users and share information.</p>
                    <p>Typically, a private key, or secret, is used by the issuer to sign the JWT. The receiver of the JWT will verify the signature to ensure that the token hasn’t been altered after it was signed by the issuer. It is difficult for unauthenticated sources to guess the signing key and attempt to change the claims within the JWT.</p>
                    <p>Not all signing algorithms are created equal though. For example, some signing algorithms use a secret value that is shared between the issuer and the party that verifies the JWT. Other algorithms use a public and private key. The private key is known only to the issuer, while the public key can be widely distributed. The public key can be used to verify the signature, but only the private key can be used to create the signature. This is more secure than a shared secret because the private key only needs to exist in one place.</p>
                    <p>Because of this, the server does not need to keep a database with the information needed to identify the user. For developers, this is great news — the server that issues the JWT and the server that validates it do not have to be the same.</p>
                    <h5>How JWT works:</h5>
                    <p>JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.</p>
                    <p>A JWT is a string made up of three parts, separated by dots (.), and serialized using base64. In the most common serialization format, compact serialization, the JWT looks something like this: xxxxx.yyyyy.zzzzz.</p>
                    <p>Once decoded, you will get two JSON strings:
                        The header and the payload,
                        The signature. </p>
                    <p>The JOSE (JSON Object Signing and Encryption) header contains the type of token — JWT in this case — and the signing algorithm. </p>
                    <p>The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.</p>
                    <p>There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.</p>
                    <p>The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature.

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;
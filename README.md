# PriFile
Secure file storage system (web-based) that allow the user to make sure their file in more secure way that include encryption and decryption.

Methodology:

Load the file on the server. It can be any type of file.
Dividing the uploaded file into N parts depending on the fixed block size.
Encrypting all the sub-files using any one of the selected algorithms (Algorithm is changed with every part in round robin fashion).
The keys for cryptography algorithms used are stored in a file and then the resulting file is secured using a different cryptographic algorithm and the key for this algorithm is provided to the user as public key, which needs to be transferred safely to the receiver. (Currently, we are using symmetric encryption, we may also shift to authentication and asymmetric encryption in future.)
To restore:


Load the key (.pem file) on the server. Ask it from your sender.
Decrypt the keys of the algorithms.
Decrypt all the N subfiles using the same algorithms which were used to encrypt them.
Combine all the N subfiles to form the original file and provide it to the user for downloading.

# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.3.0](https://github.com/cylab-tw/raccoon/compare/v1.2.1...v1.3.0) (2022-05-22)


### Features

* add `00083002` instance tag ([5b19b88](https://github.com/cylab-tw/raccoon/commit/5b19b88e8a0e4ad38afdd8d2b8b2da4ee4b713b2))
> In `dicom-tag.js` file
* add `bulkdata` API ([e2d3d9a](https://github.com/cylab-tw/raccoon/commit/e2d3d9a7b40def7282446340598b49b2c6ab1721))
    * Add `writeBulkData` method for bulk data at `multipartWriter` class.
    * Add bulk data object type definition
    * Use multipartWriter refactoring of original **single** bulkdata API
    * Add `bulkdata` API in `api/diocm-web` directory
* add `shard`, remove some connect string and refactor method ([824bdfb](https://github.com/cylab-tw/raccoon/commit/824bdfb03cec3ece6339e052127b47c9e5995775))
* add `writeFrames` in multipartWriter ([222c033](https://github.com/cylab-tw/raccoon/commit/222c0335ee58014b017f966c044c315a6b1ffb3b))
* add change all query to dicomtag field method ([e3f4321](https://github.com/cylab-tw/raccoon/commit/e3f432150ad7d5cf93d2a4fa0f41f07fc57ae342))
* add logger for `STOW-RS` ([080ddb2](https://github.com/cylab-tw/raccoon/commit/080ddb26b21fe44754c3bfadb3c979176b59cc24))
* add logger in `QIDO-RS` ([9551fb7](https://github.com/cylab-tw/raccoon/commit/9551fb7cf23b957ba20f8114ec6916e9fc0e4afa))
* add logger in all QIDO-RS APIs ([ec592d7](https://github.com/cylab-tw/raccoon/commit/ec592d75a755f3177d04f19c16ddd76c8a7a5a95))
* add login access control feature ([76125e1](https://github.com/cylab-tw/raccoon/commit/76125e10b9b63f9d0d1d21862c8b49eaeb90e9ba))
* add new class handle writing multipart res ([c4680df](https://github.com/cylab-tw/raccoon/commit/c4680dfbbc275e747febce8a6a26e12497b9eb9b))
* add new logger ([2fcf6a3](https://github.com/cylab-tw/raccoon/commit/2fcf6a32aa705a1609312cd3495b2fe06139eaa4))
* add retrieve instance bulkdata ([0aa9254](https://github.com/cylab-tw/raccoon/commit/0aa925425c4de7b2ebddeb917fdffd37c40246d8))
* add time ,file locaiton, line number for log ([eec3d8a](https://github.com/cylab-tw/raccoon/commit/eec3d8a1c0a4c6e3810ca247fa047c8143d5e15c))
* change condition of level of DICOM tag ([920410e](https://github.com/cylab-tw/raccoon/commit/920410e637c603c0dd1ec0731fd59c3522dfdef8))
* dynamic change bukdURI with ENV config when retrieve metadata ([963bca6](https://github.com/cylab-tw/raccoon/commit/963bca6f7f9cedcbcced1133b636c5f8ec712190))
* **imagingStudy:** add `identifier` search parameter and catch error with query ([94885d5](https://github.com/cylab-tw/raccoon/commit/94885d57ca9c3502a253b7e898fd89dfcdd886e1))
* **python:** support python command without conda ([dea2e48](https://github.com/cylab-tw/raccoon/commit/dea2e487a96a5059e7f2d1d53dc90b53c0837c18))
* **qido-rs:** change return with all `getDicomJson` function ([5bc55b9](https://github.com/cylab-tw/raccoon/commit/5bc55b9bbc868753309d8b25c09c6f4587740e9a))
* remove pretty json when response ([992fe54](https://github.com/cylab-tw/raccoon/commit/992fe54b6556f36577f71e2c6cdacc4fab5f0113))


### Bug Fixes

* [#6](https://github.com/cylab-tw/raccoon/issues/6) ([ba3a620](https://github.com/cylab-tw/raccoon/commit/ba3a6203986c7dd9fdbc4511b9bee73c2be2ff2d))
* cannot convert DICOM to jpeg with the filename that contains space [#1](https://github.com/cylab-tw/raccoon/issues/1) ([5aad693](https://github.com/cylab-tw/raccoon/commit/5aad6932c8580fa3f6c3710db394367e98e6b280))
* **dcm2jsonC:** dicom json from dcmtk convertor will get `u0000` that cause error ([badab2d](https://github.com/cylab-tw/raccoon/commit/badab2d91aab90e34082d2231d628ee75a2c52e1))
* FHIR endpoint address incorrect ([b88fc27](https://github.com/cylab-tw/raccoon/commit/b88fc27a5014ea9aea5e9dfd92d1da53c05ea1d5))
* function in WADOFunc not exist ([98fef3f](https://github.com/cylab-tw/raccoon/commit/98fef3ff647e5af6a07112e391f455fb7452d5a8))
* incorrect connection url ([2348a08](https://github.com/cylab-tw/raccoon/commit/2348a084b3b4c4c19fb34c114c10371363f1764f))
* incorrect content of query with IS of VR ([3511d22](https://github.com/cylab-tw/raccoon/commit/3511d222de1aa222e7d56bf1f7beff4a14504962))
* incorrect dicomjson value storing in DB ([a439538](https://github.com/cylab-tw/raccoon/commit/a439538f61de7471f63a29ec6ed701fa0e315f2c))
* incorrect match query in insertMetadata ([0df528d](https://github.com/cylab-tw/raccoon/commit/0df528d267ce585d03ae6fa5fbd7da0af08bf2e0))
* incorrect response message ([16b6303](https://github.com/cylab-tw/raccoon/commit/16b6303ae89ee2fb90839a2452eef8bffe472705))
* incorrect response of put imagingStudy ([2cc85d7](https://github.com/cylab-tw/raccoon/commit/2cc85d7224a94b2b2b2ff7ecc2ffc494230f0bbb))
* incorrect type of series dicomJson `00080020` ([28797c2](https://github.com/cylab-tw/raccoon/commit/28797c232bad85273f6a5419d3a855af9382d04c))
* Invalid regular expression literal ([8991a7b](https://github.com/cylab-tw/raccoon/commit/8991a7bcb1edd707eb07cf977576e8011861c953))
* missing `strict: false` that cause MongoDB only store defineded field ([1adfd02](https://github.com/cylab-tw/raccoon/commit/1adfd02995de546c8fe114fd035a9df416556a55))
* missing header `content-type` when retrieve bulkdata ([71e08d6](https://github.com/cylab-tw/raccoon/commit/71e08d690bd8666426af3e6882bc0ca6d18c74b4))
* missing require logger ([8205ae9](https://github.com/cylab-tw/raccoon/commit/8205ae95207e4ee6c0983f020f8f1e79840c8123))
* resolve `PatientName` query string ([6198efb](https://github.com/cylab-tw/raccoon/commit/6198efbac7585c197d761d0b19c81c78d51385d6))
* resolve that if modalitiesInStudy is empty ([716a222](https://github.com/cylab-tw/raccoon/commit/716a222e2fe1e321e4c8ae51fba52a9974f80e1d))
* spawn `dcm2jpegSpawn` not return when close ([2f3510f](https://github.com/cylab-tw/raccoon/commit/2f3510f23d0ef9fb5c8999ecd24ee3d64ed20e97))
* the stow without route result is change but local dicom uploader is bit sync using method ([64388ca](https://github.com/cylab-tw/raccoon/commit/64388ca5abd805c89fa58927784ef18ac9eb18fa))
* the string have `^` when query will get incorrect search result ([5139460](https://github.com/cylab-tw/raccoon/commit/51394607e2cdbde53cd19649fe1af481c67b0bcb))
* type of field `name`  is incorrect ([7e30139](https://github.com/cylab-tw/raccoon/commit/7e30139d8b70b2916967edfebf021f31392bb514))
* incorrect multipart structure, remove `CRLF` in `writeContentLength` and move in `writeBufferData` to avoid the content-length is not last header ([e2d3d9a](https://github.com/cylab-tw/raccoon/commit/e2d3d9a7b40def7282446340598b49b2c6ab1721))

### Build

* add config template instead `config.js` ([aecc7ad](https://github.com/cylab-tw/raccoon/commit/aecc7ad7e5c0f578667218150fc7822c7eed290b))
* change mongodb host and dicom file store path ([410f32f](https://github.com/cylab-tw/raccoon/commit/410f32f5fc8cc7e19f41a2be17fca2660b412ffa))
* **docker:** add `bullseye-updates` sources.list ([1cac09b](https://github.com/cylab-tw/raccoon/commit/1cac09ba2f9d2ced81dc714b8b503ae8c79c43ab))
* **docker:** add `npm set unsafe-perm` ([ccb95aa](https://github.com/cylab-tw/raccoon/commit/ccb95aa1d24b4b0e334737c908d1aaf318521be4))
* **docker:** using requirements to install packs ([ea96ca3](https://github.com/cylab-tw/raccoon/commit/ea96ca39747b25567498958be306ee6a40cd18e5))
* fix the download directory ([a331bd4](https://github.com/cylab-tw/raccoon/commit/a331bd47865bd972834d229dbc10fc95306a0d96))
* improve dockerfile ([d76f45c](https://github.com/cylab-tw/raccoon/commit/d76f45c85ee2c6dc226be22b8ed7e6c710732b42))
* improve dockerfile step ([3e1022c](https://github.com/cylab-tw/raccoon/commit/3e1022cf107b106ae87a625b4f68d490415c6a34))
* **python:** add python requirements ([330982d](https://github.com/cylab-tw/raccoon/commit/330982d1a16e6416e428b1e5bc62b6e5dc770cb0))
* update dotenv and add dot env template file ([a7d5892](https://github.com/cylab-tw/raccoon/commit/a7d58921c34fe493da7ff409597d51740e6f7720))

### [1.2.1](https://github.com/cylab-tw/raccoon/compare/v1.2.0...v1.2.1) (2021-10-11)

### Bug Fixes

* missing boundary in response headers ([06312ef](https://github.com/cylab-tw/raccoon/commit/06312efcf13d46f6f3cc72ecdd88428c299a4291))
* not response when error occur ([f999810](https://github.com/cylab-tw/raccoon/commit/f999810719a4019a2491a6ba6fcedde25113ab0b))
* replace http to config FHIRSERVER_HTTP ([6a38ccc](https://github.com/cylab-tw/raccoon/commit/6a38ccc5437f1b7f4a4b916c56bb55c41eb09833))


### Build

* **dockerfile:**  add iconv compile in env ([30de6b9](https://github.com/cylab-tw/raccoon/commit/30de6b9628e7e70caa9f6651fbe68a127e4d279f))
* **dockerfile:** fix the dcmtk Tag not found in data dictionary in docker env ([9bc47c0](https://github.com/cylab-tw/raccoon/commit/9bc47c0910050baefb8e5df4b1c156240203aff8))

## [1.2.0](https://github.com/cylab-tw/raccoon/compare/v1.1.0...v1.2.0) (2021-09-29)


### Features

* `wado-uri` handle `iccprofile` parameter ([9185b72](https://github.com/cylab-tw/raccoon/commit/9185b72be68082ce738c483346ecb764a6b044b1))
* add dicom to jpeg task api ([6ca0d19](https://github.com/cylab-tw/raccoon/commit/6ca0d193014b1df0f6d63cc485f18b8c048a8b25))
* add file size field in dicomToJpegTask ([529e84a](https://github.com/cylab-tw/raccoon/commit/529e84a1820cb4dcac49a0cd7fa61b4cc31e2b9f))
* add flip and flop ([fc77d65](https://github.com/cylab-tw/raccoon/commit/fc77d653e747a799a35a23ecf6c420a298dece10))
* handle viewport parameter ([b77ea8c](https://github.com/cylab-tw/raccoon/commit/b77ea8c2a27ac4aed94530af9eb1b385de2ec2f1))
* **front-end:** add dicom to jpeg task page ([3c9a839](https://github.com/cylab-tw/raccoon/commit/3c9a8392467f783ded5fb362b4f5fbeeb33dd643))
* read metadata file instead of mongodb metadata data ([e690008](https://github.com/cylab-tw/raccoon/commit/e69000824be53f6053b0becddf5aedb78704f397))
* use imagemagick to handle quality and iccprofile ([18d21f7](https://github.com/cylab-tw/raccoon/commit/18d21f7b480ad87f0c1da4fc43a567c2b69d67bc))
* use magick instead of sharp to handle image ([7faaedb](https://github.com/cylab-tw/raccoon/commit/7faaedba2dd739a9685ef830adf9a66ac9f02bfb))
* use prebuild dicomtojson package ([74665d5](https://github.com/cylab-tw/raccoon/commit/74665d53b7441aac4e0961fedfcdd721fab28f8d))


### Bug Fixes

* create folder when it is not exist ([131fe00](https://github.com/cylab-tw/raccoon/commit/131fe00ee28f0fc2dffaf3d2c11e9e332fe6b268))
* date query will lose by cleandoc ([3eef6c5](https://github.com/cylab-tw/raccoon/commit/3eef6c5f33ddb3d41978dd85c8d45464632dd747))
* icc profile binary save as `.icc` extension ([9f31226](https://github.com/cylab-tw/raccoon/commit/9f312264c4d564c5e663b359ef0b4f5ebb88a4d3))
* incorrect aggregate sequence ([ef04b82](https://github.com/cylab-tw/raccoon/commit/ef04b8243b45a3a446beefaefc85c779c0b31322))
* incorrect STOW-RS request ([431889f](https://github.com/cylab-tw/raccoon/commit/431889f8dd10d8a72566d47cae93a606fbdeb015))
* incorrect tag when get modality of dicom json ([87b4064](https://github.com/cylab-tw/raccoon/commit/87b40644a0b6eb178465361dec4e4d43f790f564))
* missing error log in getFrameImage function ([49d890d](https://github.com/cylab-tw/raccoon/commit/49d890dedcb433c1570acd5b72921005358b67a6))
* resolve 80 and 443 port in url ([2c576ba](https://github.com/cylab-tw/raccoon/commit/2c576ba3bbe5631361b3bb7a73cb1168bc48bec5))
* resolve the dicom to jpeg task have difftime when status if false ([3960138](https://github.com/cylab-tw/raccoon/commit/3960138db3177ea8990173fc391a596b2408c60e))
* response missing content-type in header ([0b39ffa](https://github.com/cylab-tw/raccoon/commit/0b39ffa416997a2fc11a2fb90fc57b3328151f4b))
* studyUID is not defined in catch ([8d64478](https://github.com/cylab-tw/raccoon/commit/8d64478951cac679ef79bd3eb5ed8eb707240386))

## 1.1.0 (2021-08-15)


### Features

* Add iconv lib ([516f940](https://github.com/cylab-tw/raccoon/commit/516f940793fda7cb495278cc9a95bf5a285d26ee))
* Add pydicom RGB or YBR to jpeg ([273ee09](https://github.com/cylab-tw/raccoon/commit/273ee0963123a0978c4cb373d48209284f29cd26))

* change STOW workflow ([7802658](https://github.com/cylab-tw/raccoon/commit/780265841f54546f422edfd74ae2e1df9fe650f4))
* change the formdata upload method ([9ebd286](https://github.com/cylab-tw/raccoon/commit/9ebd286e88013e75aeee45724210e16160491415))
* Change the method to get the frameNumber ([3bf7d4b](https://github.com/cylab-tw/raccoon/commit/3bf7d4bdd047e03f8e6c748a2594b56ae7c66f7b))
* Change upload way ([5daaba3](https://github.com/cylab-tw/raccoon/commit/5daaba37897c76bfa7f95569c309b456c4c8ab74))
* dcm2json add meta info ([bf3a23d](https://github.com/cylab-tw/raccoon/commit/bf3a23d293f28c09a8f2a9c2da8541e54df4c9dd))
* Dont use asymmetrik node fhir server code ([ab1a031](https://github.com/cylab-tw/raccoon/commit/ab1a031e6cdbb8308c74ae059426c345b17b3970))
* Set boundary in formdata ([c0ea534](https://github.com/cylab-tw/raccoon/commit/c0ea534dc0911eca92188b8ba7ffccc26ff8336c))
* store OW or OB value to file ([76fe6bd](https://github.com/cylab-tw/raccoon/commit/76fe6bdd6cc555120a539f4e2ff24f0ae6c2fff5))
* sync stow workflow in locally stow ([2661d87](https://github.com/cylab-tw/raccoon/commit/2661d8708e99e680d38ccfcc0cd500fa6cae5331))
* **DICOMWeb:** Added write multipart function ([2e45361](https://github.com/cylab-tw/raccoon/commit/2e4536161d03c537c1a742bd6b6d912a59af0216))
* **wado-uri:** Added retrive frame ([7599f0a](https://github.com/cylab-tw/raccoon/commit/7599f0afa29282219cb74667551dd0faa41117bc))
* **wado-uri:** change handle frameNumber method ([57385a7](https://github.com/cylab-tw/raccoon/commit/57385a796fb1db661ef2288218dc46c20996487a))
* use `--frame` instead of `--all-frames` ([e331a55](https://github.com/cylab-tw/raccoon/commit/e331a55a520277669c735f3e7f39b05105b2ef99))


### Bug Fixes

* dcmj2pnm error command ([6d060d2](https://github.com/cylab-tw/raccoon/commit/6d060d22cd389e64b8b8c8e1c7cd84bf886bcbd1))
* Error block ([2c9e336](https://github.com/cylab-tw/raccoon/commit/2c9e336c9b575aa9047d3fc2f1366e20be550935))
* Error occur when patient id have space ([bd92bc8](https://github.com/cylab-tw/raccoon/commit/bd92bc813ed6db10656a31b3ac944ad05e76434e))
* Huge file wado-rs ([cc65c0d](https://github.com/cylab-tw/raccoon/commit/cc65c0d4e1ef48fbeb4e2d5b5c353865b31eb823))
* ImageMS pagination bug ([11354a3](https://github.com/cylab-tw/raccoon/commit/11354a3f59dd4e118496660eaac05d74f1cca3ba))
* incorrect series metadata query ([3ae90ba](https://github.com/cylab-tw/raccoon/commit/3ae90bac2a231af879652da6b04214f358b79215))
* malloc dicomjson size must add 1 ([1b46d78](https://github.com/cylab-tw/raccoon/commit/1b46d7865d371671a622031baf194abf78642216))
* Metadata query error ([389a488](https://github.com/cylab-tw/raccoon/commit/389a488c0cd73917bda54546a3e9e60e6f1d659a))
* missing import font-awesome css ([b85707c](https://github.com/cylab-tw/raccoon/commit/b85707c8fe09bd0d1a3b3e0be1b264aff03fe12b))
* mongoose find function call error ([999eb1f](https://github.com/cylab-tw/raccoon/commit/999eb1ffaa8ff818ece06a91d1e28b17184ed558))
* No such file or directory ([69a19e8](https://github.com/cylab-tw/raccoon/commit/69a19e85c6390e08781644cbc1424dc914af76a7))
* Not generate when .env exists ([7ba20fd](https://github.com/cylab-tw/raccoon/commit/7ba20fd538e5cb64f206123d5cdbcdc1a0163fd5))
* response 404 when not found ([f5e205d](https://github.com/cylab-tw/raccoon/commit/f5e205d57acb0cf3d641f904d530388a735e6e7c))
* temp folder permission ([57866c1](https://github.com/cylab-tw/raccoon/commit/57866c1d9c91226fa3cb852eb71d0d13818da257))
* use for...in instead for loop ([b79b35d](https://github.com/cylab-tw/raccoon/commit/b79b35dfadfa66555de02e13e45944cfd63438a9))

## 1.0.0 (2021-06-23)


### Features

* Add generation jpeg wehn STOW ([7fa5868](https://github.com/cylab-tw/raccoon/commit/7fa5868c3e4f35cf379767c3a664aefb5f944510))
* Add iconv lib ([516f940](https://github.com/cylab-tw/raccoon/commit/516f940793fda7cb495278cc9a95bf5a285d26ee))
* Add pydicom RGB or YBR to jpeg ([273ee09](https://github.com/cylab-tw/raccoon/commit/273ee0963123a0978c4cb373d48209284f29cd26))
* Added dcm2json V8 version ([0d4699a](https://github.com/cylab-tw/raccoon/commit/0d4699a07aa882d1ae5d5d7ed1178e5e8aa9a259))
* Added detect os when starting ([40f1dc0](https://github.com/cylab-tw/raccoon/commit/40f1dc0f2b911fb26ab02a3d4ea32f400c967c9a))
* Added dicom json to FHIR imagingStudy ([21a18f9](https://github.com/cylab-tw/raccoon/commit/21a18f9f549d5bace8a64165ab35b69a02808a3b))
* Added DICOMWeb response ([72a1f51](https://github.com/cylab-tw/raccoon/commit/72a1f515738883caf2388a28dc657ff1d6dd1df7))
* Added double check when deletion ([89d893d](https://github.com/cylab-tw/raccoon/commit/89d893d35c5d1974d2530955ae3c3a2d6df3b8cc))
* Added error log when mongo error ([aef4e65](https://github.com/cylab-tw/raccoon/commit/aef4e65b6827d6ab2e2c6443a513dcb39aa88e9b))
* Added quantity query ([3facd1d](https://github.com/cylab-tw/raccoon/commit/3facd1dc92f81a35a6003ee1eafd5b15555ce801))
* Added STOW function without Route API ([aa46c0e](https://github.com/cylab-tw/raccoon/commit/aa46c0e9d528689b0174f1b300106068f00b5457))
* Added view in dicom viewer button in ImageMS ([edf2762](https://github.com/cylab-tw/raccoon/commit/edf2762e7ed9030b3501d7cc994affa1c726649d))
* Added wado-url parameter validation ([8c7fa05](https://github.com/cylab-tw/raccoon/commit/8c7fa0587904db01bfa4ed61b7dd4f55f32fc9d5))
* Added xml2dcm ([c6cd8af](https://github.com/cylab-tw/raccoon/commit/c6cd8af195a9f05fde087dae308a2fd999628a6f))
* change python DCM2JPGE to flask API ([bb1a042](https://github.com/cylab-tw/raccoon/commit/bb1a042669b6101d4b05ca50418a56b1e763a920))
* change the formdata upload method ([9ebd286](https://github.com/cylab-tw/raccoon/commit/9ebd286e88013e75aeee45724210e16160491415))
* Change the method to get the frameNumber ([3bf7d4b](https://github.com/cylab-tw/raccoon/commit/3bf7d4bdd047e03f8e6c748a2594b56ae7c66f7b))
* Change upload way ([5daaba3](https://github.com/cylab-tw/raccoon/commit/5daaba37897c76bfa7f95569c309b456c4c8ab74))
* Set boundary in formdata ([c0ea534](https://github.com/cylab-tw/raccoon/commit/c0ea534dc0911eca92188b8ba7ffccc26ff8336c))
* **DICOMWeb:** Added write multipart function ([2e45361](https://github.com/cylab-tw/raccoon/commit/2e4536161d03c537c1a742bd6b6d912a59af0216))
* **wado-uri:** Added retrive frame ([7599f0a](https://github.com/cylab-tw/raccoon/commit/7599f0afa29282219cb74667551dd0faa41117bc))
* Dont use asymmetrik node fhir server code ([ab1a031](https://github.com/cylab-tw/raccoon/commit/ab1a031e6cdbb8308c74ae059426c345b17b3970))


### Bug Fixes

* dcmj2pnm error command ([6d060d2](https://github.com/cylab-tw/raccoon/commit/6d060d22cd389e64b8b8c8e1c7cd84bf886bcbd1))
* Error block ([2c9e336](https://github.com/cylab-tw/raccoon/commit/2c9e336c9b575aa9047d3fc2f1366e20be550935))
* Error occur when patient id have space ([bd92bc8](https://github.com/cylab-tw/raccoon/commit/bd92bc813ed6db10656a31b3ac944ad05e76434e))
* Huge file wado-rs ([cc65c0d](https://github.com/cylab-tw/raccoon/commit/cc65c0d4e1ef48fbeb4e2d5b5c353865b31eb823))
* ImageMS pagination bug ([11354a3](https://github.com/cylab-tw/raccoon/commit/11354a3f59dd4e118496660eaac05d74f1cca3ba))
* incorrect series metadata query ([3ae90ba](https://github.com/cylab-tw/raccoon/commit/3ae90bac2a231af879652da6b04214f358b79215))
* malloc dicomjson size must add 1 ([1b46d78](https://github.com/cylab-tw/raccoon/commit/1b46d7865d371671a622031baf194abf78642216))
* Metadata query error ([389a488](https://github.com/cylab-tw/raccoon/commit/389a488c0cd73917bda54546a3e9e60e6f1d659a))
* mongoose find function call error ([999eb1f](https://github.com/cylab-tw/raccoon/commit/999eb1ffaa8ff818ece06a91d1e28b17184ed558))
* No such file or directory ([69a19e8](https://github.com/cylab-tw/raccoon/commit/69a19e85c6390e08781644cbc1424dc914af76a7))
* Not generate when .env exists ([7ba20fd](https://github.com/cylab-tw/raccoon/commit/7ba20fd538e5cb64f206123d5cdbcdc1a0163fd5))
* response 404 when not found ([f5e205d](https://github.com/cylab-tw/raccoon/commit/f5e205d57acb0cf3d641f904d530388a735e6e7c))

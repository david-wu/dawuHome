(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["photo-gallery-photo-gallery-module"],{

/***/ "./node_modules/exif-js/exif.js":
/*!**************************************!*\
  !*** ./node_modules/exif-js/exif.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function() {

    var debug = false;

    var root = this;

    var EXIF = function(obj) {
        if (obj instanceof EXIF) return obj;
        if (!(this instanceof EXIF)) return new EXIF(obj);
        this.EXIFwrapped = obj;
    };

    if (true) {
        if ( true && module.exports) {
            exports = module.exports = EXIF;
        }
        exports.EXIF = EXIF;
    } else {}

    var ExifTags = EXIF.Tags = {

        // version tags
        0x9000 : "ExifVersion",             // EXIF version
        0xA000 : "FlashpixVersion",         // Flashpix format version

        // colorspace tags
        0xA001 : "ColorSpace",              // Color space information tag

        // image configuration
        0xA002 : "PixelXDimension",         // Valid width of meaningful image
        0xA003 : "PixelYDimension",         // Valid height of meaningful image
        0x9101 : "ComponentsConfiguration", // Information about channels
        0x9102 : "CompressedBitsPerPixel",  // Compressed bits per pixel

        // user information
        0x927C : "MakerNote",               // Any desired information written by the manufacturer
        0x9286 : "UserComment",             // Comments by user

        // related file
        0xA004 : "RelatedSoundFile",        // Name of related sound file

        // date and time
        0x9003 : "DateTimeOriginal",        // Date and time when the original image was generated
        0x9004 : "DateTimeDigitized",       // Date and time when the image was stored digitally
        0x9290 : "SubsecTime",              // Fractions of seconds for DateTime
        0x9291 : "SubsecTimeOriginal",      // Fractions of seconds for DateTimeOriginal
        0x9292 : "SubsecTimeDigitized",     // Fractions of seconds for DateTimeDigitized

        // picture-taking conditions
        0x829A : "ExposureTime",            // Exposure time (in seconds)
        0x829D : "FNumber",                 // F number
        0x8822 : "ExposureProgram",         // Exposure program
        0x8824 : "SpectralSensitivity",     // Spectral sensitivity
        0x8827 : "ISOSpeedRatings",         // ISO speed rating
        0x8828 : "OECF",                    // Optoelectric conversion factor
        0x9201 : "ShutterSpeedValue",       // Shutter speed
        0x9202 : "ApertureValue",           // Lens aperture
        0x9203 : "BrightnessValue",         // Value of brightness
        0x9204 : "ExposureBias",            // Exposure bias
        0x9205 : "MaxApertureValue",        // Smallest F number of lens
        0x9206 : "SubjectDistance",         // Distance to subject in meters
        0x9207 : "MeteringMode",            // Metering mode
        0x9208 : "LightSource",             // Kind of light source
        0x9209 : "Flash",                   // Flash status
        0x9214 : "SubjectArea",             // Location and area of main subject
        0x920A : "FocalLength",             // Focal length of the lens in mm
        0xA20B : "FlashEnergy",             // Strobe energy in BCPS
        0xA20C : "SpatialFrequencyResponse",    //
        0xA20E : "FocalPlaneXResolution",   // Number of pixels in width direction per FocalPlaneResolutionUnit
        0xA20F : "FocalPlaneYResolution",   // Number of pixels in height direction per FocalPlaneResolutionUnit
        0xA210 : "FocalPlaneResolutionUnit",    // Unit for measuring FocalPlaneXResolution and FocalPlaneYResolution
        0xA214 : "SubjectLocation",         // Location of subject in image
        0xA215 : "ExposureIndex",           // Exposure index selected on camera
        0xA217 : "SensingMethod",           // Image sensor type
        0xA300 : "FileSource",              // Image source (3 == DSC)
        0xA301 : "SceneType",               // Scene type (1 == directly photographed)
        0xA302 : "CFAPattern",              // Color filter array geometric pattern
        0xA401 : "CustomRendered",          // Special processing
        0xA402 : "ExposureMode",            // Exposure mode
        0xA403 : "WhiteBalance",            // 1 = auto white balance, 2 = manual
        0xA404 : "DigitalZoomRation",       // Digital zoom ratio
        0xA405 : "FocalLengthIn35mmFilm",   // Equivalent foacl length assuming 35mm film camera (in mm)
        0xA406 : "SceneCaptureType",        // Type of scene
        0xA407 : "GainControl",             // Degree of overall image gain adjustment
        0xA408 : "Contrast",                // Direction of contrast processing applied by camera
        0xA409 : "Saturation",              // Direction of saturation processing applied by camera
        0xA40A : "Sharpness",               // Direction of sharpness processing applied by camera
        0xA40B : "DeviceSettingDescription",    //
        0xA40C : "SubjectDistanceRange",    // Distance to subject

        // other tags
        0xA005 : "InteroperabilityIFDPointer",
        0xA420 : "ImageUniqueID"            // Identifier assigned uniquely to each image
    };

    var TiffTags = EXIF.TiffTags = {
        0x0100 : "ImageWidth",
        0x0101 : "ImageHeight",
        0x8769 : "ExifIFDPointer",
        0x8825 : "GPSInfoIFDPointer",
        0xA005 : "InteroperabilityIFDPointer",
        0x0102 : "BitsPerSample",
        0x0103 : "Compression",
        0x0106 : "PhotometricInterpretation",
        0x0112 : "Orientation",
        0x0115 : "SamplesPerPixel",
        0x011C : "PlanarConfiguration",
        0x0212 : "YCbCrSubSampling",
        0x0213 : "YCbCrPositioning",
        0x011A : "XResolution",
        0x011B : "YResolution",
        0x0128 : "ResolutionUnit",
        0x0111 : "StripOffsets",
        0x0116 : "RowsPerStrip",
        0x0117 : "StripByteCounts",
        0x0201 : "JPEGInterchangeFormat",
        0x0202 : "JPEGInterchangeFormatLength",
        0x012D : "TransferFunction",
        0x013E : "WhitePoint",
        0x013F : "PrimaryChromaticities",
        0x0211 : "YCbCrCoefficients",
        0x0214 : "ReferenceBlackWhite",
        0x0132 : "DateTime",
        0x010E : "ImageDescription",
        0x010F : "Make",
        0x0110 : "Model",
        0x0131 : "Software",
        0x013B : "Artist",
        0x8298 : "Copyright"
    };

    var GPSTags = EXIF.GPSTags = {
        0x0000 : "GPSVersionID",
        0x0001 : "GPSLatitudeRef",
        0x0002 : "GPSLatitude",
        0x0003 : "GPSLongitudeRef",
        0x0004 : "GPSLongitude",
        0x0005 : "GPSAltitudeRef",
        0x0006 : "GPSAltitude",
        0x0007 : "GPSTimeStamp",
        0x0008 : "GPSSatellites",
        0x0009 : "GPSStatus",
        0x000A : "GPSMeasureMode",
        0x000B : "GPSDOP",
        0x000C : "GPSSpeedRef",
        0x000D : "GPSSpeed",
        0x000E : "GPSTrackRef",
        0x000F : "GPSTrack",
        0x0010 : "GPSImgDirectionRef",
        0x0011 : "GPSImgDirection",
        0x0012 : "GPSMapDatum",
        0x0013 : "GPSDestLatitudeRef",
        0x0014 : "GPSDestLatitude",
        0x0015 : "GPSDestLongitudeRef",
        0x0016 : "GPSDestLongitude",
        0x0017 : "GPSDestBearingRef",
        0x0018 : "GPSDestBearing",
        0x0019 : "GPSDestDistanceRef",
        0x001A : "GPSDestDistance",
        0x001B : "GPSProcessingMethod",
        0x001C : "GPSAreaInformation",
        0x001D : "GPSDateStamp",
        0x001E : "GPSDifferential"
    };

     // EXIF 2.3 Spec
    var IFD1Tags = EXIF.IFD1Tags = {
        0x0100: "ImageWidth",
        0x0101: "ImageHeight",
        0x0102: "BitsPerSample",
        0x0103: "Compression",
        0x0106: "PhotometricInterpretation",
        0x0111: "StripOffsets",
        0x0112: "Orientation",
        0x0115: "SamplesPerPixel",
        0x0116: "RowsPerStrip",
        0x0117: "StripByteCounts",
        0x011A: "XResolution",
        0x011B: "YResolution",
        0x011C: "PlanarConfiguration",
        0x0128: "ResolutionUnit",
        0x0201: "JpegIFOffset",    // When image format is JPEG, this value show offset to JPEG data stored.(aka "ThumbnailOffset" or "JPEGInterchangeFormat")
        0x0202: "JpegIFByteCount", // When image format is JPEG, this value shows data size of JPEG image (aka "ThumbnailLength" or "JPEGInterchangeFormatLength")
        0x0211: "YCbCrCoefficients",
        0x0212: "YCbCrSubSampling",
        0x0213: "YCbCrPositioning",
        0x0214: "ReferenceBlackWhite"
    };

    var StringValues = EXIF.StringValues = {
        ExposureProgram : {
            0 : "Not defined",
            1 : "Manual",
            2 : "Normal program",
            3 : "Aperture priority",
            4 : "Shutter priority",
            5 : "Creative program",
            6 : "Action program",
            7 : "Portrait mode",
            8 : "Landscape mode"
        },
        MeteringMode : {
            0 : "Unknown",
            1 : "Average",
            2 : "CenterWeightedAverage",
            3 : "Spot",
            4 : "MultiSpot",
            5 : "Pattern",
            6 : "Partial",
            255 : "Other"
        },
        LightSource : {
            0 : "Unknown",
            1 : "Daylight",
            2 : "Fluorescent",
            3 : "Tungsten (incandescent light)",
            4 : "Flash",
            9 : "Fine weather",
            10 : "Cloudy weather",
            11 : "Shade",
            12 : "Daylight fluorescent (D 5700 - 7100K)",
            13 : "Day white fluorescent (N 4600 - 5400K)",
            14 : "Cool white fluorescent (W 3900 - 4500K)",
            15 : "White fluorescent (WW 3200 - 3700K)",
            17 : "Standard light A",
            18 : "Standard light B",
            19 : "Standard light C",
            20 : "D55",
            21 : "D65",
            22 : "D75",
            23 : "D50",
            24 : "ISO studio tungsten",
            255 : "Other"
        },
        Flash : {
            0x0000 : "Flash did not fire",
            0x0001 : "Flash fired",
            0x0005 : "Strobe return light not detected",
            0x0007 : "Strobe return light detected",
            0x0009 : "Flash fired, compulsory flash mode",
            0x000D : "Flash fired, compulsory flash mode, return light not detected",
            0x000F : "Flash fired, compulsory flash mode, return light detected",
            0x0010 : "Flash did not fire, compulsory flash mode",
            0x0018 : "Flash did not fire, auto mode",
            0x0019 : "Flash fired, auto mode",
            0x001D : "Flash fired, auto mode, return light not detected",
            0x001F : "Flash fired, auto mode, return light detected",
            0x0020 : "No flash function",
            0x0041 : "Flash fired, red-eye reduction mode",
            0x0045 : "Flash fired, red-eye reduction mode, return light not detected",
            0x0047 : "Flash fired, red-eye reduction mode, return light detected",
            0x0049 : "Flash fired, compulsory flash mode, red-eye reduction mode",
            0x004D : "Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
            0x004F : "Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",
            0x0059 : "Flash fired, auto mode, red-eye reduction mode",
            0x005D : "Flash fired, auto mode, return light not detected, red-eye reduction mode",
            0x005F : "Flash fired, auto mode, return light detected, red-eye reduction mode"
        },
        SensingMethod : {
            1 : "Not defined",
            2 : "One-chip color area sensor",
            3 : "Two-chip color area sensor",
            4 : "Three-chip color area sensor",
            5 : "Color sequential area sensor",
            7 : "Trilinear sensor",
            8 : "Color sequential linear sensor"
        },
        SceneCaptureType : {
            0 : "Standard",
            1 : "Landscape",
            2 : "Portrait",
            3 : "Night scene"
        },
        SceneType : {
            1 : "Directly photographed"
        },
        CustomRendered : {
            0 : "Normal process",
            1 : "Custom process"
        },
        WhiteBalance : {
            0 : "Auto white balance",
            1 : "Manual white balance"
        },
        GainControl : {
            0 : "None",
            1 : "Low gain up",
            2 : "High gain up",
            3 : "Low gain down",
            4 : "High gain down"
        },
        Contrast : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        Saturation : {
            0 : "Normal",
            1 : "Low saturation",
            2 : "High saturation"
        },
        Sharpness : {
            0 : "Normal",
            1 : "Soft",
            2 : "Hard"
        },
        SubjectDistanceRange : {
            0 : "Unknown",
            1 : "Macro",
            2 : "Close view",
            3 : "Distant view"
        },
        FileSource : {
            3 : "DSC"
        },

        Components : {
            0 : "",
            1 : "Y",
            2 : "Cb",
            3 : "Cr",
            4 : "R",
            5 : "G",
            6 : "B"
        }
    };

    function addEvent(element, event, handler) {
        if (element.addEventListener) {
            element.addEventListener(event, handler, false);
        } else if (element.attachEvent) {
            element.attachEvent("on" + event, handler);
        }
    }

    function imageHasData(img) {
        return !!(img.exifdata);
    }


    function base64ToArrayBuffer(base64, contentType) {
        contentType = contentType || base64.match(/^data\:([^\;]+)\;base64,/mi)[1] || ''; // e.g. 'data:image/jpeg;base64,...' => 'image/jpeg'
        base64 = base64.replace(/^data\:([^\;]+)\;base64,/gmi, '');
        var binary = atob(base64);
        var len = binary.length;
        var buffer = new ArrayBuffer(len);
        var view = new Uint8Array(buffer);
        for (var i = 0; i < len; i++) {
            view[i] = binary.charCodeAt(i);
        }
        return buffer;
    }

    function objectURLToBlob(url, callback) {
        var http = new XMLHttpRequest();
        http.open("GET", url, true);
        http.responseType = "blob";
        http.onload = function(e) {
            if (this.status == 200 || this.status === 0) {
                callback(this.response);
            }
        };
        http.send();
    }

    function getImageData(img, callback) {
        function handleBinaryFile(binFile) {
            var data = findEXIFinJPEG(binFile);
            img.exifdata = data || {};
            var iptcdata = findIPTCinJPEG(binFile);
            img.iptcdata = iptcdata || {};
            if (EXIF.isXmpEnabled) {
               var xmpdata= findXMPinJPEG(binFile);
               img.xmpdata = xmpdata || {};               
            }
            if (callback) {
                callback.call(img);
            }
        }

        if (img.src) {
            if (/^data\:/i.test(img.src)) { // Data URI
                var arrayBuffer = base64ToArrayBuffer(img.src);
                handleBinaryFile(arrayBuffer);

            } else if (/^blob\:/i.test(img.src)) { // Object URL
                var fileReader = new FileReader();
                fileReader.onload = function(e) {
                    handleBinaryFile(e.target.result);
                };
                objectURLToBlob(img.src, function (blob) {
                    fileReader.readAsArrayBuffer(blob);
                });
            } else {
                var http = new XMLHttpRequest();
                http.onload = function() {
                    if (this.status == 200 || this.status === 0) {
                        handleBinaryFile(http.response);
                    } else {
                        throw "Could not load image";
                    }
                    http = null;
                };
                http.open("GET", img.src, true);
                http.responseType = "arraybuffer";
                http.send(null);
            }
        } else if (self.FileReader && (img instanceof self.Blob || img instanceof self.File)) {
            var fileReader = new FileReader();
            fileReader.onload = function(e) {
                if (debug) console.log("Got file of length " + e.target.result.byteLength);
                handleBinaryFile(e.target.result);
            };

            fileReader.readAsArrayBuffer(img);
        }
    }

    function findEXIFinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            marker;

        while (offset < length) {
            if (dataView.getUint8(offset) != 0xFF) {
                if (debug) console.log("Not a valid marker at offset " + offset + ", found: " + dataView.getUint8(offset));
                return false; // not a valid marker, something is wrong
            }

            marker = dataView.getUint8(offset + 1);
            if (debug) console.log(marker);

            // we could implement handling for other markers here,
            // but we're only looking for 0xFFE1 for EXIF data

            if (marker == 225) {
                if (debug) console.log("Found 0xFFE1 marker");

                return readEXIFData(dataView, offset + 4, dataView.getUint16(offset + 2) - 2);

                // offset += 2 + file.getShortAt(offset+2, true);

            } else {
                offset += 2 + dataView.getUint16(offset+2);
            }

        }

    }

    function findIPTCinJPEG(file) {
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
            if (debug) console.log("Not a valid JPEG");
            return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength;


        var isFieldSegmentStart = function(dataView, offset){
            return (
                dataView.getUint8(offset) === 0x38 &&
                dataView.getUint8(offset+1) === 0x42 &&
                dataView.getUint8(offset+2) === 0x49 &&
                dataView.getUint8(offset+3) === 0x4D &&
                dataView.getUint8(offset+4) === 0x04 &&
                dataView.getUint8(offset+5) === 0x04
            );
        };

        while (offset < length) {

            if ( isFieldSegmentStart(dataView, offset )){

                // Get the length of the name header (which is padded to an even number of bytes)
                var nameHeaderLength = dataView.getUint8(offset+7);
                if(nameHeaderLength % 2 !== 0) nameHeaderLength += 1;
                // Check for pre photoshop 6 format
                if(nameHeaderLength === 0) {
                    // Always 4
                    nameHeaderLength = 4;
                }

                var startOffset = offset + 8 + nameHeaderLength;
                var sectionLength = dataView.getUint16(offset + 6 + nameHeaderLength);

                return readIPTCData(file, startOffset, sectionLength);

                break;

            }


            // Not the marker, continue searching
            offset++;

        }

    }
    var IptcFieldMap = {
        0x78 : 'caption',
        0x6E : 'credit',
        0x19 : 'keywords',
        0x37 : 'dateCreated',
        0x50 : 'byline',
        0x55 : 'bylineTitle',
        0x7A : 'captionWriter',
        0x69 : 'headline',
        0x74 : 'copyright',
        0x0F : 'category'
    };
    function readIPTCData(file, startOffset, sectionLength){
        var dataView = new DataView(file);
        var data = {};
        var fieldValue, fieldName, dataSize, segmentType, segmentSize;
        var segmentStartPos = startOffset;
        while(segmentStartPos < startOffset+sectionLength) {
            if(dataView.getUint8(segmentStartPos) === 0x1C && dataView.getUint8(segmentStartPos+1) === 0x02){
                segmentType = dataView.getUint8(segmentStartPos+2);
                if(segmentType in IptcFieldMap) {
                    dataSize = dataView.getInt16(segmentStartPos+3);
                    segmentSize = dataSize + 5;
                    fieldName = IptcFieldMap[segmentType];
                    fieldValue = getStringFromDB(dataView, segmentStartPos+5, dataSize);
                    // Check if we already stored a value with this name
                    if(data.hasOwnProperty(fieldName)) {
                        // Value already stored with this name, create multivalue field
                        if(data[fieldName] instanceof Array) {
                            data[fieldName].push(fieldValue);
                        }
                        else {
                            data[fieldName] = [data[fieldName], fieldValue];
                        }
                    }
                    else {
                        data[fieldName] = fieldValue;
                    }
                }

            }
            segmentStartPos++;
        }
        return data;
    }



    function readTags(file, tiffStart, dirStart, strings, bigEnd) {
        var entries = file.getUint16(dirStart, !bigEnd),
            tags = {},
            entryOffset, tag,
            i;

        for (i=0;i<entries;i++) {
            entryOffset = dirStart + i*12 + 2;
            tag = strings[file.getUint16(entryOffset, !bigEnd)];
            if (!tag && debug) console.log("Unknown tag: " + file.getUint16(entryOffset, !bigEnd));
            tags[tag] = readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd);
        }
        return tags;
    }


    function readTagValue(file, entryOffset, tiffStart, dirStart, bigEnd) {
        var type = file.getUint16(entryOffset+2, !bigEnd),
            numValues = file.getUint32(entryOffset+4, !bigEnd),
            valueOffset = file.getUint32(entryOffset+8, !bigEnd) + tiffStart,
            offset,
            vals, val, n,
            numerator, denominator;

        switch (type) {
            case 1: // byte, 8-bit unsigned int
            case 7: // undefined, 8-bit byte, value depending on field
                if (numValues == 1) {
                    return file.getUint8(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint8(offset + n);
                    }
                    return vals;
                }

            case 2: // ascii, 8-bit byte
                offset = numValues > 4 ? valueOffset : (entryOffset + 8);
                return getStringFromDB(file, offset, numValues-1);

            case 3: // short, 16 bit int
                if (numValues == 1) {
                    return file.getUint16(entryOffset + 8, !bigEnd);
                } else {
                    offset = numValues > 2 ? valueOffset : (entryOffset + 8);
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint16(offset + 2*n, !bigEnd);
                    }
                    return vals;
                }

            case 4: // long, 32 bit int
                if (numValues == 1) {
                    return file.getUint32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getUint32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 5:    // rational = two long values, first is numerator, second is denominator
                if (numValues == 1) {
                    numerator = file.getUint32(valueOffset, !bigEnd);
                    denominator = file.getUint32(valueOffset+4, !bigEnd);
                    val = new Number(numerator / denominator);
                    val.numerator = numerator;
                    val.denominator = denominator;
                    return val;
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        numerator = file.getUint32(valueOffset + 8*n, !bigEnd);
                        denominator = file.getUint32(valueOffset+4 + 8*n, !bigEnd);
                        vals[n] = new Number(numerator / denominator);
                        vals[n].numerator = numerator;
                        vals[n].denominator = denominator;
                    }
                    return vals;
                }

            case 9: // slong, 32 bit signed int
                if (numValues == 1) {
                    return file.getInt32(entryOffset + 8, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 4*n, !bigEnd);
                    }
                    return vals;
                }

            case 10: // signed rational, two slongs, first is numerator, second is denominator
                if (numValues == 1) {
                    return file.getInt32(valueOffset, !bigEnd) / file.getInt32(valueOffset+4, !bigEnd);
                } else {
                    vals = [];
                    for (n=0;n<numValues;n++) {
                        vals[n] = file.getInt32(valueOffset + 8*n, !bigEnd) / file.getInt32(valueOffset+4 + 8*n, !bigEnd);
                    }
                    return vals;
                }
        }
    }

    /**
    * Given an IFD (Image File Directory) start offset
    * returns an offset to next IFD or 0 if it's the last IFD.
    */
    function getNextIFDOffset(dataView, dirStart, bigEnd){
        //the first 2bytes means the number of directory entries contains in this IFD
        var entries = dataView.getUint16(dirStart, !bigEnd);

        // After last directory entry, there is a 4bytes of data,
        // it means an offset to next IFD.
        // If its value is '0x00000000', it means this is the last IFD and there is no linked IFD.

        return dataView.getUint32(dirStart + 2 + entries * 12, !bigEnd); // each entry is 12 bytes long
    }

    function readThumbnailImage(dataView, tiffStart, firstIFDOffset, bigEnd){
        // get the IFD1 offset
        var IFD1OffsetPointer = getNextIFDOffset(dataView, tiffStart+firstIFDOffset, bigEnd);

        if (!IFD1OffsetPointer) {
            // console.log('******** IFD1Offset is empty, image thumb not found ********');
            return {};
        }
        else if (IFD1OffsetPointer > dataView.byteLength) { // this should not happen
            // console.log('******** IFD1Offset is outside the bounds of the DataView ********');
            return {};
        }
        // console.log('*******  thumbnail IFD offset (IFD1) is: %s', IFD1OffsetPointer);

        var thumbTags = readTags(dataView, tiffStart, tiffStart + IFD1OffsetPointer, IFD1Tags, bigEnd)

        // EXIF 2.3 specification for JPEG format thumbnail

        // If the value of Compression(0x0103) Tag in IFD1 is '6', thumbnail image format is JPEG.
        // Most of Exif image uses JPEG format for thumbnail. In that case, you can get offset of thumbnail
        // by JpegIFOffset(0x0201) Tag in IFD1, size of thumbnail by JpegIFByteCount(0x0202) Tag.
        // Data format is ordinary JPEG format, starts from 0xFFD8 and ends by 0xFFD9. It seems that
        // JPEG format and 160x120pixels of size are recommended thumbnail format for Exif2.1 or later.

        if (thumbTags['Compression']) {
            // console.log('Thumbnail image found!');

            switch (thumbTags['Compression']) {
                case 6:
                    // console.log('Thumbnail image format is JPEG');
                    if (thumbTags.JpegIFOffset && thumbTags.JpegIFByteCount) {
                    // extract the thumbnail
                        var tOffset = tiffStart + thumbTags.JpegIFOffset;
                        var tLength = thumbTags.JpegIFByteCount;
                        thumbTags['blob'] = new Blob([new Uint8Array(dataView.buffer, tOffset, tLength)], {
                            type: 'image/jpeg'
                        });
                    }
                break;

            case 1:
                console.log("Thumbnail image format is TIFF, which is not implemented.");
                break;
            default:
                console.log("Unknown thumbnail image format '%s'", thumbTags['Compression']);
            }
        }
        else if (thumbTags['PhotometricInterpretation'] == 2) {
            console.log("Thumbnail image format is RGB, which is not implemented.");
        }
        return thumbTags;
    }

    function getStringFromDB(buffer, start, length) {
        var outstr = "";
        for (n = start; n < start+length; n++) {
            outstr += String.fromCharCode(buffer.getUint8(n));
        }
        return outstr;
    }

    function readEXIFData(file, start) {
        if (getStringFromDB(file, start, 4) != "Exif") {
            if (debug) console.log("Not valid EXIF data! " + getStringFromDB(file, start, 4));
            return false;
        }

        var bigEnd,
            tags, tag,
            exifData, gpsData,
            tiffOffset = start + 6;

        // test for TIFF validity and endianness
        if (file.getUint16(tiffOffset) == 0x4949) {
            bigEnd = false;
        } else if (file.getUint16(tiffOffset) == 0x4D4D) {
            bigEnd = true;
        } else {
            if (debug) console.log("Not valid TIFF data! (no 0x4949 or 0x4D4D)");
            return false;
        }

        if (file.getUint16(tiffOffset+2, !bigEnd) != 0x002A) {
            if (debug) console.log("Not valid TIFF data! (no 0x002A)");
            return false;
        }

        var firstIFDOffset = file.getUint32(tiffOffset+4, !bigEnd);

        if (firstIFDOffset < 0x00000008) {
            if (debug) console.log("Not valid TIFF data! (First offset less than 8)", file.getUint32(tiffOffset+4, !bigEnd));
            return false;
        }

        tags = readTags(file, tiffOffset, tiffOffset + firstIFDOffset, TiffTags, bigEnd);

        if (tags.ExifIFDPointer) {
            exifData = readTags(file, tiffOffset, tiffOffset + tags.ExifIFDPointer, ExifTags, bigEnd);
            for (tag in exifData) {
                switch (tag) {
                    case "LightSource" :
                    case "Flash" :
                    case "MeteringMode" :
                    case "ExposureProgram" :
                    case "SensingMethod" :
                    case "SceneCaptureType" :
                    case "SceneType" :
                    case "CustomRendered" :
                    case "WhiteBalance" :
                    case "GainControl" :
                    case "Contrast" :
                    case "Saturation" :
                    case "Sharpness" :
                    case "SubjectDistanceRange" :
                    case "FileSource" :
                        exifData[tag] = StringValues[tag][exifData[tag]];
                        break;

                    case "ExifVersion" :
                    case "FlashpixVersion" :
                        exifData[tag] = String.fromCharCode(exifData[tag][0], exifData[tag][1], exifData[tag][2], exifData[tag][3]);
                        break;

                    case "ComponentsConfiguration" :
                        exifData[tag] =
                            StringValues.Components[exifData[tag][0]] +
                            StringValues.Components[exifData[tag][1]] +
                            StringValues.Components[exifData[tag][2]] +
                            StringValues.Components[exifData[tag][3]];
                        break;
                }
                tags[tag] = exifData[tag];
            }
        }

        if (tags.GPSInfoIFDPointer) {
            gpsData = readTags(file, tiffOffset, tiffOffset + tags.GPSInfoIFDPointer, GPSTags, bigEnd);
            for (tag in gpsData) {
                switch (tag) {
                    case "GPSVersionID" :
                        gpsData[tag] = gpsData[tag][0] +
                            "." + gpsData[tag][1] +
                            "." + gpsData[tag][2] +
                            "." + gpsData[tag][3];
                        break;
                }
                tags[tag] = gpsData[tag];
            }
        }

        // extract thumbnail
        tags['thumbnail'] = readThumbnailImage(file, tiffOffset, firstIFDOffset, bigEnd);

        return tags;
    }

   function findXMPinJPEG(file) {

        if (!('DOMParser' in self)) {
            // console.warn('XML parsing not supported without DOMParser');
            return;
        }
        var dataView = new DataView(file);

        if (debug) console.log("Got file of length " + file.byteLength);
        if ((dataView.getUint8(0) != 0xFF) || (dataView.getUint8(1) != 0xD8)) {
           if (debug) console.log("Not a valid JPEG");
           return false; // not a valid jpeg
        }

        var offset = 2,
            length = file.byteLength,
            dom = new DOMParser();

        while (offset < (length-4)) {
            if (getStringFromDB(dataView, offset, 4) == "http") {
                var startOffset = offset - 1;
                var sectionLength = dataView.getUint16(offset - 2) - 1;
                var xmpString = getStringFromDB(dataView, startOffset, sectionLength)
                var xmpEndIndex = xmpString.indexOf('xmpmeta>') + 8;
                xmpString = xmpString.substring( xmpString.indexOf( '<x:xmpmeta' ), xmpEndIndex );

                var indexOfXmp = xmpString.indexOf('x:xmpmeta') + 10
                //Many custom written programs embed xmp/xml without any namespace. Following are some of them.
                //Without these namespaces, XML is thought to be invalid by parsers
                xmpString = xmpString.slice(0, indexOfXmp)
                            + 'xmlns:Iptc4xmpCore="http://iptc.org/std/Iptc4xmpCore/1.0/xmlns/" '
                            + 'xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" '
                            + 'xmlns:tiff="http://ns.adobe.com/tiff/1.0/" '
                            + 'xmlns:plus="http://schemas.android.com/apk/lib/com.google.android.gms.plus" '
                            + 'xmlns:ext="http://www.gettyimages.com/xsltExtension/1.0" '
                            + 'xmlns:exif="http://ns.adobe.com/exif/1.0/" '
                            + 'xmlns:stEvt="http://ns.adobe.com/xap/1.0/sType/ResourceEvent#" '
                            + 'xmlns:stRef="http://ns.adobe.com/xap/1.0/sType/ResourceRef#" '
                            + 'xmlns:crs="http://ns.adobe.com/camera-raw-settings/1.0/" '
                            + 'xmlns:xapGImg="http://ns.adobe.com/xap/1.0/g/img/" '
                            + 'xmlns:Iptc4xmpExt="http://iptc.org/std/Iptc4xmpExt/2008-02-29/" '
                            + xmpString.slice(indexOfXmp)

                var domDocument = dom.parseFromString( xmpString, 'text/xml' );
                return xml2Object(domDocument);
            } else{
             offset++;
            }
        }
    }

    function xml2json(xml) {
        var json = {};
      
        if (xml.nodeType == 1) { // element node
          if (xml.attributes.length > 0) {
            json['@attributes'] = {};
            for (var j = 0; j < xml.attributes.length; j++) {
              var attribute = xml.attributes.item(j);
              json['@attributes'][attribute.nodeName] = attribute.nodeValue;
            }
          }
        } else if (xml.nodeType == 3) { // text node
          return xml.nodeValue;
        }
      
        // deal with children
        if (xml.hasChildNodes()) {
          for(var i = 0; i < xml.childNodes.length; i++) {
            var child = xml.childNodes.item(i);
            var nodeName = child.nodeName;
            if (json[nodeName] == null) {
              json[nodeName] = xml2json(child);
            } else {
              if (json[nodeName].push == null) {
                var old = json[nodeName];
                json[nodeName] = [];
                json[nodeName].push(old);
              }
              json[nodeName].push(xml2json(child));
            }
          }
        }
        
        return json;
    }

    function xml2Object(xml) {
        try {
            var obj = {};
            if (xml.children.length > 0) {
              for (var i = 0; i < xml.children.length; i++) {
                var item = xml.children.item(i);
                var attributes = item.attributes;
                for(var idx in attributes) {
                    var itemAtt = attributes[idx];
                    var dataKey = itemAtt.nodeName;
                    var dataValue = itemAtt.nodeValue;

                    if(dataKey !== undefined) {
                        obj[dataKey] = dataValue;
                    }
                }
                var nodeName = item.nodeName;

                if (typeof (obj[nodeName]) == "undefined") {
                  obj[nodeName] = xml2json(item);
                } else {
                  if (typeof (obj[nodeName].push) == "undefined") {
                    var old = obj[nodeName];

                    obj[nodeName] = [];
                    obj[nodeName].push(old);
                  }
                  obj[nodeName].push(xml2json(item));
                }
              }
            } else {
              obj = xml.textContent;
            }
            return obj;
          } catch (e) {
              console.log(e.message);
          }
    }

    EXIF.enableXmp = function() {
        EXIF.isXmpEnabled = true;
    }

    EXIF.disableXmp = function() {
        EXIF.isXmpEnabled = false;
    }

    EXIF.getData = function(img, callback) {
        if (((self.Image && img instanceof self.Image)
            || (self.HTMLImageElement && img instanceof self.HTMLImageElement))
            && !img.complete)
            return false;

        if (!imageHasData(img)) {
            getImageData(img, callback);
        } else {
            if (callback) {
                callback.call(img);
            }
        }
        return true;
    }

    EXIF.getTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.exifdata[tag];
    }
    
    EXIF.getIptcTag = function(img, tag) {
        if (!imageHasData(img)) return;
        return img.iptcdata[tag];
    }

    EXIF.getAllTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.exifdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }
    
    EXIF.getAllIptcTags = function(img) {
        if (!imageHasData(img)) return {};
        var a,
            data = img.iptcdata,
            tags = {};
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                tags[a] = data[a];
            }
        }
        return tags;
    }

    EXIF.pretty = function(img) {
        if (!imageHasData(img)) return "";
        var a,
            data = img.exifdata,
            strPretty = "";
        for (a in data) {
            if (data.hasOwnProperty(a)) {
                if (typeof data[a] == "object") {
                    if (data[a] instanceof Number) {
                        strPretty += a + " : " + data[a] + " [" + data[a].numerator + "/" + data[a].denominator + "]\r\n";
                    } else {
                        strPretty += a + " : [" + data[a].length + " values]\r\n";
                    }
                } else {
                    strPretty += a + " : " + data[a] + "\r\n";
                }
            }
        }
        return strPretty;
    }

    EXIF.readFromBinaryFile = function(file) {
        return findEXIFinJPEG(file);
    }

    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            return EXIF;
        }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
}.call(this));



/***/ }),

/***/ "./node_modules/latlon-geohash/latlon-geohash.js":
/*!*******************************************************!*\
  !*** ./node_modules/latlon-geohash/latlon-geohash.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */
/* Geohash encoding/decoding and associated functions   (c) Chris Veness 2014-2019 / MIT Licence  */
/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

const base32 = '0123456789bcdefghjkmnpqrstuvwxyz'; // (geohash-specific) Base32 map


/**
 * Geohash: Gustavo Niemeyer’s geocoding system.
 */
class Geohash {

    /**
     * Encodes latitude/longitude to geohash, either to specified precision or to automatically
     * evaluated precision.
     *
     * @param   {number} lat - Latitude in degrees.
     * @param   {number} lon - Longitude in degrees.
     * @param   {number} [precision] - Number of characters in resulting geohash.
     * @returns {string} Geohash of supplied latitude/longitude.
     * @throws  Invalid geohash.
     *
     * @example
     *     const geohash = Geohash.encode(52.205, 0.119, 7); // => 'u120fxw'
     */
    static encode(lat, lon, precision) {
        // infer precision?
        if (typeof precision == 'undefined') {
            // refine geohash until it matches precision of supplied lat/lon
            for (let p=1; p<=12; p++) {
                const hash = Geohash.encode(lat, lon, p);
                const posn = Geohash.decode(hash);
                if (posn.lat==lat && posn.lon==lon) return hash;
            }
            precision = 12; // set to maximum
        }

        lat = Number(lat);
        lon = Number(lon);
        precision = Number(precision);

        if (isNaN(lat) || isNaN(lon) || isNaN(precision)) throw new Error('Invalid geohash');

        let idx = 0; // index into base32 map
        let bit = 0; // each char holds 5 bits
        let evenBit = true;
        let geohash = '';

        let latMin =  -90, latMax =  90;
        let lonMin = -180, lonMax = 180;

        while (geohash.length < precision) {
            if (evenBit) {
                // bisect E-W longitude
                const lonMid = (lonMin + lonMax) / 2;
                if (lon >= lonMid) {
                    idx = idx*2 + 1;
                    lonMin = lonMid;
                } else {
                    idx = idx*2;
                    lonMax = lonMid;
                }
            } else {
                // bisect N-S latitude
                const latMid = (latMin + latMax) / 2;
                if (lat >= latMid) {
                    idx = idx*2 + 1;
                    latMin = latMid;
                } else {
                    idx = idx*2;
                    latMax = latMid;
                }
            }
            evenBit = !evenBit;

            if (++bit == 5) {
                // 5 bits gives us a character: append it and start over
                geohash += base32.charAt(idx);
                bit = 0;
                idx = 0;
            }
        }

        return geohash;
    }


    /**
     * Decode geohash to latitude/longitude (location is approximate centre of geohash cell,
     *     to reasonable precision).
     *
     * @param   {string} geohash - Geohash string to be converted to latitude/longitude.
     * @returns {{lat:number, lon:number}} (Center of) geohashed location.
     * @throws  Invalid geohash.
     *
     * @example
     *     const latlon = Geohash.decode('u120fxw'); // => { lat: 52.205, lon: 0.1188 }
     */
    static decode(geohash) {

        const bounds = Geohash.bounds(geohash); // <-- the hard work
        // now just determine the centre of the cell...

        const latMin = bounds.sw.lat, lonMin = bounds.sw.lon;
        const latMax = bounds.ne.lat, lonMax = bounds.ne.lon;

        // cell centre
        let lat = (latMin + latMax)/2;
        let lon = (lonMin + lonMax)/2;

        // round to close to centre without excessive precision: ⌊2-log10(Δ°)⌋ decimal places
        lat = lat.toFixed(Math.floor(2-Math.log(latMax-latMin)/Math.LN10));
        lon = lon.toFixed(Math.floor(2-Math.log(lonMax-lonMin)/Math.LN10));

        return { lat: Number(lat), lon: Number(lon) };
    }


    /**
     * Returns SW/NE latitude/longitude bounds of specified geohash.
     *
     * @param   {string} geohash - Cell that bounds are required of.
     * @returns {{sw: {lat: number, lon: number}, ne: {lat: number, lon: number}}}
     * @throws  Invalid geohash.
     */
    static bounds(geohash) {
        if (geohash.length == 0) throw new Error('Invalid geohash');

        geohash = geohash.toLowerCase();

        let evenBit = true;
        let latMin =  -90, latMax =  90;
        let lonMin = -180, lonMax = 180;

        for (let i=0; i<geohash.length; i++) {
            const chr = geohash.charAt(i);
            const idx = base32.indexOf(chr);
            if (idx == -1) throw new Error('Invalid geohash');

            for (let n=4; n>=0; n--) {
                const bitN = idx >> n & 1;
                if (evenBit) {
                    // longitude
                    const lonMid = (lonMin+lonMax) / 2;
                    if (bitN == 1) {
                        lonMin = lonMid;
                    } else {
                        lonMax = lonMid;
                    }
                } else {
                    // latitude
                    const latMid = (latMin+latMax) / 2;
                    if (bitN == 1) {
                        latMin = latMid;
                    } else {
                        latMax = latMid;
                    }
                }
                evenBit = !evenBit;
            }
        }

        const bounds = {
            sw: { lat: latMin, lon: lonMin },
            ne: { lat: latMax, lon: lonMax },
        };

        return bounds;
    }


    /**
     * Determines adjacent cell in given direction.
     *
     * @param   geohash - Cell to which adjacent cell is required.
     * @param   direction - Direction from geohash (N/S/E/W).
     * @returns {string} Geocode of adjacent cell.
     * @throws  Invalid geohash.
     */
    static adjacent(geohash, direction) {
        // based on github.com/davetroy/geohash-js

        geohash = geohash.toLowerCase();
        direction = direction.toLowerCase();

        if (geohash.length == 0) throw new Error('Invalid geohash');
        if ('nsew'.indexOf(direction) == -1) throw new Error('Invalid direction');

        const neighbour = {
            n: [ 'p0r21436x8zb9dcf5h7kjnmqesgutwvy', 'bc01fg45238967deuvhjyznpkmstqrwx' ],
            s: [ '14365h7k9dcfesgujnmqp0r2twvyx8zb', '238967debc01fg45kmstqrwxuvhjyznp' ],
            e: [ 'bc01fg45238967deuvhjyznpkmstqrwx', 'p0r21436x8zb9dcf5h7kjnmqesgutwvy' ],
            w: [ '238967debc01fg45kmstqrwxuvhjyznp', '14365h7k9dcfesgujnmqp0r2twvyx8zb' ],
        };
        const border = {
            n: [ 'prxz',     'bcfguvyz' ],
            s: [ '028b',     '0145hjnp' ],
            e: [ 'bcfguvyz', 'prxz'     ],
            w: [ '0145hjnp', '028b'     ],
        };

        const lastCh = geohash.slice(-1);    // last character of hash
        let parent = geohash.slice(0, -1); // hash without last character

        const type = geohash.length % 2;

        // check for edge-cases which don't share common prefix
        if (border[direction][type].indexOf(lastCh) != -1 && parent != '') {
            parent = Geohash.adjacent(parent, direction);
        }

        // append letter for direction to parent
        return parent + base32.charAt(neighbour[direction][type].indexOf(lastCh));
    }


    /**
     * Returns all 8 adjacent cells to specified geohash.
     *
     * @param   {string} geohash - Geohash neighbours are required of.
     * @returns {{n,ne,e,se,s,sw,w,nw: string}}
     * @throws  Invalid geohash.
     */
    static neighbours(geohash) {
        return {
            'n':  Geohash.adjacent(geohash, 'n'),
            'ne': Geohash.adjacent(Geohash.adjacent(geohash, 'n'), 'e'),
            'e':  Geohash.adjacent(geohash, 'e'),
            'se': Geohash.adjacent(Geohash.adjacent(geohash, 's'), 'e'),
            's':  Geohash.adjacent(geohash, 's'),
            'sw': Geohash.adjacent(Geohash.adjacent(geohash, 's'), 'w'),
            'w':  Geohash.adjacent(geohash, 'w'),
            'nw': Geohash.adjacent(Geohash.adjacent(geohash, 'n'), 'w'),
        };
    }

}

/* - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -  */

/* harmony default export */ __webpack_exports__["default"] = (Geohash);


/***/ }),

/***/ "./node_modules/long/dist/long.js":
/*!****************************************!*\
  !*** ./node_modules/long/dist/long.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 Copyright 2013 Daniel Wirtz <dcode@dcode.io>
 Copyright 2009 The Closure Library Authors. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS-IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

/**
 * @license long.js (c) 2013 Daniel Wirtz <dcode@dcode.io>
 * Released under the Apache License, Version 2.0
 * see: https://github.com/dcodeIO/long.js for details
 */
(function(global, factory) {

    /* AMD */ if (true)
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    /* CommonJS */ else {}

})(this, function() {
    "use strict";

    /**
     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
     *  See the from* functions below for more convenient ways of constructing Longs.
     * @exports Long
     * @class A Long class for representing a 64 bit two's-complement integer value.
     * @param {number} low The low (signed) 32 bits of the long
     * @param {number} high The high (signed) 32 bits of the long
     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
     * @constructor
     */
    function Long(low, high, unsigned) {

        /**
         * The low 32 bits as a signed value.
         * @type {number}
         */
        this.low = low | 0;

        /**
         * The high 32 bits as a signed value.
         * @type {number}
         */
        this.high = high | 0;

        /**
         * Whether unsigned or not.
         * @type {boolean}
         */
        this.unsigned = !!unsigned;
    }

    // The internal representation of a long is the two given signed, 32-bit values.
    // We use 32-bit pieces because these are the size of integers on which
    // Javascript performs bit-operations.  For operations like addition and
    // multiplication, we split each number into 16 bit pieces, which can easily be
    // multiplied within Javascript's floating-point representation without overflow
    // or change in sign.
    //
    // In the algorithms below, we frequently reduce the negative case to the
    // positive case by negating the input(s) and then post-processing the result.
    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
    // a positive number, it overflows back into a negative).  Not handling this
    // case would often result in infinite recursion.
    //
    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
    // methods on which they depend.

    /**
     * An indicator used to reliably determine if an object is a Long or not.
     * @type {boolean}
     * @const
     * @private
     */
    Long.prototype.__isLong__;

    Object.defineProperty(Long.prototype, "__isLong__", {
        value: true,
        enumerable: false,
        configurable: false
    });

    /**
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     * @inner
     */
    function isLong(obj) {
        return (obj && obj["__isLong__"]) === true;
    }

    /**
     * Tests if the specified object is a Long.
     * @function
     * @param {*} obj Object
     * @returns {boolean}
     */
    Long.isLong = isLong;

    /**
     * A cache of the Long representations of small integer values.
     * @type {!Object}
     * @inner
     */
    var INT_CACHE = {};

    /**
     * A cache of the Long representations of small unsigned integer values.
     * @type {!Object}
     * @inner
     */
    var UINT_CACHE = {};

    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromInt(value, unsigned) {
        var obj, cachedObj, cache;
        if (unsigned) {
            value >>>= 0;
            if (cache = (0 <= value && value < 256)) {
                cachedObj = UINT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
            if (cache)
                UINT_CACHE[value] = obj;
            return obj;
        } else {
            value |= 0;
            if (cache = (-128 <= value && value < 128)) {
                cachedObj = INT_CACHE[value];
                if (cachedObj)
                    return cachedObj;
            }
            obj = fromBits(value, value < 0 ? -1 : 0, false);
            if (cache)
                INT_CACHE[value] = obj;
            return obj;
        }
    }

    /**
     * Returns a Long representing the given 32 bit integer value.
     * @function
     * @param {number} value The 32 bit integer in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromInt = fromInt;

    /**
     * @param {number} value
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromNumber(value, unsigned) {
        if (isNaN(value) || !isFinite(value))
            return unsigned ? UZERO : ZERO;
        if (unsigned) {
            if (value < 0)
                return UZERO;
            if (value >= TWO_PWR_64_DBL)
                return MAX_UNSIGNED_VALUE;
        } else {
            if (value <= -TWO_PWR_63_DBL)
                return MIN_VALUE;
            if (value + 1 >= TWO_PWR_63_DBL)
                return MAX_VALUE;
        }
        if (value < 0)
            return fromNumber(-value, unsigned).neg();
        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
    }

    /**
     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
     * @function
     * @param {number} value The number in question
     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromNumber = fromNumber;

    /**
     * @param {number} lowBits
     * @param {number} highBits
     * @param {boolean=} unsigned
     * @returns {!Long}
     * @inner
     */
    function fromBits(lowBits, highBits, unsigned) {
        return new Long(lowBits, highBits, unsigned);
    }

    /**
     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
     *  assumed to use 32 bits.
     * @function
     * @param {number} lowBits The low 32 bits
     * @param {number} highBits The high 32 bits
     * @param {boolean=} unsigned Whether unsigned or not, defaults to `false` for signed
     * @returns {!Long} The corresponding Long value
     */
    Long.fromBits = fromBits;

    /**
     * @function
     * @param {number} base
     * @param {number} exponent
     * @returns {number}
     * @inner
     */
    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)

    /**
     * @param {string} str
     * @param {(boolean|number)=} unsigned
     * @param {number=} radix
     * @returns {!Long}
     * @inner
     */
    function fromString(str, unsigned, radix) {
        if (str.length === 0)
            throw Error('empty string');
        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
            return ZERO;
        if (typeof unsigned === 'number') {
            // For goog.math.long compatibility
            radix = unsigned,
            unsigned = false;
        } else {
            unsigned = !! unsigned;
        }
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');

        var p;
        if ((p = str.indexOf('-')) > 0)
            throw Error('interior hyphen');
        else if (p === 0) {
            return fromString(str.substring(1), unsigned, radix).neg();
        }

        // Do several (8) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 8));

        var result = ZERO;
        for (var i = 0; i < str.length; i += 8) {
            var size = Math.min(8, str.length - i),
                value = parseInt(str.substring(i, i + size), radix);
            if (size < 8) {
                var power = fromNumber(pow_dbl(radix, size));
                result = result.mul(power).add(fromNumber(value));
            } else {
                result = result.mul(radixToPower);
                result = result.add(fromNumber(value));
            }
        }
        result.unsigned = unsigned;
        return result;
    }

    /**
     * Returns a Long representation of the given string, written using the specified radix.
     * @function
     * @param {string} str The textual representation of the Long
     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to `false` for signed
     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
     * @returns {!Long} The corresponding Long value
     */
    Long.fromString = fromString;

    /**
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
     * @returns {!Long}
     * @inner
     */
    function fromValue(val) {
        if (val /* is compatible */ instanceof Long)
            return val;
        if (typeof val === 'number')
            return fromNumber(val);
        if (typeof val === 'string')
            return fromString(val);
        // Throws for non-objects, converts non-instanceof Long:
        return fromBits(val.low, val.high, val.unsigned);
    }

    /**
     * Converts the specified value to a Long.
     * @function
     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
     * @returns {!Long}
     */
    Long.fromValue = fromValue;

    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
    // no runtime penalty for these.

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_16_DBL = 1 << 16;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_24_DBL = 1 << 24;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;

    /**
     * @type {number}
     * @const
     * @inner
     */
    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;

    /**
     * @type {!Long}
     * @const
     * @inner
     */
    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);

    /**
     * @type {!Long}
     * @inner
     */
    var ZERO = fromInt(0);

    /**
     * Signed zero.
     * @type {!Long}
     */
    Long.ZERO = ZERO;

    /**
     * @type {!Long}
     * @inner
     */
    var UZERO = fromInt(0, true);

    /**
     * Unsigned zero.
     * @type {!Long}
     */
    Long.UZERO = UZERO;

    /**
     * @type {!Long}
     * @inner
     */
    var ONE = fromInt(1);

    /**
     * Signed one.
     * @type {!Long}
     */
    Long.ONE = ONE;

    /**
     * @type {!Long}
     * @inner
     */
    var UONE = fromInt(1, true);

    /**
     * Unsigned one.
     * @type {!Long}
     */
    Long.UONE = UONE;

    /**
     * @type {!Long}
     * @inner
     */
    var NEG_ONE = fromInt(-1);

    /**
     * Signed negative one.
     * @type {!Long}
     */
    Long.NEG_ONE = NEG_ONE;

    /**
     * @type {!Long}
     * @inner
     */
    var MAX_VALUE = fromBits(0xFFFFFFFF|0, 0x7FFFFFFF|0, false);

    /**
     * Maximum signed value.
     * @type {!Long}
     */
    Long.MAX_VALUE = MAX_VALUE;

    /**
     * @type {!Long}
     * @inner
     */
    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF|0, 0xFFFFFFFF|0, true);

    /**
     * Maximum unsigned value.
     * @type {!Long}
     */
    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;

    /**
     * @type {!Long}
     * @inner
     */
    var MIN_VALUE = fromBits(0, 0x80000000|0, false);

    /**
     * Minimum signed value.
     * @type {!Long}
     */
    Long.MIN_VALUE = MIN_VALUE;

    /**
     * @alias Long.prototype
     * @inner
     */
    var LongPrototype = Long.prototype;

    /**
     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
     * @returns {number}
     */
    LongPrototype.toInt = function toInt() {
        return this.unsigned ? this.low >>> 0 : this.low;
    };

    /**
     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
     * @returns {number}
     */
    LongPrototype.toNumber = function toNumber() {
        if (this.unsigned)
            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
    };

    /**
     * Converts the Long to a string written in the specified radix.
     * @param {number=} radix Radix (2-36), defaults to 10
     * @returns {string}
     * @override
     * @throws {RangeError} If `radix` is out of range
     */
    LongPrototype.toString = function toString(radix) {
        radix = radix || 10;
        if (radix < 2 || 36 < radix)
            throw RangeError('radix');
        if (this.isZero())
            return '0';
        if (this.isNegative()) { // Unsigned Longs are never negative
            if (this.eq(MIN_VALUE)) {
                // We need to change the Long value before it can be negated, so we remove
                // the bottom-most digit in this base and then recurse to do the rest.
                var radixLong = fromNumber(radix),
                    div = this.div(radixLong),
                    rem1 = div.mul(radixLong).sub(this);
                return div.toString(radix) + rem1.toInt().toString(radix);
            } else
                return '-' + this.neg().toString(radix);
        }

        // Do several (6) digits each time through the loop, so as to
        // minimize the calls to the very expensive emulated div.
        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
            rem = this;
        var result = '';
        while (true) {
            var remDiv = rem.div(radixToPower),
                intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
                digits = intval.toString(radix);
            rem = remDiv;
            if (rem.isZero())
                return digits + result;
            else {
                while (digits.length < 6)
                    digits = '0' + digits;
                result = '' + digits + result;
            }
        }
    };

    /**
     * Gets the high 32 bits as a signed integer.
     * @returns {number} Signed high bits
     */
    LongPrototype.getHighBits = function getHighBits() {
        return this.high;
    };

    /**
     * Gets the high 32 bits as an unsigned integer.
     * @returns {number} Unsigned high bits
     */
    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
        return this.high >>> 0;
    };

    /**
     * Gets the low 32 bits as a signed integer.
     * @returns {number} Signed low bits
     */
    LongPrototype.getLowBits = function getLowBits() {
        return this.low;
    };

    /**
     * Gets the low 32 bits as an unsigned integer.
     * @returns {number} Unsigned low bits
     */
    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
        return this.low >>> 0;
    };

    /**
     * Gets the number of bits needed to represent the absolute value of this Long.
     * @returns {number}
     */
    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
        if (this.isNegative()) // Unsigned Longs are never negative
            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
        var val = this.high != 0 ? this.high : this.low;
        for (var bit = 31; bit > 0; bit--)
            if ((val & (1 << bit)) != 0)
                break;
        return this.high != 0 ? bit + 33 : bit + 1;
    };

    /**
     * Tests if this Long's value equals zero.
     * @returns {boolean}
     */
    LongPrototype.isZero = function isZero() {
        return this.high === 0 && this.low === 0;
    };

    /**
     * Tests if this Long's value is negative.
     * @returns {boolean}
     */
    LongPrototype.isNegative = function isNegative() {
        return !this.unsigned && this.high < 0;
    };

    /**
     * Tests if this Long's value is positive.
     * @returns {boolean}
     */
    LongPrototype.isPositive = function isPositive() {
        return this.unsigned || this.high >= 0;
    };

    /**
     * Tests if this Long's value is odd.
     * @returns {boolean}
     */
    LongPrototype.isOdd = function isOdd() {
        return (this.low & 1) === 1;
    };

    /**
     * Tests if this Long's value is even.
     * @returns {boolean}
     */
    LongPrototype.isEven = function isEven() {
        return (this.low & 1) === 0;
    };

    /**
     * Tests if this Long's value equals the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.equals = function equals(other) {
        if (!isLong(other))
            other = fromValue(other);
        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
            return false;
        return this.high === other.high && this.low === other.low;
    };

    /**
     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.eq = LongPrototype.equals;

    /**
     * Tests if this Long's value differs from the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.notEquals = function notEquals(other) {
        return !this.eq(/* validates */ other);
    };

    /**
     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.neq = LongPrototype.notEquals;

    /**
     * Tests if this Long's value is less than the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lessThan = function lessThan(other) {
        return this.comp(/* validates */ other) < 0;
    };

    /**
     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lt = LongPrototype.lessThan;

    /**
     * Tests if this Long's value is less than or equal the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
        return this.comp(/* validates */ other) <= 0;
    };

    /**
     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.lte = LongPrototype.lessThanOrEqual;

    /**
     * Tests if this Long's value is greater than the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.greaterThan = function greaterThan(other) {
        return this.comp(/* validates */ other) > 0;
    };

    /**
     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.gt = LongPrototype.greaterThan;

    /**
     * Tests if this Long's value is greater than or equal the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
        return this.comp(/* validates */ other) >= 0;
    };

    /**
     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {boolean}
     */
    LongPrototype.gte = LongPrototype.greaterThanOrEqual;

    /**
     * Compares this Long's value with the specified's.
     * @param {!Long|number|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */
    LongPrototype.compare = function compare(other) {
        if (!isLong(other))
            other = fromValue(other);
        if (this.eq(other))
            return 0;
        var thisNeg = this.isNegative(),
            otherNeg = other.isNegative();
        if (thisNeg && !otherNeg)
            return -1;
        if (!thisNeg && otherNeg)
            return 1;
        // At this point the sign bits are the same
        if (!this.unsigned)
            return this.sub(other).isNegative() ? -1 : 1;
        // Both are positive if at least one is unsigned
        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
    };

    /**
     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
     * @function
     * @param {!Long|number|string} other Other value
     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
     *  if the given one is greater
     */
    LongPrototype.comp = LongPrototype.compare;

    /**
     * Negates this Long's value.
     * @returns {!Long} Negated Long
     */
    LongPrototype.negate = function negate() {
        if (!this.unsigned && this.eq(MIN_VALUE))
            return MIN_VALUE;
        return this.not().add(ONE);
    };

    /**
     * Negates this Long's value. This is an alias of {@link Long#negate}.
     * @function
     * @returns {!Long} Negated Long
     */
    LongPrototype.neg = LongPrototype.negate;

    /**
     * Returns the sum of this and the specified Long.
     * @param {!Long|number|string} addend Addend
     * @returns {!Long} Sum
     */
    LongPrototype.add = function add(addend) {
        if (!isLong(addend))
            addend = fromValue(addend);

        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.

        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;

        var b48 = addend.high >>> 16;
        var b32 = addend.high & 0xFFFF;
        var b16 = addend.low >>> 16;
        var b00 = addend.low & 0xFFFF;

        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 + b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 + b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 + b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 + b48;
        c48 &= 0xFFFF;
        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };

    /**
     * Returns the difference of this and the specified Long.
     * @param {!Long|number|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */
    LongPrototype.subtract = function subtract(subtrahend) {
        if (!isLong(subtrahend))
            subtrahend = fromValue(subtrahend);
        return this.add(subtrahend.neg());
    };

    /**
     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
     * @function
     * @param {!Long|number|string} subtrahend Subtrahend
     * @returns {!Long} Difference
     */
    LongPrototype.sub = LongPrototype.subtract;

    /**
     * Returns the product of this and the specified Long.
     * @param {!Long|number|string} multiplier Multiplier
     * @returns {!Long} Product
     */
    LongPrototype.multiply = function multiply(multiplier) {
        if (this.isZero())
            return ZERO;
        if (!isLong(multiplier))
            multiplier = fromValue(multiplier);
        if (multiplier.isZero())
            return ZERO;
        if (this.eq(MIN_VALUE))
            return multiplier.isOdd() ? MIN_VALUE : ZERO;
        if (multiplier.eq(MIN_VALUE))
            return this.isOdd() ? MIN_VALUE : ZERO;

        if (this.isNegative()) {
            if (multiplier.isNegative())
                return this.neg().mul(multiplier.neg());
            else
                return this.neg().mul(multiplier).neg();
        } else if (multiplier.isNegative())
            return this.mul(multiplier.neg()).neg();

        // If both longs are small, use float multiplication
        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);

        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
        // We can skip products that would overflow.

        var a48 = this.high >>> 16;
        var a32 = this.high & 0xFFFF;
        var a16 = this.low >>> 16;
        var a00 = this.low & 0xFFFF;

        var b48 = multiplier.high >>> 16;
        var b32 = multiplier.high & 0xFFFF;
        var b16 = multiplier.low >>> 16;
        var b00 = multiplier.low & 0xFFFF;

        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
        c00 += a00 * b00;
        c16 += c00 >>> 16;
        c00 &= 0xFFFF;
        c16 += a16 * b00;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c16 += a00 * b16;
        c32 += c16 >>> 16;
        c16 &= 0xFFFF;
        c32 += a32 * b00;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a16 * b16;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c32 += a00 * b32;
        c48 += c32 >>> 16;
        c32 &= 0xFFFF;
        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
        c48 &= 0xFFFF;
        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
    };

    /**
     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
     * @function
     * @param {!Long|number|string} multiplier Multiplier
     * @returns {!Long} Product
     */
    LongPrototype.mul = LongPrototype.multiply;

    /**
     * Returns this Long divided by the specified. The result is signed if this Long is signed or
     *  unsigned if this Long is unsigned.
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Quotient
     */
    LongPrototype.divide = function divide(divisor) {
        if (!isLong(divisor))
            divisor = fromValue(divisor);
        if (divisor.isZero())
            throw Error('division by zero');
        if (this.isZero())
            return this.unsigned ? UZERO : ZERO;
        var approx, rem, res;
        if (!this.unsigned) {
            // This section is only relevant for signed longs and is derived from the
            // closure library as a whole.
            if (this.eq(MIN_VALUE)) {
                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
                    return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
                else if (divisor.eq(MIN_VALUE))
                    return ONE;
                else {
                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
                    var halfThis = this.shr(1);
                    approx = halfThis.div(divisor).shl(1);
                    if (approx.eq(ZERO)) {
                        return divisor.isNegative() ? ONE : NEG_ONE;
                    } else {
                        rem = this.sub(divisor.mul(approx));
                        res = approx.add(rem.div(divisor));
                        return res;
                    }
                }
            } else if (divisor.eq(MIN_VALUE))
                return this.unsigned ? UZERO : ZERO;
            if (this.isNegative()) {
                if (divisor.isNegative())
                    return this.neg().div(divisor.neg());
                return this.neg().div(divisor).neg();
            } else if (divisor.isNegative())
                return this.div(divisor.neg()).neg();
            res = ZERO;
        } else {
            // The algorithm below has not been made for unsigned longs. It's therefore
            // required to take special care of the MSB prior to running it.
            if (!divisor.unsigned)
                divisor = divisor.toUnsigned();
            if (divisor.gt(this))
                return UZERO;
            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
                return UONE;
            res = UZERO;
        }

        // Repeat the following until the remainder is less than other:  find a
        // floating-point that approximates remainder / other *from below*, add this
        // into the result, and subtract it from the remainder.  It is critical that
        // the approximate value is less than or equal to the real value so that the
        // remainder never becomes negative.
        rem = this;
        while (rem.gte(divisor)) {
            // Approximate the result of division. This may be a little greater or
            // smaller than the actual value.
            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));

            // We will tweak the approximate result by changing it in the 48-th digit or
            // the smallest non-fractional digit, whichever is larger.
            var log2 = Math.ceil(Math.log(approx) / Math.LN2),
                delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),

            // Decrease the approximation until it is smaller than the remainder.  Note
            // that if it is too large, the product overflows and is negative.
                approxRes = fromNumber(approx),
                approxRem = approxRes.mul(divisor);
            while (approxRem.isNegative() || approxRem.gt(rem)) {
                approx -= delta;
                approxRes = fromNumber(approx, this.unsigned);
                approxRem = approxRes.mul(divisor);
            }

            // We know the answer can't be zero... and actually, zero would cause
            // infinite recursion since we would make no progress.
            if (approxRes.isZero())
                approxRes = ONE;

            res = res.add(approxRes);
            rem = rem.sub(approxRem);
        }
        return res;
    };

    /**
     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
     * @function
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Quotient
     */
    LongPrototype.div = LongPrototype.divide;

    /**
     * Returns this Long modulo the specified.
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.modulo = function modulo(divisor) {
        if (!isLong(divisor))
            divisor = fromValue(divisor);
        return this.sub(this.div(divisor).mul(divisor));
    };

    /**
     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
     * @function
     * @param {!Long|number|string} divisor Divisor
     * @returns {!Long} Remainder
     */
    LongPrototype.mod = LongPrototype.modulo;

    /**
     * Returns the bitwise NOT of this Long.
     * @returns {!Long}
     */
    LongPrototype.not = function not() {
        return fromBits(~this.low, ~this.high, this.unsigned);
    };

    /**
     * Returns the bitwise AND of this Long and the specified.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.and = function and(other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
    };

    /**
     * Returns the bitwise OR of this Long and the specified.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.or = function or(other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
    };

    /**
     * Returns the bitwise XOR of this Long and the given one.
     * @param {!Long|number|string} other Other Long
     * @returns {!Long}
     */
    LongPrototype.xor = function xor(other) {
        if (!isLong(other))
            other = fromValue(other);
        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
    };

    /**
     * Returns this Long with bits shifted to the left by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftLeft = function shiftLeft(numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
        else
            return fromBits(0, this.low << (numBits - 32), this.unsigned);
    };

    /**
     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shl = LongPrototype.shiftLeft;

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftRight = function shiftRight(numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        if ((numBits &= 63) === 0)
            return this;
        else if (numBits < 32)
            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
        else
            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
    };

    /**
     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shr = LongPrototype.shiftRight;

    /**
     * Returns this Long with bits logically shifted to the right by the given amount.
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
        if (isLong(numBits))
            numBits = numBits.toInt();
        numBits &= 63;
        if (numBits === 0)
            return this;
        else {
            var high = this.high;
            if (numBits < 32) {
                var low = this.low;
                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
            } else if (numBits === 32)
                return fromBits(high, 0, this.unsigned);
            else
                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
        }
    };

    /**
     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
     * @function
     * @param {number|!Long} numBits Number of bits
     * @returns {!Long} Shifted Long
     */
    LongPrototype.shru = LongPrototype.shiftRightUnsigned;

    /**
     * Converts this Long to signed.
     * @returns {!Long} Signed long
     */
    LongPrototype.toSigned = function toSigned() {
        if (!this.unsigned)
            return this;
        return fromBits(this.low, this.high, false);
    };

    /**
     * Converts this Long to unsigned.
     * @returns {!Long} Unsigned long
     */
    LongPrototype.toUnsigned = function toUnsigned() {
        if (this.unsigned)
            return this;
        return fromBits(this.low, this.high, true);
    };

    /**
     * Converts this Long to its byte representation.
     * @param {boolean=} le Whether little or big endian, defaults to big endian
     * @returns {!Array.<number>} Byte representation
     */
    LongPrototype.toBytes = function(le) {
        return le ? this.toBytesLE() : this.toBytesBE();
    }

    /**
     * Converts this Long to its little endian byte representation.
     * @returns {!Array.<number>} Little endian byte representation
     */
    LongPrototype.toBytesLE = function() {
        var hi = this.high,
            lo = this.low;
        return [
             lo         & 0xff,
            (lo >>>  8) & 0xff,
            (lo >>> 16) & 0xff,
            (lo >>> 24) & 0xff,
             hi         & 0xff,
            (hi >>>  8) & 0xff,
            (hi >>> 16) & 0xff,
            (hi >>> 24) & 0xff
        ];
    }

    /**
     * Converts this Long to its big endian byte representation.
     * @returns {!Array.<number>} Big endian byte representation
     */
    LongPrototype.toBytesBE = function() {
        var hi = this.high,
            lo = this.low;
        return [
            (hi >>> 24) & 0xff,
            (hi >>> 16) & 0xff,
            (hi >>>  8) & 0xff,
             hi         & 0xff,
            (lo >>> 24) & 0xff,
            (lo >>> 16) & 0xff,
            (lo >>>  8) & 0xff,
             lo         & 0xff
        ];
    }

    return Long;
});


/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader/file-uploader.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader/file-uploader.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"showUploadButton\" class=\"upload-container\">\n  <div class=\"file-label\">\n    {{ file ? file.name : 'no file selected' }}\n  </div>\n  <label for=\"select-file-button\">\n    <div class=\"upload-button\">\n      Select File\n    </div>\n  </label>\n  <div\n    (click)=\"upload()\"\n    class=\"upload-button\"\n    [attr.disabled]=\"file ? null : true\"\n  >\n    Upload\n  </div>\n</div>\n\n<label *ngIf=\"!showUploadButton\" for=\"select-file-button\">\n  <div class=\"upload-button\">\n    Upload File\n  </div>\n</label>\n\n<input\n  type=\"file\"\n  accept=\"image/*\"\n  (change)=\"onFileChange($event)\"\n  class=\"upload-input\"\n  id=\"select-file-button\"\n>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/my-uploads/my-uploads.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/my-uploads/my-uploads.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<dwu-user-login></dwu-user-login>\n<dwu-file-uploader\n  *ngIf=\"firebaseAuthService.user$ | async as user\"\n  (fileChange)=\"onFileChange($event, user)\"\n></dwu-file-uploader>\n<div\n  *ngIf=\"(uploadedFiles$ | async) as uploadedFiles\"\n  class=\"uploaded-file-container\"\n>\n  <div\n    *ngFor=\"let uploadedFile of uploadedFiles; trackBy: trackById\"\n    class=\"uploaded-file\"\n  >\n    <div class=\"file-name\">\n      <div>{{ uploadedFile.fileName }}</div>\n      <span\n        *ngIf=\"firebaseAuthService.user$ | async as user\"\n        class=\"material-icons\"\n        (click)=\"onDeleteFile(uploadedFile, user)\"\n      >delete</span>\n    </div>\n    <img\n      *ngIf=\"uploadedFile.uploadMeta\"\n      [src]=\"uploadedFile.uploadMeta.downloadUrl\"\n      class=\"file-pic\"\n    >\n    <div\n      *ngIf=\"!uploadedFile.uploadMeta\"\n      class=\"loader-container centered\"\n    >\n      <div class=\"dwu-loader\"></div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!(uploadedFiles$ | async)\" class=\"loader-container for-page\">\n  <div class=\"dwu-loader\"></div>\n</div>\n<div class=\"footer\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/near-me/near-me.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/near-me/near-me.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"radio-buttons distance-type\">\n  <div class=\"radio-button\"\n    [class.active]=\"distanceType$.value === 'WALK'\"\n    (click)=\"distanceType$.next('WALK')\"\n  >Walk</div>\n  <div class=\"radio-button\"\n    [class.active]=\"distanceType$.value === 'BIKE'\"\n    (click)=\"distanceType$.next('BIKE')\"\n  >Bike</div>\n  <div class=\"radio-button\"\n    [class.active]=\"distanceType$.value === 'DRIVE'\"\n    (click)=\"distanceType$.next('DRIVE')\"\n  >Drive</div>\n</div>\n\n<div *ngIf=\"nearByUploads$ | async as nearByUploads\" class=\"uploaded-file-container\">\n  <div\n    *ngFor=\"let uploadedFile of nearByUploads; trackBy: trackById\"\n    class=\"uploaded-file\"\n  >\n    <div class=\"file-name\">\n      <div>{{ uploadedFile.fileName }}</div>\n    </div>\n    <img\n      *ngIf=\"uploadedFile.uploadMeta\"\n      [src]=\"uploadedFile.uploadMeta.downloadUrl\"\n      class=\"file-pic\"\n    >\n    <div\n      *ngIf=\"!uploadedFile.uploadMeta\"\n      class=\"file-pic\"\n    >\n      <div class=\"dwu-loader\"></div>\n    </div>\n  </div>\n</div>\n<div *ngIf=\"!(nearByUploads$ | async)\" class=\"loader-container for-page\">\n  <div class=\"dwu-loader\"></div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"page-container\">\n\n  <div class=\"nav-items-container\">\n    <div\n      class=\"nav-item\"\n      [routerLinkActive]=\"['active']\"\n      [routerLink]=\"['./near-me']\"\n    >Near Me</div>\n    <div\n      class=\"nav-item\"\n      [routerLinkActive]=\"['active']\"\n      [routerLink]=\"['./my-uploads']\"\n    >My Uploads</div>\n  </div>\n  <div class=\"page-content\">\n    <router-outlet></router-outlet>\n    <div class=\"footer\"></div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/s2-geometry/src/s2geometry.js":
/*!****************************************************!*\
  !*** ./node_modules/s2-geometry/src/s2geometry.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/// S2 Geometry functions
// the regional scoreboard is based on a level 6 S2 Cell
// - https://docs.google.com/presentation/d/1Hl4KapfAENAOf4gv-pSngKwvS_jwNVHRPZTTDzXXn6Q/view?pli=1#slide=id.i22
// at the time of writing there's no actual API for the intel map to retrieve scoreboard data,
// but it's still useful to plot the score cells on the intel map


// the S2 geometry is based on projecting the earth sphere onto a cube, with some scaling of face coordinates to
// keep things close to approximate equal area for adjacent cells
// to convert a lat,lng into a cell id:
// - convert lat,lng to x,y,z
// - convert x,y,z into face,u,v
// - u,v scaled to s,t with quadratic formula
// - s,t converted to integer i,j offsets
// - i,j converted to a position along a Hubbert space-filling curve
// - combine face,position to get the cell id

//NOTE: compared to the google S2 geometry library, we vary from their code in the following ways
// - cell IDs: they combine face and the hilbert curve position into a single 64 bit number. this gives efficient space
//             and speed. javascript doesn't have appropriate data types, and speed is not cricical, so we use
//             as [face,[bitpair,bitpair,...]] instead
// - i,j: they always use 30 bits, adjusting as needed. we use 0 to (1<<level)-1 instead
//        (so GetSizeIJ for a cell is always 1)

(function (exports) {
'use strict';

var S2 = exports.S2 = { L: {} };

S2.L.LatLng = function (/*Number*/ rawLat, /*Number*/ rawLng, /*Boolean*/ noWrap) {
  var lat = parseFloat(rawLat, 10);
  var lng = parseFloat(rawLng, 10);

  if (isNaN(lat) || isNaN(lng)) {
    throw new Error('Invalid LatLng object: (' + rawLat + ', ' + rawLng + ')');
  }

  if (noWrap !== true) {
    lat = Math.max(Math.min(lat, 90), -90);                 // clamp latitude into -90..90
    lng = (lng + 180) % 360 + ((lng < -180 || lng === 180) ? 180 : -180);   // wrap longtitude into -180..180
  }

  return { lat: lat, lng: lng };
};

S2.L.LatLng.DEG_TO_RAD = Math.PI / 180;
S2.L.LatLng.RAD_TO_DEG = 180 / Math.PI;

/*
S2.LatLngToXYZ = function(latLng) {
  // http://stackoverflow.com/questions/8981943/lat-long-to-x-y-z-position-in-js-not-working
  var lat = latLng.lat;
  var lon = latLng.lng;
  var DEG_TO_RAD = Math.PI / 180.0;

  var phi = lat * DEG_TO_RAD;
  var theta = lon * DEG_TO_RAD;

  var cosLat = Math.cos(phi);
  var sinLat = Math.sin(phi);
  var cosLon = Math.cos(theta);
  var sinLon = Math.sin(theta);
  var rad = 500.0;

  return [
    rad * cosLat * cosLon
  , rad * cosLat * sinLon
  , rad * sinLat
  ];
};
*/
S2.LatLngToXYZ = function(latLng) {
  var d2r = S2.L.LatLng.DEG_TO_RAD;

  var phi = latLng.lat*d2r;
  var theta = latLng.lng*d2r;

  var cosphi = Math.cos(phi);

  return [Math.cos(theta)*cosphi, Math.sin(theta)*cosphi, Math.sin(phi)];
};

S2.XYZToLatLng = function(xyz) {
  var r2d = S2.L.LatLng.RAD_TO_DEG;

  var lat = Math.atan2(xyz[2], Math.sqrt(xyz[0]*xyz[0]+xyz[1]*xyz[1]));
  var lng = Math.atan2(xyz[1], xyz[0]);

  return S2.L.LatLng(lat*r2d, lng*r2d);
};

var largestAbsComponent = function(xyz) {
  var temp = [Math.abs(xyz[0]), Math.abs(xyz[1]), Math.abs(xyz[2])];

  if (temp[0] > temp[1]) {
    if (temp[0] > temp[2]) {
      return 0;
    } else {
      return 2;
    }
  } else {
    if (temp[1] > temp[2]) {
      return 1;
    } else {
      return 2;
    }
  }

};

var faceXYZToUV = function(face,xyz) {
  var u,v;

  switch (face) {
    case 0: u =  xyz[1]/xyz[0]; v =  xyz[2]/xyz[0]; break;
    case 1: u = -xyz[0]/xyz[1]; v =  xyz[2]/xyz[1]; break;
    case 2: u = -xyz[0]/xyz[2]; v = -xyz[1]/xyz[2]; break;
    case 3: u =  xyz[2]/xyz[0]; v =  xyz[1]/xyz[0]; break;
    case 4: u =  xyz[2]/xyz[1]; v = -xyz[0]/xyz[1]; break;
    case 5: u = -xyz[1]/xyz[2]; v = -xyz[0]/xyz[2]; break;
    default: throw {error: 'Invalid face'};
  }

  return [u,v];
};




S2.XYZToFaceUV = function(xyz) {
  var face = largestAbsComponent(xyz);

  if (xyz[face] < 0) {
    face += 3;
  }

  var uv = faceXYZToUV (face,xyz);

  return [face, uv];
};

S2.FaceUVToXYZ = function(face,uv) {
  var u = uv[0];
  var v = uv[1];

  switch (face) {
    case 0: return [ 1, u, v];
    case 1: return [-u, 1, v];
    case 2: return [-u,-v, 1];
    case 3: return [-1,-v,-u];
    case 4: return [ v,-1,-u];
    case 5: return [ v, u,-1];
    default: throw {error: 'Invalid face'};
  }
};

var singleSTtoUV = function(st) {
  if (st >= 0.5) {
    return (1/3.0) * (4*st*st - 1);
  } else {
    return (1/3.0) * (1 - (4*(1-st)*(1-st)));
  }
};

S2.STToUV = function(st) {
  return [singleSTtoUV(st[0]), singleSTtoUV(st[1])];
};


var singleUVtoST = function(uv) {
  if (uv >= 0) {
    return 0.5 * Math.sqrt (1 + 3*uv);
  } else {
    return 1 - 0.5 * Math.sqrt (1 - 3*uv);
  }
};
S2.UVToST = function(uv) {
  return [singleUVtoST(uv[0]), singleUVtoST(uv[1])];
};


S2.STToIJ = function(st,order) {
  var maxSize = (1<<order);

  var singleSTtoIJ = function(st) {
    var ij = Math.floor(st * maxSize);
    return Math.max(0, Math.min(maxSize-1, ij));
  };

  return [singleSTtoIJ(st[0]), singleSTtoIJ(st[1])];
};


S2.IJToST = function(ij,order,offsets) {
  var maxSize = (1<<order);

  return [
    (ij[0]+offsets[0])/maxSize,
    (ij[1]+offsets[1])/maxSize
  ];
};



var rotateAndFlipQuadrant = function(n, point, rx, ry)
{
	var newX, newY;
	if(ry == 0)
	{
		if(rx == 1){
			point.x = n - 1 - point.x;
			point.y = n - 1 - point.y

		}

    var x = point.x;
		point.x = point.y
		point.y = x;
	}

}





// hilbert space-filling curve
// based on http://blog.notdot.net/2009/11/Damn-Cool-Algorithms-Spatial-indexing-with-Quadtrees-and-Hilbert-Curves
// note: rather then calculating the final integer hilbert position, we just return the list of quads
// this ensures no precision issues whth large orders (S3 cell IDs use up to 30), and is more
// convenient for pulling out the individual bits as needed later
var pointToHilbertQuadList = function(x,y,order,face) {
  var hilbertMap = {
    'a': [ [0,'d'], [1,'a'], [3,'b'], [2,'a'] ],
    'b': [ [2,'b'], [1,'b'], [3,'a'], [0,'c'] ],
    'c': [ [2,'c'], [3,'d'], [1,'c'], [0,'b'] ],
    'd': [ [0,'a'], [3,'c'], [1,'d'], [2,'d'] ]
  };

  if ('number' !== typeof face) {
    console.warn(new Error("called pointToHilbertQuadList without face value, defaulting to '0'").stack);
  }
  var currentSquare = (face % 2) ? 'd' : 'a';
  var positions = [];

  for (var i=order-1; i>=0; i--) {

    var mask = 1<<i;

    var quad_x = x&mask ? 1 : 0;
    var quad_y = y&mask ? 1 : 0;

    var t = hilbertMap[currentSquare][quad_x*2+quad_y];

    positions.push(t[0]);

    currentSquare = t[1];
  }

  return positions;
};

// S2Cell class

S2.S2Cell = function(){};

S2.S2Cell.FromHilbertQuadKey = function(hilbertQuadkey) {
  var parts = hilbertQuadkey.split('/');
  var face = parseInt(parts[0]);
  var position = parts[1];
  var maxLevel = position.length;
  var point = {
    x : 0,
    y: 0
  };
  var i;
  var level;
  var bit;
  var rx, ry;
  var val;

	for(i = maxLevel - 1; i >= 0; i--) {

		level = maxLevel - i;
		bit = position[i];
		rx = 0;
    ry = 0;
		if (bit === '1') {
			ry = 1;
		}
		else if (bit === '2') {
			rx = 1;
			ry = 1;
		}
		else if (bit === '3') {
			rx = 1;
		}

		val = Math.pow(2, level - 1);
		rotateAndFlipQuadrant(val, point, rx, ry);

		point.x += val * rx;
		point.y += val * ry;

	}

  if (face % 2 === 1) {
    var t = point.x;
    point.x = point.y;
    point.y = t;
  }


  return S2.S2Cell.FromFaceIJ(parseInt(face), [point.x, point.y], level);
};

//static method to construct
S2.S2Cell.FromLatLng = function(latLng, level) {
  if ((!latLng.lat && latLng.lat !== 0) || (!latLng.lng && latLng.lng !== 0)) {
    throw new Error("Pass { lat: lat, lng: lng } to S2.S2Cell.FromLatLng");
  }
  var xyz = S2.LatLngToXYZ(latLng);

  var faceuv = S2.XYZToFaceUV(xyz);
  var st = S2.UVToST(faceuv[1]);

  var ij = S2.STToIJ(st,level);

  return S2.S2Cell.FromFaceIJ (faceuv[0], ij, level);
};

/*
S2.faceIjLevelToXyz = function (face, ij, level) {
  var st = S2.IJToST(ij, level, [0.5, 0.5]);
  var uv = S2.STToUV(st);
  var xyz = S2.FaceUVToXYZ(face, uv);

  return S2.XYZToLatLng(xyz);
  return xyz;
};
*/

S2.S2Cell.FromFaceIJ = function(face,ij,level) {
  var cell = new S2.S2Cell();
  cell.face = face;
  cell.ij = ij;
  cell.level = level;

  return cell;
};


S2.S2Cell.prototype.toString = function() {
  return 'F'+this.face+'ij['+this.ij[0]+','+this.ij[1]+']@'+this.level;
};

S2.S2Cell.prototype.getLatLng = function() {
  var st = S2.IJToST(this.ij,this.level, [0.5,0.5]);
  var uv = S2.STToUV(st);
  var xyz = S2.FaceUVToXYZ(this.face, uv);

  return S2.XYZToLatLng(xyz);
};

S2.S2Cell.prototype.getCornerLatLngs = function() {
  var result = [];
  var offsets = [
    [ 0.0, 0.0 ],
    [ 0.0, 1.0 ],
    [ 1.0, 1.0 ],
    [ 1.0, 0.0 ]
  ];

  for (var i=0; i<4; i++) {
    var st = S2.IJToST(this.ij, this.level, offsets[i]);
    var uv = S2.STToUV(st);
    var xyz = S2.FaceUVToXYZ(this.face, uv);

    result.push ( S2.XYZToLatLng(xyz) );
  }
  return result;
};


S2.S2Cell.prototype.getFaceAndQuads = function () {
  var quads = pointToHilbertQuadList(this.ij[0], this.ij[1], this.level, this.face);

  return [this.face,quads];
};
S2.S2Cell.prototype.toHilbertQuadkey = function () {
  var quads = pointToHilbertQuadList(this.ij[0], this.ij[1], this.level, this.face);

  return this.face.toString(10) + '/' + quads.join('');
};

S2.latLngToNeighborKeys = S2.S2Cell.latLngToNeighborKeys = function (lat, lng, level) {
  return S2.S2Cell.FromLatLng({ lat: lat, lng: lng }, level).getNeighbors().map(function (cell) {
    return cell.toHilbertQuadkey();
  });
};
S2.S2Cell.prototype.getNeighbors = function() {

  var fromFaceIJWrap = function(face,ij,level) {
    var maxSize = (1<<level);
    if (ij[0]>=0 && ij[1]>=0 && ij[0]<maxSize && ij[1]<maxSize) {
      // no wrapping out of bounds
      return S2.S2Cell.FromFaceIJ(face,ij,level);
    } else {
      // the new i,j are out of range.
      // with the assumption that they're only a little past the borders we can just take the points as
      // just beyond the cube face, project to XYZ, then re-create FaceUV from the XYZ vector

      var st = S2.IJToST(ij,level,[0.5,0.5]);
      var uv = S2.STToUV(st);
      var xyz = S2.FaceUVToXYZ(face,uv);
      var faceuv = S2.XYZToFaceUV(xyz);
      face = faceuv[0];
      uv = faceuv[1];
      st = S2.UVToST(uv);
      ij = S2.STToIJ(st,level);
      return S2.S2Cell.FromFaceIJ (face, ij, level);
    }
  };

  var face = this.face;
  var i = this.ij[0];
  var j = this.ij[1];
  var level = this.level;


  return [
    fromFaceIJWrap(face, [i-1,j], level),
    fromFaceIJWrap(face, [i,j-1], level),
    fromFaceIJWrap(face, [i+1,j], level),
    fromFaceIJWrap(face, [i,j+1], level)
  ];

};

//
// Functional Style
//
S2.FACE_BITS = 3;
S2.MAX_LEVEL = 30;
S2.POS_BITS = (2 * S2.MAX_LEVEL) + 1; // 61 (60 bits of data, 1 bit lsb marker)

S2.facePosLevelToId = S2.S2Cell.facePosLevelToId = S2.fromFacePosLevel = function (faceN, posS, levelN) {
  var Long = exports.dcodeIO && exports.dcodeIO.Long || __webpack_require__(/*! long */ "./node_modules/long/dist/long.js");
  var faceB;
  var posB;
  var bin;

  if (!levelN) {
    levelN = posS.length;
  }
  if (posS.length > levelN) {
    posS = posS.substr(0, levelN);
  }

  // 3-bit face value
  faceB = Long.fromString(faceN.toString(10), true, 10).toString(2);
  while (faceB.length < S2.FACE_BITS) {
    faceB = '0' + faceB;
  }

  // 60-bit position value
  posB = Long.fromString(posS, true, 4).toString(2);
  while (posB.length < (2 * levelN)) {
    posB = '0' + posB;
  }

  bin = faceB + posB;
  // 1-bit lsb marker
  bin += '1';
  // n-bit padding to 64-bits
  while (bin.length < (S2.FACE_BITS + S2.POS_BITS)) {
    bin += '0';
  }

  return Long.fromString(bin, true, 2).toString(10);
};

S2.keyToId = S2.S2Cell.keyToId
= S2.toId = S2.toCellId = S2.fromKey
= function (key) {
  var parts = key.split('/');

  return S2.fromFacePosLevel(parts[0], parts[1], parts[1].length);
};

S2.idToKey = S2.S2Cell.idToKey
= S2.S2Cell.toKey = S2.toKey
= S2.fromId = S2.fromCellId
= S2.S2Cell.toHilbertQuadkey  = S2.toHilbertQuadkey
= function (idS) {
  var Long = exports.dcodeIO && exports.dcodeIO.Long || __webpack_require__(/*! long */ "./node_modules/long/dist/long.js");
  var bin = Long.fromString(idS, true, 10).toString(2);

  while (bin.length < (S2.FACE_BITS + S2.POS_BITS)) {
    bin = '0' + bin;
  }

  // MUST come AFTER binstr has been left-padded with '0's
  var lsbIndex = bin.lastIndexOf('1');
  // substr(start, len)
  // substring(start, end) // includes start, does not include end
  var faceB = bin.substring(0, 3);
  // posB will always be a multiple of 2 (or it's invalid)
  var posB = bin.substring(3, lsbIndex);
  var levelN = posB.length / 2;

  var faceS = Long.fromString(faceB, true, 2).toString(10);
  var posS = Long.fromString(posB, true, 2).toString(4);

  while (posS.length < levelN) {
    posS = '0' + posS;
  }

  return faceS + '/' + posS;
};

S2.keyToLatLng = S2.S2Cell.keyToLatLng = function (key) {
  var cell2 = S2.S2Cell.FromHilbertQuadKey(key);
  return cell2.getLatLng();
};

S2.idToLatLng = S2.S2Cell.idToLatLng = function (id) {
  var key = S2.idToKey(id);
  return S2.keyToLatLng(key);
};

S2.S2Cell.latLngToKey = S2.latLngToKey
= S2.latLngToQuadkey = function (lat, lng, level) {
  if (isNaN(level) || level < 1 || level > 30) {
    throw new Error("'level' is not a number between 1 and 30 (but it should be)");
  }
  // TODO
  //
  // S2.idToLatLng(id)
  // S2.keyToLatLng(key)
  // S2.nextFace(key)     // prevent wrapping on nextKey
  // S2.prevFace(key)     // prevent wrapping on prevKey
  //
  // .toKeyArray(id)  // face,quadtree
  // .toKey(id)       // hilbert
  // .toPoint(id)     // ij
  // .toId(key)       // uint64 (as string)
  // .toLong(key)     // long.js
  // .toLatLng(id)    // object? or array?, or string (with comma)?
  //
  // maybe S2.HQ.x, S2.GPS.x, S2.CI.x?
  return S2.S2Cell.FromLatLng({ lat: lat, lng: lng }, level).toHilbertQuadkey();
};

S2.stepKey = function (key, num) {
  var Long = exports.dcodeIO && exports.dcodeIO.Long || __webpack_require__(/*! long */ "./node_modules/long/dist/long.js");
  var parts = key.split('/');

  var faceS = parts[0];
  var posS = parts[1];
  var level = parts[1].length;

  var posL = Long.fromString(posS, true, 4);
  // TODO handle wrapping (0 === pos + 1)
  // (only on the 12 edges of the globe)
  var otherL;
  if (num > 0) {
    otherL = posL.add(Math.abs(num));
  }
  else if (num < 0) {
    otherL = posL.subtract(Math.abs(num));
  }
  var otherS = otherL.toString(4);

  if ('0' === otherS) {
    console.warning(new Error("face/position wrapping is not yet supported"));
  }

  while (otherS.length < level) {
    otherS = '0' + otherS;
  }

  return faceS + '/' + otherS;
};

S2.S2Cell.prevKey = S2.prevKey = function (key) {
  return S2.stepKey(key, -1);
};

S2.S2Cell.nextKey = S2.nextKey = function (key) {
  return S2.stepKey(key, 1);
};

})( true ? module.exports : undefined);


/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.scss":
/*!************************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".upload-container {\n  display: flex;\n  align-items: center;\n  width: 25rem;\n  border-radius: 0.25rem;\n  padding: 0.25rem;\n  background-color: #F2EEE1;\n}\n.upload-container > * {\n  margin: 0 0.125rem;\n  flex: 0 0 auto;\n  display: inline-block;\n}\n.upload-container .file-label {\n  flex: 1 1 0;\n  overflow: hidden;\n  white-space: nowrap;\n  text-overflow: ellipsis;\n}\nlabel {\n  display: inline-block;\n}\n.upload-button {\n  background-color: #3F4038;\n  color: #FCFCF9;\n  width: 8rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n}\n.upload-button:hover:not([disabled]) {\n  background-color: #4B5320;\n  color: #FCFCF9;\n}\n.upload-button.active:not([disabled]) {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n.upload-button[disabled] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.upload-input {\n  position: absolute;\n  visibility: hidden;\n  width: 0;\n  height: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCJzcmMvYXBwL2ZpbGUtdXBsb2FkZXIvZmlsZS11cGxvYWRlci5jb21wb25lbnQuc2NzcyIsIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFFQSxzQkFBQTtFQUNBLGdCQUFBO0VBQ0EseUJDU2U7QUNYakI7QUZHRTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLHFCQUFBO0FFREo7QUZHRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUVESjtBRklBO0VBQ0UscUJBQUE7QUVERjtBRkdBO0VHOExFLHlCRmpNWTtFRWtNWixjRjVNZTtFRWtMYixXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0tBQUEsc0JBQUE7TUFBQSxxQkFBQTtVQUFBLGlCQUFBO0FEbEtKO0FDdUxFO0VBQ0UseUJGeE5TO0VFeU5ULGNGL01hO0FDMEJqQjtBQ3VMRTtFQUNFLHlCRjNOVTtFRTROVixjRm5OYTtBQzhCakI7QUN1TEU7RUFDRSxvQkFBQTtFQUNBLFlBQUE7QURyTEo7QUZsQkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7QUVxQkYiLCJmaWxlIjoic3JjL2FwcC9maWxlLXVwbG9hZGVyL2ZpbGUtdXBsb2FkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4udXBsb2FkLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAyNXJlbTtcbiAgLy8gYm9yZGVyOiAxcHggc29saWQgJGJsYWNrLW9saXZlO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtbGlnaHQ7XG4gID4gKiB7XG4gICAgbWFyZ2luOiAwIDAuMTI1cmVtO1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgfVxuICAuZmlsZS1sYWJlbCB7XG4gICAgZmxleDogMSAxIDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB9XG59XG5sYWJlbCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cbi51cGxvYWQtYnV0dG9uIHtcbiAgQGluY2x1ZGUgZGFyay1idXR0b247XG59XG4udXBsb2FkLWlucHV0IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHdpZHRoOiAwO1xuICBoZWlnaHQ6IDA7XG59IiwiXG4kZGFyay1ncmVlbjogIzI5MkUxMjtcbiRhcm15LWdyZWVuOiAjNEI1MzIwO1xuJG9saXZlLWdyZWVuOiAjNzA4MjM4O1xuJG1vc3MtZ3JlZW46ICM4QTlBNUI7XG4kbGF1cmVsLWdyZWVuOiAjQkFDMzlGO1xuXG4kc2F0dXJhdGVkLW9saXZlOiAjNzI5OTAwO1xuJHNhdHVyYXRlZC1ibHVlOiAjMTY0RUI3O1xuXG4vLyBuaWNlIGZvciB0ZXh0IGFnYWluc3QgZGFyayBiYWNrZ3JvdW5kXG4kbGlnaHQtZ3JlZW46ICNGNEY3RUE7XG4kbGlnaHRlc3QtZ3JlZW46ICNGQ0ZDRjk7XG5cbi8vIFVzZWQgZm9yIGZpbGUgc2VsZWN0b3JcbiRlZ2dzaGVsbC1kYXJrZXI6ICNEREQ5Q0Y7XG4kZWdnc2hlbGwtZGFyazogI0VBRTZEQTtcbiRlZ2dzaGVsbDogI0VGRUJERjtcbiRlZ2dzaGVsbC1saWdodDogI0YyRUVFMTtcblxuLy8gZ3JheXNcbiRiYXNpY2FsbHktYmxhY2s6ICMyMDIxMjQ7XG4kYmxhY2stb2xpdmU6ICMzRjQwMzg7XG4kZ3Jhbml0ZTogIzY1NjM1RjtcbiRsaWdodGVyLWdyYXk6ICM5RDlCOTk7XG4kd2hpdGU6ICNmZmY7XG5cbiRnb2xkOiAjRDZCOTAyO1xuJHN0YXItYmx1ZTogIzFENjJDNDtcblxuJGJyZWFrLXNtYWxsOiA1NTBweDtcbiRicmVhay1tZDogODAwcHg7XG4kYnJlYWstbGFyZ2U6IDEwMjRweDtcbiIsIi51cGxvYWQtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjJFRUUxO1xufVxuLnVwbG9hZC1jb250YWluZXIgPiAqIHtcbiAgbWFyZ2luOiAwIDAuMTI1cmVtO1xuICBmbGV4OiAwIDAgYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuLnVwbG9hZC1jb250YWluZXIgLmZpbGUtbGFiZWwge1xuICBmbGV4OiAxIDEgMDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4udXBsb2FkLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xuICB3aWR0aDogOHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG4udXBsb2FkLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNEI1MzIwO1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbi51cGxvYWQtYnV0dG9uLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MjM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbi51cGxvYWQtYnV0dG9uW2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi51cGxvYWQtaW5wdXQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDA7XG4gIGhlaWdodDogMDtcbn0iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gYmFzZS1jb3JvbmEtZGFzaGJvYXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmNoYXJ0LWhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5yYWRpby1idXR0b24tY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmFkaW8tYnV0dG9uLWNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHd1LXN0YXQtdmlld2VyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAub3ZlcnZpZXcuY2hhcnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMi41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZHd1LWNoYXJ0LWxlZ2VuZCB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gcmFkaW8tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQtbWluaS1idXR0b247XG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBzaGFkb3cge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IGJveC1zaGFkb3cgMjVtcywgdHJhbnNmb3JtLCAyNW1zO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgJGxpZ2h0ZXItZ3JheTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbkBtaXhpbiByZXNwb25zaXZlLXBhZ2Uge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgLy8gbWluLXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCA1MG1zO1xuICAgICAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtb3NzLWdyZWVuO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMCA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLmV4cGFuZGVyLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5mbGlwcGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcuNSU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1zaWRlIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbkBtaXhpbiBsaWdodC1taW5pLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXhzO1xufVxuXG5AbWl4aW4gbGlnaHQtc21hbGwtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBsaWdodC10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tc207XG59XG5cbkBtaXhpbiBkYXJrLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tbWQ7XG59XG5cbkBtaXhpbiBidXR0b24teHMge1xuICAgIG1pbi13aWR0aDogMnJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tc20ge1xuICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJ1dHRvbi1tZCB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtZGFyaztcbiAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gIH1cbiAgJi5hY3RpdmU6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgfVxuICAmW2Rpc2FibGVkXSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5cbkBtaXhpbiBkYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW9saXZlO1xuICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFybXktZ3JlZW47XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgfVxuICAmLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cblxuQG1peGluIHRvcC1uYXYtcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gc21hbGwge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstc21hbGwgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcmdlIC0gMSkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSB3aWRlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkgeyBAY29udGVudDsgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/file-uploader/file-uploader.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.component.ts ***!
  \**********************************************************/
/*! exports provided: FileUploaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderComponent", function() { return FileUploaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/firebase-storage.service */ "./src/app/services/firebase-storage.service.ts");



var FileUploaderComponent = /** @class */ (function () {
    function FileUploaderComponent(fss) {
        this.fss = fss;
        this.showUploadButton = false;
        this.fileChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FileUploaderComponent.prototype.onFileChange = function (fileEvent) {
        if (fileEvent.target.files) {
            this.file = fileEvent.target.files[0];
            this.fileChange.emit(this.file);
        }
    };
    FileUploaderComponent.prototype.upload = function () {
        this.fss.uploadFile(this.file);
    };
    FileUploaderComponent.ctorParameters = function () { return [
        { type: _services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_2__["FirebaseStorageService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], FileUploaderComponent.prototype, "showUploadButton", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], FileUploaderComponent.prototype, "fileChange", void 0);
    FileUploaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-file-uploader',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./file-uploader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/file-uploader/file-uploader.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./file-uploader.component.scss */ "./src/app/file-uploader/file-uploader.component.scss")).default]
        })
    ], FileUploaderComponent);
    return FileUploaderComponent;
}());



/***/ }),

/***/ "./src/app/file-uploader/file-uploader.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/file-uploader/file-uploader.module.ts ***!
  \*******************************************************/
/*! exports provided: FileUploaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileUploaderModule", function() { return FileUploaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/file-uploader/file-uploader.component */ "./src/app/file-uploader/file-uploader.component.ts");
/* harmony import */ var _services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/firebase-storage.service */ "./src/app/services/firebase-storage.service.ts");



// import { FirebaseAuthModule } from '@src/app/firebase-auth/firebase-auth.module';


var FileUploaderModule = /** @class */ (function () {
    function FileUploaderModule() {
    }
    FileUploaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__["FileUploaderComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            ],
            exports: [
                _app_file_uploader_file_uploader_component__WEBPACK_IMPORTED_MODULE_3__["FileUploaderComponent"],
            ],
            providers: [
                _services_firebase_storage_service__WEBPACK_IMPORTED_MODULE_4__["FirebaseStorageService"],
            ],
        })
    ], FileUploaderModule);
    return FileUploaderModule;
}());



/***/ }),

/***/ "./src/app/photo-gallery/models/index.ts":
/*!***********************************************!*\
  !*** ./src/app/photo-gallery/models/index.ts ***!
  \***********************************************/
/*! exports provided: LocationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _location_data_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location-data.model */ "./src/app/photo-gallery/models/location-data.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LocationData", function() { return _location_data_model__WEBPACK_IMPORTED_MODULE_1__["LocationData"]; });





/***/ }),

/***/ "./src/app/photo-gallery/models/location-data.model.ts":
/*!*************************************************************!*\
  !*** ./src/app/photo-gallery/models/location-data.model.ts ***!
  \*************************************************************/
/*! exports provided: LocationData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LocationData", function() { return LocationData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var latlon_geohash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! latlon-geohash */ "./node_modules/latlon-geohash/latlon-geohash.js");
/* harmony import */ var s2_geometry__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! s2-geometry */ "./node_modules/s2-geometry/src/s2geometry.js");
/* harmony import */ var s2_geometry__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(s2_geometry__WEBPACK_IMPORTED_MODULE_2__);



var LocationData = /** @class */ (function () {
    function LocationData() {
    }
    LocationData.fromLatLong = function (latitude, longitude, overrides) {
        if (overrides === void 0) { overrides = {}; }
        var geohash = latlon_geohash__WEBPACK_IMPORTED_MODULE_1__["default"].encode(latitude, longitude, 12);
        var s2Key = s2_geometry__WEBPACK_IMPORTED_MODULE_2__["S2"].latLngToKey(latitude, longitude, 30);
        var s2Id = s2_geometry__WEBPACK_IMPORTED_MODULE_2__["S2"].keyToId(s2Key);
        return Object.assign(new LocationData(), tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ latitude: latitude,
            longitude: longitude,
            geohash: geohash,
            s2Id: s2Id }, overrides));
    };
    return LocationData;
}());



/***/ }),

/***/ "./src/app/photo-gallery/my-uploads/my-uploads.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/photo-gallery/my-uploads/my-uploads.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dwu-user-login, dwu-file-uploader {\n  margin: 0.25rem;\n  display: block;\n}\n\n.uploaded-file-container {\n  padding: 0.5rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.uploaded-file-container .uploaded-file {\n  margin: 0.5rem;\n  width: 20rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.uploaded-file-container .uploaded-file .file-name {\n  color: #F4F7EA;\n  background-color: #3F4038;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.uploaded-file-container .uploaded-file .file-pic {\n  width: 20rem;\n  height: 15rem;\n}\n\n.uploaded-file-container .uploaded-file .loader-container {\n  height: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9waG90by1nYWxsZXJ5L215LXVwbG9hZHMvbXktdXBsb2Fkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9teS11cGxvYWRzL215LXVwbG9hZHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDREY7O0FERUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0FKOztBRENJO0VBQ0UsY0VOUTtFRk9SLHlCRUlRO0VGSFIsdUJBQUE7RUFDQSxrQ0FBQTtBQ0NOOztBRENJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDTjs7QURDSTtFQUNFLGFBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWdhbGxlcnkvbXktdXBsb2Fkcy9teS11cGxvYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuZHd1LXVzZXItbG9naW4sIGR3dS1maWxlLXVwbG9hZGVyIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVwbG9hZGVkLWZpbGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC51cGxvYWRlZC1maWxlIHtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5maWxlLW5hbWUge1xuICAgICAgY29sb3I6ICRsaWdodC1ncmVlbjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwLjI1cmVtIDAgMDtcbiAgICB9XG4gICAgLmZpbGUtcGljIHtcbiAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgIGhlaWdodDogMTVyZW07XG4gICAgfVxuICAgIC5sb2FkZXItY29udGFpbmVyIHtcbiAgICAgIGhlaWdodDogMTAwcHg7XG4gICAgLy8gICBkaXNwbGF5OiBmbGV4O1xuICAgIC8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIH1cbiAgfVxufVxuXG4iLCJkd3UtdXNlci1sb2dpbiwgZHd1LWZpbGUtdXBsb2FkZXIge1xuICBtYXJnaW46IDAuMjVyZW07XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi51cGxvYWRlZC1maWxlLWNvbnRhaW5lciAudXBsb2FkZWQtZmlsZSB7XG4gIG1hcmdpbjogMC41cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIgLnVwbG9hZGVkLWZpbGUgLmZpbGUtbmFtZSB7XG4gIGNvbG9yOiAjRjRGN0VBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0MDM4O1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwLjI1cmVtIDAgMDtcbn1cbi51cGxvYWRlZC1maWxlLWNvbnRhaW5lciAudXBsb2FkZWQtZmlsZSAuZmlsZS1waWMge1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogMTVyZW07XG59XG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIgLnVwbG9hZGVkLWZpbGUgLmxvYWRlci1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMHB4O1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuJHNhdHVyYXRlZC1vbGl2ZTogIzcyOTkwMDtcbiRzYXR1cmF0ZWQtYmx1ZTogIzE2NEVCNztcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

/***/ }),

/***/ "./src/app/photo-gallery/my-uploads/my-uploads.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/photo-gallery/my-uploads/my-uploads.component.ts ***!
  \******************************************************************/
/*! exports provided: MyUploadsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyUploadsComponent", function() { return MyUploadsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/index */ "./src/app/services/index.ts");
/* harmony import */ var _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @photo-gallery/services/index */ "./src/app/photo-gallery/services/index.ts");




// import * as EXIFStatic from 'exif-js';
var MyUploadsComponent = /** @class */ (function () {
    function MyUploadsComponent(firebaseAuthService, pgs, exifService, userLocationService) {
        this.firebaseAuthService = firebaseAuthService;
        this.pgs = pgs;
        this.exifService = exifService;
        this.userLocationService = userLocationService;
        this.uploadedFiles$ = this.pgs.getUploadedFiles$();
    }
    MyUploadsComponent.prototype.onFileChange = function (file, user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var exifLocationData, myLocationData;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exifService.getMetaData(file)];
                    case 1:
                        exifLocationData = _a.sent();
                        return [4 /*yield*/, this.userLocationService.getUserLocation()];
                    case 2:
                        myLocationData = _a.sent();
                        this.pgs.uploadFile(file, user, exifLocationData || myLocationData);
                        return [2 /*return*/];
                }
            });
        });
    };
    MyUploadsComponent.prototype.onDeleteFile = function (file, user) {
        this.pgs.deleteFile(file.id, user);
    };
    MyUploadsComponent.prototype.trackById = function (file) {
        return file.id;
    };
    MyUploadsComponent.ctorParameters = function () { return [
        { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["ExifService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["UserLocationService"] }
    ]; };
    MyUploadsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-my-uploads',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./my-uploads.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/my-uploads/my-uploads.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./my-uploads.component.scss */ "./src/app/photo-gallery/my-uploads/my-uploads.component.scss")).default]
        })
    ], MyUploadsComponent);
    return MyUploadsComponent;
}());



/***/ }),

/***/ "./src/app/photo-gallery/near-me/near-me.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/photo-gallery/near-me/near-me.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".uploaded-file-container {\n  padding: 0.5rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n.uploaded-file-container .uploaded-file {\n  margin: 0.5rem;\n  width: 20rem;\n  display: flex;\n  flex-direction: column;\n}\n.uploaded-file-container .uploaded-file .file-name {\n  color: #F4F7EA;\n  background-color: #3F4038;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n.uploaded-file-container .uploaded-file .file-pic {\n  width: 20rem;\n  height: 15rem;\n}\n.radio-buttons.distance-type {\n  display: flex;\n  margin: 0.25rem 0.5rem;\n}\n.radio-buttons.distance-type .radio-button {\n  background-color: #EAE6DA;\n  min-width: 2rem;\n  padding: 0.25rem 0.5rem;\n  font-size: 1rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  transition-duration: box-shadow 25ms, transform, 25ms;\n  box-shadow: 1px 1px 2px 0 #9D9B99;\n  transform: translateY(0);\n}\n.radio-buttons.distance-type .radio-button:hover:not([disabled]) {\n  background-color: #BAC39F;\n}\n.radio-buttons.distance-type .radio-button.active:not([disabled]) {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n.radio-buttons.distance-type .radio-button[disabled] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.radio-buttons.distance-type .radio-button:active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n.radio-buttons.distance-type .radio-button.active {\n  transform: translateY(1px);\n  box-shadow: none;\n}\n.radio-buttons.distance-type .radio-button:first-child {\n  border-radius: 5px 0 0 5px;\n}\n.radio-buttons.distance-type .radio-button:last-child {\n  border-radius: 0 5px 5px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9waG90by1nYWxsZXJ5L25lYXItbWUvbmVhci1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9uZWFyLW1lL25lYXItbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNERjtBREVFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjtBRENJO0VBQ0UsY0VEUTtFRkVSLHlCRVNRO0VGUlIsdUJBQUE7RUFDQSxrQ0FBQTtBQ0NOO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NOO0FESUE7RUd3Q0ksYUFBQTtFSHRDRixzQkFBQTtBQ0RGO0FFd0NJO0VBdUlGLHlCRHhMYztFQ3lKWixlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUFsR0EscURBQUE7RUFDQSxpQ0FBQTtFQUNBLHdCQUFBO0FGekNKO0FFa0tFO0VBQ0UseUJEck1XO0FEcUNmO0FFa0tFO0VBQ0UseUJEMU1VO0VDMk1WLGNEbE1hO0FEa0NqQjtBRWtLRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBRmhLSjtBRStCSTtFQUNJLDBCQUFBO0VBQ0EsZ0JBQUE7QUY3QlI7QUUrQkk7RUFDSSwwQkFBQTtFQUNBLGdCQUFBO0FGN0JSO0FFVVE7RUFDSSwwQkFBQTtBRlJaO0FFVVE7RUFDSSwwQkFBQTtBRlJaIiwiZmlsZSI6InNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9uZWFyLW1lL25lYXItbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLnVwbG9hZGVkLWZpbGUge1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmZpbGUtbmFtZSB7XG4gICAgICBjb2xvcjogJGxpZ2h0LWdyZWVuO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW9saXZlO1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xuICAgIH1cbiAgICAuZmlsZS1waWMge1xuICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLnJhZGlvLWJ1dHRvbnMuZGlzdGFuY2UtdHlwZSB7XG4gIEBpbmNsdWRlIHJhZGlvLWJ1dHRvbi1jb250YWluZXI7XG4gIG1hcmdpbjogMC4yNXJlbSAwLjVyZW07XG59XG4iLCIudXBsb2FkZWQtZmlsZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi51cGxvYWRlZC1maWxlLWNvbnRhaW5lciAudXBsb2FkZWQtZmlsZSB7XG4gIG1hcmdpbjogMC41cmVtO1xuICB3aWR0aDogMjByZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIgLnVwbG9hZGVkLWZpbGUgLmZpbGUtbmFtZSB7XG4gIGNvbG9yOiAjRjRGN0VBO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0MDM4O1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwLjI1cmVtIDAgMDtcbn1cbi51cGxvYWRlZC1maWxlLWNvbnRhaW5lciAudXBsb2FkZWQtZmlsZSAuZmlsZS1waWMge1xuICB3aWR0aDogMjByZW07XG4gIGhlaWdodDogMTVyZW07XG59XG5cbi5yYWRpby1idXR0b25zLmRpc3RhbmNlLXR5cGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAuMjVyZW0gMC41cmVtO1xufVxuLnJhZGlvLWJ1dHRvbnMuZGlzdGFuY2UtdHlwZSAucmFkaW8tYnV0dG9uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VBRTZEQTtcbiAgbWluLXdpZHRoOiAycmVtO1xuICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgZm9udC1zaXplOiAxcmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IGJveC1zaGFkb3cgMjVtcywgdHJhbnNmb3JtLCAyNW1zO1xuICBib3gtc2hhZG93OiAxcHggMXB4IDJweCAwICM5RDlCOTk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbn1cbi5yYWRpby1idXR0b25zLmRpc3RhbmNlLXR5cGUgLnJhZGlvLWJ1dHRvbjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkFDMzlGO1xufVxuLnJhZGlvLWJ1dHRvbnMuZGlzdGFuY2UtdHlwZSAucmFkaW8tYnV0dG9uLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MjM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbi5yYWRpby1idXR0b25zLmRpc3RhbmNlLXR5cGUgLnJhZGlvLWJ1dHRvbltkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuLnJhZGlvLWJ1dHRvbnMuZGlzdGFuY2UtdHlwZSAucmFkaW8tYnV0dG9uOmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnJhZGlvLWJ1dHRvbnMuZGlzdGFuY2UtdHlwZSAucmFkaW8tYnV0dG9uLmFjdGl2ZSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICBib3gtc2hhZG93OiBub25lO1xufVxuLnJhZGlvLWJ1dHRvbnMuZGlzdGFuY2UtdHlwZSAucmFkaW8tYnV0dG9uOmZpcnN0LWNoaWxkIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCA1cHg7XG59XG4ucmFkaW8tYnV0dG9ucy5kaXN0YW5jZS10eXBlIC5yYWRpby1idXR0b246bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgNXB4IDVweCAwO1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuJHNhdHVyYXRlZC1vbGl2ZTogIzcyOTkwMDtcbiRzYXR1cmF0ZWQtYmx1ZTogIzE2NEVCNztcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iLCJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gYmFzZS1jb3JvbmEtZGFzaGJvYXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmNoYXJ0LWhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5yYWRpby1idXR0b24tY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmFkaW8tYnV0dG9uLWNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHd1LXN0YXQtdmlld2VyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAub3ZlcnZpZXcuY2hhcnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMi41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZHd1LWNoYXJ0LWxlZ2VuZCB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gcmFkaW8tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQtbWluaS1idXR0b247XG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBzaGFkb3cge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IGJveC1zaGFkb3cgMjVtcywgdHJhbnNmb3JtLCAyNW1zO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgJGxpZ2h0ZXItZ3JheTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbkBtaXhpbiByZXNwb25zaXZlLXBhZ2Uge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgLy8gbWluLXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCA1MG1zO1xuICAgICAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtb3NzLWdyZWVuO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMCA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLmV4cGFuZGVyLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5mbGlwcGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcuNSU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1zaWRlIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbkBtaXhpbiBsaWdodC1taW5pLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXhzO1xufVxuXG5AbWl4aW4gbGlnaHQtc21hbGwtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBsaWdodC10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tc207XG59XG5cbkBtaXhpbiBkYXJrLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tbWQ7XG59XG5cbkBtaXhpbiBidXR0b24teHMge1xuICAgIG1pbi13aWR0aDogMnJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tc20ge1xuICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJ1dHRvbi1tZCB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtZGFyaztcbiAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gIH1cbiAgJi5hY3RpdmU6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgfVxuICAmW2Rpc2FibGVkXSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5cbkBtaXhpbiBkYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW9saXZlO1xuICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFybXktZ3JlZW47XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgfVxuICAmLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cblxuQG1peGluIHRvcC1uYXYtcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gc21hbGwge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstc21hbGwgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcmdlIC0gMSkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSB3aWRlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkgeyBAY29udGVudDsgfVxuICB9XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/photo-gallery/near-me/near-me.component.ts":
/*!************************************************************!*\
  !*** ./src/app/photo-gallery/near-me/near-me.component.ts ***!
  \************************************************************/
/*! exports provided: NearMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NearMeComponent", function() { return NearMeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @photo-gallery/services/index */ "./src/app/photo-gallery/services/index.ts");




var NearMeComponent = /** @class */ (function () {
    function NearMeComponent(pgs) {
        this.pgs = pgs;
        this.distanceType$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]('WALK');
        this.nearByUploads$ = this.pgs.getNearByUploadsForDistanceType$(this.distanceType$);
    }
    NearMeComponent.prototype.trackById = function (file) {
        return file.id;
    };
    NearMeComponent.ctorParameters = function () { return [
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryService"] }
    ]; };
    NearMeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-near-me',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./near-me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/near-me/near-me.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./near-me.component.scss */ "./src/app/photo-gallery/near-me/near-me.component.scss")).default]
        })
    ], NearMeComponent);
    return NearMeComponent;
}());



/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.scss":
/*!************************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 750px) {\n  :host div.page-container {\n    flex-direction: column;\n  }\n  :host div.page-container .left-side {\n    flex: 0 0 auto;\n    height: 13.25rem;\n    width: 100%;\n    max-width: none;\n    transition: height 50ms;\n  }\n  :host div.page-container .left-side.expanded {\n    height: 85%;\n  }\n  :host div.page-container .left-side .expander {\n    background-color: #3F4038;\n    color: #FCFCF9;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 3.5rem;\n    height: 1rem;\n    border: 1px solid #8A9A5B;\n    border-radius: 5px 5px 0 0;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n  }\n  :host div.page-container .left-side .expander:hover:not([disabled]) {\n    background-color: #4B5320;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander.active:not([disabled]) {\n    background-color: #708238;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander[disabled] {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n  :host div.page-container .left-side .expander .expander-icon {\n    font-size: 16px;\n  }\n  :host div.page-container .left-side .expander .expander-icon.flipped {\n    transform: rotate(180deg);\n  }\n}\n:host .page-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n:host .page-container .left-side {\n  position: relative;\n  flex: 1 1 0;\n  overflow: hidden;\n  max-width: 27.5%;\n  min-width: 20rem;\n}\n:host .page-container .left-side .expander {\n  display: none;\n}\n:host .page-container .right-side {\n  flex: 1 1 0;\n  overflow: auto;\n  position: relative;\n}\n:host .page-container {\n  display: flex;\n  flex-direction: column;\n  padding: 0 0.5rem;\n}\n:host .page-container .footer {\n  padding-bottom: 15rem;\n}\n.nav-items-container {\n  flex: 0 0 auto;\n  display: flex;\n  justify-content: flex-start;\n  margin: 1rem 2rem 0 2rem;\n  height: 2rem;\n}\n@media only screen and (max-width: 550px) {\n  .nav-items-container {\n    margin: 0 0.25rem;\n    justify-content: center;\n  }\n}\n.nav-items-container .nav-item {\n  background-color: #3F4038;\n  color: #FCFCF9;\n  width: 8rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex: 0 1 auto;\n  margin: 0 0.25rem;\n  border-radius: 4px 4px 0 0;\n}\n.nav-items-container .nav-item:hover:not([disabled]) {\n  background-color: #4B5320;\n  color: #FCFCF9;\n}\n.nav-items-container .nav-item.active:not([disabled]) {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n.nav-items-container .nav-item[disabled] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.page-content {\n  background-color: #EFEBDF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvYXBwL3Bob3RvLWdhbGxlcnkvcGhvdG8tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rkk7RUFDSTtJQUNJLHNCQUFBO0VDM0ZWO0VENEZVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFFQSx1QkFBQTtFQzNGZDtFRDRGYztJQUNJLFdBQUE7RUMxRmxCO0VENEZjO0lBOEdkLHlCRWpNWTtJRmtNWixjRTVNZTtJRitGRyxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUN6RmxCO0VENExBO0lBQ0UseUJFeE5TO0lGeU5ULGNFL01hO0VEcUJmO0VENExBO0lBQ0UseUJFM05VO0lGNE5WLGNFbk5hO0VEeUJmO0VENExBO0lBQ0Usb0JBQUE7SUFDQSxZQUFBO0VDMUxGO0VEOEVrQjtJQUNJLGVBQUE7RUM1RXRCO0VENkVzQjtJQUNJLHlCQUFBO0VDM0UxQjtBQUNGO0FEa0ZJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDaEZSO0FEa0ZRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDaEZaO0FEaUZZO0VBQ0ksYUFBQTtBQy9FaEI7QURrRlE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDaEZaO0FFaEVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsaUJBQUE7QUZrRUo7QUVqRUk7RUFDRSxxQkFBQTtBRm1FTjtBRTlEQTtFQUNFLGNBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSx3QkFBQTtFQUNBLFlBQUE7QUZpRUY7QURnS0k7RUd0T0o7SUFPSSxpQkFBQTtJQUNBLHVCQUFBO0VGbUVGO0FBQ0Y7QUVsRUU7RUgrTEEseUJFak1ZO0VGa01aLGNFNU1lO0VGa0xiLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7S0FBQSxzQkFBQTtNQUFBLHFCQUFBO1VBQUEsaUJBQUE7RUcxS0EsY0FBQTtFQUNBLGlCQUFBO0VBQ0EsMEJBQUE7QUY0RUo7QURpSEU7RUFDRSx5QkV4TlM7RUZ5TlQsY0UvTWE7QURnR2pCO0FEaUhFO0VBQ0UseUJFM05VO0VGNE5WLGNFbk5hO0FEb0dqQjtBRGlIRTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtBQy9HSjtBRXBGQTtFQUNFLHlCRGhCUztBRHVHWCIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWdhbGxlcnkvcGhvdG8tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3ZhcmlhYmxlcyc7XG5cbkBtaXhpbiBiYXNlLWNvcm9uYS1kYXNoYm9hcmQge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctYm90dG9tOiAycmVtO1xuICAgIC5jaGFydC1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuY2hhcnQtaGVhZGVyIHtcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMS41cmVtO1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbi1jb250YWluZXJ7XG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuXG4gICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbnMge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSByYWRpby1idXR0b24tY29udGFpbmVyO1xuICAgICAgICAgICAgICAgICAgICAmOm5vdCg6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICYuY2hhcnQge1xuICAgICAgICAgICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluLXdpZHRoOiBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDNweDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLnJhZGlvLWJ1dHRvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAwLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkd3Utc3RhdC12aWV3ZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgICAgICAgICBmbGV4OiAxIDAgYXV0bztcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxcmVtO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5vdmVydmlldy5jaGFydCB7XG4gICAgICAgICAgICBoZWlnaHQ6IDEyLjVyZW07XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICBkd3UtY2hhcnQtbGVnZW5kIHtcbiAgICAgICAgICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMC4yNXJlbTtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiByYWRpby1idXR0b24tY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICBAaW5jbHVkZSBsaWdodC1taW5pLWJ1dHRvbjtcbiAgICAgICAgQGluY2x1ZGUgc2hhZG93O1xuICAgICAgICAmOmZpcnN0LWNoaWxkIHtcbiAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgNXB4O1xuICAgICAgICB9XG4gICAgICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCA1cHggMDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1peGluIHNoYWRvdyB7XG4gICAgdHJhbnNpdGlvbi1kdXJhdGlvbjogYm94LXNoYWRvdyAyNW1zLCB0cmFuc2Zvcm0sIDI1bXM7XG4gICAgYm94LXNoYWRvdzogMXB4IDFweCAycHggMCAkbGlnaHRlci1ncmF5O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAmOmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbiAgICAmLmFjdGl2ZSB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxcHgpO1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbnNpdmUtcGFnZSB7XG4gICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzUwcHgpIHtcbiAgICAgICAgZGl2LnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzLjI1cmVtO1xuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICAgICAgICAvLyBtaW4td2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwbXM7XG4gICAgICAgICAgICAgICAgJi5leHBhbmRlZCB7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogODUlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAuZXhwYW5kZXIge1xuICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBkYXJrLXRoZW1lO1xuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAzLjVyZW07XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgJG1vc3MtZ3JlZW47XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCA1cHggMCAwIDtcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgICAgICAgICAgICAuZXhwYW5kZXItaWNvbiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAmLmZsaXBwZWQge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAucGFnZS1jb250YWluZXIge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuXG4gICAgICAgIC5sZWZ0LXNpZGUge1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgbWF4LXdpZHRoOiAyNy41JTtcbiAgICAgICAgICAgIG1pbi13aWR0aDogMjByZW07XG4gICAgICAgICAgICAuZXhwYW5kZXIge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLnJpZ2h0LXNpZGUge1xuICAgICAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuQG1peGluIGxpZ2h0LW1pbmktYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBsaWdodC10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24teHM7XG59XG5cbkBtaXhpbiBsaWdodC1zbWFsbC1idXR0b24ge1xuICAgIEBpbmNsdWRlIGxpZ2h0LXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi1zbTtcbn1cblxuQG1peGluIGRhcmstYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBkYXJrLXRoZW1lO1xuICAgIEBpbmNsdWRlIGJ1dHRvbi1tZDtcbn1cblxuQG1peGluIGJ1dHRvbi14cyB7XG4gICAgbWluLXdpZHRoOiAycmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJ1dHRvbi1zbSB7XG4gICAgbWluLXdpZHRoOiAzcmVtO1xuICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gYnV0dG9uLW1kIHtcbiAgICB3aWR0aDogOHJlbTtcbiAgICBwYWRkaW5nOiAwLjVyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBsaWdodC10aGVtZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICRlZ2dzaGVsbC1kYXJrO1xuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGxhdXJlbC1ncmVlbjtcbiAgfVxuICAmLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cblxuQG1peGluIGRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2stb2xpdmU7XG4gIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gICY6aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYXJteS1ncmVlbjtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICB9XG4gICYuYWN0aXZlOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG9saXZlLWdyZWVuO1xuICAgIGNvbG9yOiAkbGlnaHRlc3QtZ3JlZW47XG4gIH1cbiAgJltkaXNhYmxlZF0ge1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIG9wYWNpdHk6IDAuMztcbiAgfVxufVxuXG5AbWl4aW4gdG9wLW5hdi1wYWdlIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5tYWluLWNvbnRlbnQge1xuICAgICAgICBmbGV4OiAxIDEgMDtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgfVxufVxuXG5AbWl4aW4gcmVzcG9uZC10bygkbWVkaWEpIHtcbiAgQGlmICRtZWRpYSA9PSBzbWFsbCB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstc21hbGwpIHsgQGNvbnRlbnQ7IH1cbiAgfVxuICBAZWxzZSBpZiAkbWVkaWEgPT0gbWVkaXVtIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1zbWFsbCArIDEpIGFuZCAobWF4LXdpZHRoOiAkYnJlYWstbGFyZ2UgLSAxKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IHdpZGUge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJyZWFrLWxhcmdlKSB7IEBjb250ZW50OyB9XG4gIH1cbn1cbiIsIkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gICAgZmxleDogMCAwIGF1dG87XG4gICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgdHJhbnNpdGlvbjogaGVpZ2h0IDUwbXM7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUuZXhwYW5kZWQge1xuICAgIGhlaWdodDogODUlO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDAzODtcbiAgICBjb2xvcjogI0ZDRkNGOTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gICAgd2lkdGg6IDMuNXJlbTtcbiAgICBoZWlnaHQ6IDFyZW07XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzhBOUE1QjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzRCNTMyMDtcbiAgICBjb2xvcjogI0ZDRkNGOTtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXIuYWN0aXZlOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzcwODIzODtcbiAgICBjb2xvcjogI0ZDRkNGOTtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXJbZGlzYWJsZWRdIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyIC5leHBhbmRlci1pY29uIHtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyIC5leHBhbmRlci1pY29uLmZsaXBwZWQge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIG1heC13aWR0aDogMjcuNSU7XG4gIG1pbi13aWR0aDogMjByZW07XG59XG46aG9zdCAucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXIge1xuICBkaXNwbGF5OiBub25lO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5yaWdodC1zaWRlIHtcbiAgZmxleDogMSAxIDA7XG4gIG92ZXJmbG93OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG46aG9zdCAucGFnZS1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwYWRkaW5nOiAwIDAuNXJlbTtcbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciAuZm9vdGVyIHtcbiAgcGFkZGluZy1ib3R0b206IDE1cmVtO1xufVxuXG4ubmF2LWl0ZW1zLWNvbnRhaW5lciB7XG4gIGZsZXg6IDAgMCBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMXJlbSAycmVtIDAgMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xufVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xuICAubmF2LWl0ZW1zLWNvbnRhaW5lciB7XG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbn1cbi5uYXYtaXRlbXMtY29udGFpbmVyIC5uYXYtaXRlbSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xuICB3aWR0aDogOHJlbTtcbiAgcGFkZGluZzogMC41cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG59XG4ubmF2LWl0ZW1zLWNvbnRhaW5lciAubmF2LWl0ZW06aG92ZXI6bm90KFtkaXNhYmxlZF0pIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRCNTMyMDtcbiAgY29sb3I6ICNGQ0ZDRjk7XG59XG4ubmF2LWl0ZW1zLWNvbnRhaW5lciAubmF2LWl0ZW0uYWN0aXZlOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3MDgyMzg7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xufVxuLm5hdi1pdGVtcy1jb250YWluZXIgLm5hdi1pdGVtW2Rpc2FibGVkXSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwLjM7XG59XG5cbi5wYWdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRUZFQkRGO1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuJHNhdHVyYXRlZC1vbGl2ZTogIzcyOTkwMDtcbiRzYXR1cmF0ZWQtYmx1ZTogIzE2NEVCNztcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iLCJAaW1wb3J0ICdtaXhpbnMnO1xuXG46aG9zdCB7XG4gIEBpbmNsdWRlIHJlc3BvbnNpdmUtcGFnZTtcbiAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgLmZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTVyZW07XG4gICAgfVxuICB9XG59XG5cbi5uYXYtaXRlbXMtY29udGFpbmVyIHtcbiAgZmxleDogMCAwIGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAxcmVtIDJyZW0gMCAycmVtO1xuICBoZWlnaHQ6IDJyZW07XG4gIEBpbmNsdWRlIHJlc3BvbmQtdG8oc21hbGwpIHtcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICAubmF2LWl0ZW0ge1xuICAgIEBpbmNsdWRlIGRhcmstYnV0dG9uO1xuICAgIGZsZXg6IDAgMSBhdXRvO1xuICAgIG1hcmdpbjogMCAwLjI1cmVtO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xuICB9XG59XG5cbi5wYWdlLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGw7XG59Il19 */");

/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.component.ts ***!
  \**********************************************************/
/*! exports provided: PhotoGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryComponent", function() { return PhotoGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PhotoGalleryComponent = /** @class */ (function () {
    function PhotoGalleryComponent() {
    }
    PhotoGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'dwu-photo-gallery',
            template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./photo-gallery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/photo-gallery.component.html")).default,
            styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./photo-gallery.component.scss */ "./src/app/photo-gallery/photo-gallery.component.scss")).default]
        })
    ], PhotoGalleryComponent);
    return PhotoGalleryComponent;
}());



/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.module.ts ***!
  \*******************************************************/
/*! exports provided: PhotoGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryModule", function() { return PhotoGalleryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_gallery_near_me_near_me_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @photo-gallery/near-me/near-me.component */ "./src/app/photo-gallery/near-me/near-me.component.ts");
/* harmony import */ var _photo_gallery_my_uploads_my_uploads_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @photo-gallery/my-uploads/my-uploads.component */ "./src/app/photo-gallery/my-uploads/my-uploads.component.ts");
/* harmony import */ var _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @photo-gallery/photo-gallery.component */ "./src/app/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var _photo_gallery_photo_gallery_routes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @photo-gallery/photo-gallery.routes */ "./src/app/photo-gallery/photo-gallery.routes.ts");
/* harmony import */ var _app_user_login_user_login_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/user-login/user-login.module */ "./src/app/user-login/user-login.module.ts");
/* harmony import */ var _app_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/file-uploader/file-uploader.module */ "./src/app/file-uploader/file-uploader.module.ts");
/* harmony import */ var _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @photo-gallery/services/index */ "./src/app/photo-gallery/services/index.ts");










var PhotoGalleryModule = /** @class */ (function () {
    function PhotoGalleryModule() {
    }
    PhotoGalleryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            imports: [
                _photo_gallery_photo_gallery_routes__WEBPACK_IMPORTED_MODULE_6__["PhotoGalleryRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_file_uploader_file_uploader_module__WEBPACK_IMPORTED_MODULE_8__["FileUploaderModule"],
                _app_user_login_user_login_module__WEBPACK_IMPORTED_MODULE_7__["UserLoginModule"],
            ],
            declarations: [
                _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__["PhotoGalleryComponent"],
                _photo_gallery_my_uploads_my_uploads_component__WEBPACK_IMPORTED_MODULE_4__["MyUploadsComponent"],
                _photo_gallery_near_me_near_me_component__WEBPACK_IMPORTED_MODULE_3__["NearMeComponent"],
            ],
            exports: [
                _photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_5__["PhotoGalleryComponent"],
                _photo_gallery_my_uploads_my_uploads_component__WEBPACK_IMPORTED_MODULE_4__["MyUploadsComponent"],
                _photo_gallery_near_me_near_me_component__WEBPACK_IMPORTED_MODULE_3__["NearMeComponent"],
            ],
            providers: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](_photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_9__["PHOTO_GALLERY_SERVICES"]),
        })
    ], PhotoGalleryModule);
    return PhotoGalleryModule;
}());



/***/ }),

/***/ "./src/app/photo-gallery/photo-gallery.routes.ts":
/*!*******************************************************!*\
  !*** ./src/app/photo-gallery/photo-gallery.routes.ts ***!
  \*******************************************************/
/*! exports provided: PhotoGalleryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryRoutingModule", function() { return PhotoGalleryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _src_app_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @src/app/photo-gallery/photo-gallery.component */ "./src/app/photo-gallery/photo-gallery.component.ts");
/* harmony import */ var _photo_gallery_near_me_near_me_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @photo-gallery/near-me/near-me.component */ "./src/app/photo-gallery/near-me/near-me.component.ts");
/* harmony import */ var _photo_gallery_my_uploads_my_uploads_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @photo-gallery/my-uploads/my-uploads.component */ "./src/app/photo-gallery/my-uploads/my-uploads.component.ts");






var routes = [
    {
        path: '',
        component: _src_app_photo_gallery_photo_gallery_component__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryComponent"],
        children: [
            {
                path: 'near-me',
                component: _photo_gallery_near_me_near_me_component__WEBPACK_IMPORTED_MODULE_4__["NearMeComponent"],
            },
            {
                path: 'my-uploads',
                component: _photo_gallery_my_uploads_my_uploads_component__WEBPACK_IMPORTED_MODULE_5__["MyUploadsComponent"],
            },
            {
                path: '',
                redirectTo: 'near-me',
                pathMatch: 'full',
            },
        ],
    },
];
var PhotoGalleryRoutingModule = /** @class */ (function () {
    function PhotoGalleryRoutingModule() {
    }
    PhotoGalleryRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PhotoGalleryRoutingModule);
    return PhotoGalleryRoutingModule;
}());



/***/ }),

/***/ "./src/app/photo-gallery/services/exif.service.ts":
/*!********************************************************!*\
  !*** ./src/app/photo-gallery/services/exif.service.ts ***!
  \********************************************************/
/*! exports provided: ExifService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExifService", function() { return ExifService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! exif-js */ "./node_modules/exif-js/exif.js");
/* harmony import */ var exif_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(exif_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _photo_gallery_models_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @photo-gallery/models/index */ "./src/app/photo-gallery/models/index.ts");




var ExifService = /** @class */ (function () {
    function ExifService() {
    }
    ExifService.prototype.getMetaData = function (file) {
        return new Promise(function (resolve, reject) {
            var reader = new FileReader();
            reader.onloadend = function () {
                var arrayBuffer = reader.result;
                var exif = exif_js__WEBPACK_IMPORTED_MODULE_2__["EXIF"].readFromBinaryFile(arrayBuffer);
                if (!exif || !exif.GPSLatitude) {
                    console.log('missing exif?.GPSLatitude', exif);
                    resolve();
                    return;
                }
                var latitudeMag = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
                var longitudeMag = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);
                var latitude = (exif.GPSLatitudeRef === 'N') ? latitudeMag : -latitudeMag;
                var longitude = (exif.GPSLongitudeRef === 'E') ? longitudeMag : -longitudeMag;
                var locationData = _photo_gallery_models_index__WEBPACK_IMPORTED_MODULE_3__["LocationData"].fromLatLong(latitude, longitude, { locationSource: 'EXIF' });
                resolve(locationData);
            };
            reader.readAsArrayBuffer(file);
        });
    };
    ExifService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ExifService);
    return ExifService;
}());



/***/ }),

/***/ "./src/app/photo-gallery/services/index.ts":
/*!*************************************************!*\
  !*** ./src/app/photo-gallery/services/index.ts ***!
  \*************************************************/
/*! exports provided: PHOTO_GALLERY_SERVICES, ExifService, PhotoGalleryService, UserLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PHOTO_GALLERY_SERVICES", function() { return PHOTO_GALLERY_SERVICES; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _exif_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exif.service */ "./src/app/photo-gallery/services/exif.service.ts");
/* harmony import */ var _photo_gallery_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./photo-gallery.service */ "./src/app/photo-gallery/services/photo-gallery.service.ts");
/* harmony import */ var _user_location_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-location.service */ "./src/app/photo-gallery/services/user-location.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ExifService", function() { return _exif_service__WEBPACK_IMPORTED_MODULE_1__["ExifService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryService", function() { return _photo_gallery_service__WEBPACK_IMPORTED_MODULE_2__["PhotoGalleryService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserLocationService", function() { return _user_location_service__WEBPACK_IMPORTED_MODULE_3__["UserLocationService"]; });





var PHOTO_GALLERY_SERVICES = [
    _exif_service__WEBPACK_IMPORTED_MODULE_1__["ExifService"],
    _photo_gallery_service__WEBPACK_IMPORTED_MODULE_2__["PhotoGalleryService"],
    _user_location_service__WEBPACK_IMPORTED_MODULE_3__["UserLocationService"],
];





/***/ }),

/***/ "./src/app/photo-gallery/services/photo-gallery.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/photo-gallery/services/photo-gallery.service.ts ***!
  \*****************************************************************/
/*! exports provided: PhotoGalleryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoGalleryService", function() { return PhotoGalleryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/index */ "./src/app/services/index.ts");
/* harmony import */ var _user_location_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-location.service */ "./src/app/photo-gallery/services/user-location.service.ts");







var PhotoGalleryService = /** @class */ (function () {
    function PhotoGalleryService(fas, ffs, fss, userLocationService) {
        this.fas = fas;
        this.ffs = ffs;
        this.fss = fss;
        this.userLocationService = userLocationService;
    }
    PhotoGalleryService.prototype.deleteFile = function (fileId, user) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.fss.deleteFile(fileId)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.ffs.unregisterFile(fileId, user)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoGalleryService.prototype.uploadFile = function (file, user, fileMeta) {
        if (fileMeta === void 0) { fileMeta = {}; }
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var registeredFileId, fileUploadResponse, downloadUrl, uploadMeta;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.ffs.registerFileId(file, user, fileMeta)];
                    case 1:
                        registeredFileId = _a.sent();
                        return [4 /*yield*/, this.fss.uploadFile(file, registeredFileId)];
                    case 2:
                        fileUploadResponse = _a.sent();
                        return [4 /*yield*/, fileUploadResponse.ref.getDownloadURL()];
                    case 3:
                        downloadUrl = _a.sent();
                        uploadMeta = {
                            downloadUrl: downloadUrl,
                        };
                        return [4 /*yield*/, this.ffs.registerFileUploaded(registeredFileId, uploadMeta, user)];
                    case 4:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PhotoGalleryService.prototype.getUploadedFiles$ = function () {
        var _this = this;
        return this.fas.user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (user) {
            if (!user) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([]);
            }
            else {
                return _this.ffs.getUploadedFiles$(user);
            }
        }));
    };
    PhotoGalleryService.prototype.getNearByUploadsForDistanceType$ = function (distanceType$) {
        var _this = this;
        return distanceType$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (distanceType) { return _this.getNearByUploads$(distanceType); }));
    };
    PhotoGalleryService.prototype.getNearByUploads$ = function (distanceType) {
        var _this = this;
        if (distanceType === void 0) { distanceType = 'WALK'; }
        var nearByUploadStreams$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var userLocation = this.userLocationService.getUserLocation()
            .then(function (userLocation) {
            var nearbyUploads$ = _this.ffs.getNearbyUploads$(userLocation, distanceType).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (uploads) {
                return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["sortBy"])(uploads, function (upload) {
                    return Math.pow(userLocation.latitude - upload.locationData.latitude, 2) + Math.pow(userLocation.longitude - upload.locationData.longitude, 2);
                });
            }));
            nearByUploadStreams$.next(nearbyUploads$);
        });
        return nearByUploadStreams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (nearbyUploads$) { return nearbyUploads$; }));
    };
    PhotoGalleryService.ctorParameters = function () { return [
        { type: _services_index__WEBPACK_IMPORTED_MODULE_5__["FirebaseAuthService"] },
        { type: _services_index__WEBPACK_IMPORTED_MODULE_5__["FirebaseFirestoreService"] },
        { type: _services_index__WEBPACK_IMPORTED_MODULE_5__["FirebaseStorageService"] },
        { type: _user_location_service__WEBPACK_IMPORTED_MODULE_6__["UserLocationService"] }
    ]; };
    PhotoGalleryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], PhotoGalleryService);
    return PhotoGalleryService;
}());



/***/ }),

/***/ "./src/app/photo-gallery/services/user-location.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/photo-gallery/services/user-location.service.ts ***!
  \*****************************************************************/
/*! exports provided: UserLocationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLocationService", function() { return UserLocationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _photo_gallery_models_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @photo-gallery/models/index */ "./src/app/photo-gallery/models/index.ts");



var UserLocationService = /** @class */ (function () {
    function UserLocationService() {
    }
    UserLocationService.prototype.getUserLocation = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (userLocation) {
                var latitude = userLocation.coords.latitude;
                var longitude = userLocation.coords.longitude;
                var locationData = _photo_gallery_models_index__WEBPACK_IMPORTED_MODULE_2__["LocationData"].fromLatLong(latitude, longitude, { locationSource: 'USER' });
                resolve(locationData);
            });
        });
    };
    UserLocationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserLocationService);
    return UserLocationService;
}());



/***/ })

}]);
//# sourceMappingURL=photo-gallery-photo-gallery-module.js.map
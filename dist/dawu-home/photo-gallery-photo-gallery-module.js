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
/* harmony default export */ __webpack_exports__["default"] = ("<dwu-user-login></dwu-user-login>\n<dwu-file-uploader\n  *ngIf=\"firebaseAuthService.user$ | async as user\"\n  (fileChange)=\"onFileChange($event, user)\"\n></dwu-file-uploader>\n<div\n  *ngIf=\"(uploadedFiles$ | async) as uploadedFiles\"\n  class=\"uploaded-file-container\"\n>\n  <div\n    *ngFor=\"let uploadedFile of uploadedFiles; trackBy: trackById\"\n    class=\"uploaded-file\"\n  >\n    <div class=\"file-name\">\n      <div>{{ uploadedFile.fileName }}</div>\n      <span\n        *ngIf=\"firebaseAuthService.user$ | async as user\"\n        class=\"material-icons\"\n        (click)=\"onDeleteFile(uploadedFile, user)\"\n      >delete</span>\n    </div>\n    <img\n      *ngIf=\"uploadedFile.uploadMeta\"\n      [src]=\"uploadedFile.uploadMeta.downloadUrl\"\n      class=\"file-pic\"\n    >\n    <div\n      *ngIf=\"!uploadedFile.uploadMeta\"\n      class=\"file-pic\"\n    >\n      <div class=\"dwu-loader\"></div>\n    </div>\n  </div>\n</div>\n<div class=\"footer\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/near-me/near-me.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/photo-gallery/near-me/near-me.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"nearByUploads$ | async as nearByUploads\" class=\"uploaded-file-container\">\n  <div\n    *ngFor=\"let uploadedFile of nearByUploads; trackBy: trackById\"\n    class=\"uploaded-file\"\n  >\n    <div class=\"file-name\">\n      <div>{{ uploadedFile.fileName }}</div>\n      <span\n        *ngIf=\"firebaseAuthService.user$ | async as user\"\n        class=\"material-icons\"\n        (click)=\"onDeleteFile(uploadedFile, user)\"\n      >delete</span>\n    </div>\n    <img\n      *ngIf=\"uploadedFile.uploadMeta\"\n      [src]=\"uploadedFile.uploadMeta.downloadUrl\"\n      class=\"file-pic\"\n    >\n    <div\n      *ngIf=\"!uploadedFile.uploadMeta\"\n      class=\"file-pic\"\n    >\n      <div class=\"dwu-loader\"></div>\n    </div>\n  </div>\n</div>");

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
        console.log('upload', this.file);
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

/***/ "./src/app/photo-gallery/my-uploads/my-uploads.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/photo-gallery/my-uploads/my-uploads.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("dwu-user-login, dwu-file-uploader {\n  margin: 0.25rem;\n  display: block;\n}\n\n.uploaded-file-container {\n  padding: 0.5rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.uploaded-file-container .uploaded-file {\n  margin: 0.5rem;\n  width: 20rem;\n  display: flex;\n  flex-direction: column;\n}\n\n.uploaded-file-container .uploaded-file .file-name {\n  color: #F4F7EA;\n  background-color: #3F4038;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n\n.uploaded-file-container .uploaded-file .file-pic {\n  width: 20rem;\n  height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9waG90by1nYWxsZXJ5L215LXVwbG9hZHMvbXktdXBsb2Fkcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9teS11cGxvYWRzL215LXVwbG9hZHMuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQ0RGOztBRElBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FDREY7O0FERUU7RUFDRSxjQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQ0FKOztBRENJO0VBQ0UsY0VOUTtFRk9SLHlCRUlRO0VGSFIsdUJBQUE7RUFDQSxrQ0FBQTtBQ0NOOztBRENJO0VBQ0UsWUFBQTtFQUNBLGFBQUE7QUNDTiIsImZpbGUiOiJzcmMvYXBwL3Bob3RvLWdhbGxlcnkvbXktdXBsb2Fkcy9teS11cGxvYWRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnbWl4aW5zJztcblxuZHd1LXVzZXItbG9naW4sIGR3dS1maWxlLXVwbG9hZGVyIHtcbiAgbWFyZ2luOiAwLjI1cmVtO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnVwbG9hZGVkLWZpbGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC51cGxvYWRlZC1maWxlIHtcbiAgICBtYXJnaW46IDAuNXJlbTtcbiAgICB3aWR0aDogMjByZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIC5maWxlLW5hbWUge1xuICAgICAgY29sb3I6ICRsaWdodC1ncmVlbjtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjay1vbGl2ZTtcbiAgICAgIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICAgICAgYm9yZGVyLXJhZGl1czogMC4yNXJlbSAwLjI1cmVtIDAgMDtcbiAgICB9XG4gICAgLmZpbGUtcGljIHtcbiAgICAgIHdpZHRoOiAyMHJlbTtcbiAgICAgIGhlaWdodDogMTVyZW07XG4gICAgfVxuICB9XG59XG5cbiIsImR3dS11c2VyLWxvZ2luLCBkd3UtZmlsZS11cGxvYWRlciB7XG4gIG1hcmdpbjogMC4yNXJlbTtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi51cGxvYWRlZC1maWxlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnVwbG9hZGVkLWZpbGUtY29udGFpbmVyIC51cGxvYWRlZC1maWxlIHtcbiAgbWFyZ2luOiAwLjVyZW07XG4gIHdpZHRoOiAyMHJlbTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi51cGxvYWRlZC1maWxlLWNvbnRhaW5lciAudXBsb2FkZWQtZmlsZSAuZmlsZS1uYW1lIHtcbiAgY29sb3I6ICNGNEY3RUE7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gIHBhZGRpbmc6IDAuMjVyZW0gMC41cmVtO1xuICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xufVxuLnVwbG9hZGVkLWZpbGUtY29udGFpbmVyIC51cGxvYWRlZC1maWxlIC5maWxlLXBpYyB7XG4gIHdpZHRoOiAyMHJlbTtcbiAgaGVpZ2h0OiAxNXJlbTtcbn0iLCJcbiRkYXJrLWdyZWVuOiAjMjkyRTEyO1xuJGFybXktZ3JlZW46ICM0QjUzMjA7XG4kb2xpdmUtZ3JlZW46ICM3MDgyMzg7XG4kbW9zcy1ncmVlbjogIzhBOUE1QjtcbiRsYXVyZWwtZ3JlZW46ICNCQUMzOUY7XG5cbiRzYXR1cmF0ZWQtb2xpdmU6ICM3Mjk5MDA7XG4kc2F0dXJhdGVkLWJsdWU6ICMxNjRFQjc7XG5cbi8vIG5pY2UgZm9yIHRleHQgYWdhaW5zdCBkYXJrIGJhY2tncm91bmRcbiRsaWdodC1ncmVlbjogI0Y0RjdFQTtcbiRsaWdodGVzdC1ncmVlbjogI0ZDRkNGOTtcblxuLy8gVXNlZCBmb3IgZmlsZSBzZWxlY3RvclxuJGVnZ3NoZWxsLWRhcmtlcjogI0RERDlDRjtcbiRlZ2dzaGVsbC1kYXJrOiAjRUFFNkRBO1xuJGVnZ3NoZWxsOiAjRUZFQkRGO1xuJGVnZ3NoZWxsLWxpZ2h0OiAjRjJFRUUxO1xuXG4vLyBncmF5c1xuJGJhc2ljYWxseS1ibGFjazogIzIwMjEyNDtcbiRibGFjay1vbGl2ZTogIzNGNDAzODtcbiRncmFuaXRlOiAjNjU2MzVGO1xuJGxpZ2h0ZXItZ3JheTogIzlEOUI5OTtcbiR3aGl0ZTogI2ZmZjtcblxuJGdvbGQ6ICNENkI5MDI7XG4kc3Rhci1ibHVlOiAjMUQ2MkM0O1xuXG4kYnJlYWstc21hbGw6IDU1MHB4O1xuJGJyZWFrLW1kOiA4MDBweDtcbiRicmVhay1sYXJnZTogMTAyNHB4O1xuIl19 */");

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
            var fileMetadata;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.exifService.getMetaData(file)];
                    case 1:
                        fileMetadata = _a.sent();
                        this.pgs.uploadFile(file, user, fileMetadata);
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
/* harmony default export */ __webpack_exports__["default"] = (".uploaded-file-container {\n  padding: 0.5rem;\n  display: flex;\n  flex-wrap: wrap;\n}\n.uploaded-file-container .uploaded-file {\n  margin: 0.5rem;\n  width: 20rem;\n  display: flex;\n  flex-direction: column;\n}\n.uploaded-file-container .uploaded-file .file-name {\n  color: #F4F7EA;\n  background-color: #3F4038;\n  padding: 0.25rem 0.5rem;\n  border-radius: 0.25rem 0.25rem 0 0;\n}\n.uploaded-file-container .uploaded-file .file-pic {\n  width: 20rem;\n  height: 15rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL2FwcC9waG90by1nYWxsZXJ5L25lYXItbWUvbmVhci1tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9uZWFyLW1lL25lYXItbWUuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvYWRtaW4vcHJvamVjdHMvZGF3dS1ob21lL3NyYy9zdHlsZXMvdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUNERjtBREVFO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUNBSjtBRENJO0VBQ0UsY0VEUTtFRkVSLHlCRVNRO0VGUlIsdUJBQUE7RUFDQSxrQ0FBQTtBQ0NOO0FEQ0k7RUFDRSxZQUFBO0VBQ0EsYUFBQTtBQ0NOIiwiZmlsZSI6InNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9uZWFyLW1lL25lYXItbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdtaXhpbnMnO1xuXG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIge1xuICBwYWRkaW5nOiAwLjVyZW07XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLnVwbG9hZGVkLWZpbGUge1xuICAgIG1hcmdpbjogMC41cmVtO1xuICAgIHdpZHRoOiAyMHJlbTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgLmZpbGUtbmFtZSB7XG4gICAgICBjb2xvcjogJGxpZ2h0LWdyZWVuO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW9saXZlO1xuICAgICAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gICAgICBib3JkZXItcmFkaXVzOiAwLjI1cmVtIDAuMjVyZW0gMCAwO1xuICAgIH1cbiAgICAuZmlsZS1waWMge1xuICAgICAgd2lkdGg6IDIwcmVtO1xuICAgICAgaGVpZ2h0OiAxNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuIiwiLnVwbG9hZGVkLWZpbGUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogMC41cmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIgLnVwbG9hZGVkLWZpbGUge1xuICBtYXJnaW46IDAuNXJlbTtcbiAgd2lkdGg6IDIwcmVtO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnVwbG9hZGVkLWZpbGUtY29udGFpbmVyIC51cGxvYWRlZC1maWxlIC5maWxlLW5hbWUge1xuICBjb2xvcjogI0Y0RjdFQTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGNDAzODtcbiAgcGFkZGluZzogMC4yNXJlbSAwLjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDAuMjVyZW0gMC4yNXJlbSAwIDA7XG59XG4udXBsb2FkZWQtZmlsZS1jb250YWluZXIgLnVwbG9hZGVkLWZpbGUgLmZpbGUtcGljIHtcbiAgd2lkdGg6IDIwcmVtO1xuICBoZWlnaHQ6IDE1cmVtO1xufSIsIlxuJGRhcmstZ3JlZW46ICMyOTJFMTI7XG4kYXJteS1ncmVlbjogIzRCNTMyMDtcbiRvbGl2ZS1ncmVlbjogIzcwODIzODtcbiRtb3NzLWdyZWVuOiAjOEE5QTVCO1xuJGxhdXJlbC1ncmVlbjogI0JBQzM5RjtcblxuJHNhdHVyYXRlZC1vbGl2ZTogIzcyOTkwMDtcbiRzYXR1cmF0ZWQtYmx1ZTogIzE2NEVCNztcblxuLy8gbmljZSBmb3IgdGV4dCBhZ2FpbnN0IGRhcmsgYmFja2dyb3VuZFxuJGxpZ2h0LWdyZWVuOiAjRjRGN0VBO1xuJGxpZ2h0ZXN0LWdyZWVuOiAjRkNGQ0Y5O1xuXG4vLyBVc2VkIGZvciBmaWxlIHNlbGVjdG9yXG4kZWdnc2hlbGwtZGFya2VyOiAjREREOUNGO1xuJGVnZ3NoZWxsLWRhcms6ICNFQUU2REE7XG4kZWdnc2hlbGw6ICNFRkVCREY7XG4kZWdnc2hlbGwtbGlnaHQ6ICNGMkVFRTE7XG5cbi8vIGdyYXlzXG4kYmFzaWNhbGx5LWJsYWNrOiAjMjAyMTI0O1xuJGJsYWNrLW9saXZlOiAjM0Y0MDM4O1xuJGdyYW5pdGU6ICM2NTYzNUY7XG4kbGlnaHRlci1ncmF5OiAjOUQ5Qjk5O1xuJHdoaXRlOiAjZmZmO1xuXG4kZ29sZDogI0Q2QjkwMjtcbiRzdGFyLWJsdWU6ICMxRDYyQzQ7XG5cbiRicmVhay1zbWFsbDogNTUwcHg7XG4kYnJlYWstbWQ6IDgwMHB4O1xuJGJyZWFrLWxhcmdlOiAxMDI0cHg7XG4iXX0= */");

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
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/index */ "./src/app/services/index.ts");
/* harmony import */ var _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @photo-gallery/services/index */ "./src/app/photo-gallery/services/index.ts");




var NearMeComponent = /** @class */ (function () {
    function NearMeComponent(firebaseAuthService, pgs, exifService, userLocationService) {
        this.firebaseAuthService = firebaseAuthService;
        this.pgs = pgs;
        this.exifService = exifService;
        this.userLocationService = userLocationService;
        // this.uploadedFiles$ = this.pgs.getUploadedFiles$();
        this.nearByUploads$ = this.pgs.getNearByUploads$();
        console.log('this.nearByUploads$', this.nearByUploads$);
        this.nearByUploads$.subscribe(console.log);
    }
    NearMeComponent.prototype.trackById = function (file) {
        return file.id;
    };
    NearMeComponent.ctorParameters = function () { return [
        { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["ExifService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["UserLocationService"] }
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
/* harmony default export */ __webpack_exports__["default"] = ("@media screen and (max-width: 750px) {\n  :host div.page-container {\n    flex-direction: column;\n  }\n  :host div.page-container .left-side {\n    flex: 0 0 auto;\n    height: 13.25rem;\n    width: 100%;\n    max-width: none;\n    transition: height 50ms;\n  }\n  :host div.page-container .left-side.expanded {\n    height: 85%;\n  }\n  :host div.page-container .left-side .expander {\n    background-color: #3F4038;\n    color: #FCFCF9;\n    position: absolute;\n    bottom: 0;\n    left: 50%;\n    transform: translateX(-50%);\n    width: 3.5rem;\n    height: 1rem;\n    border: 1px solid #8A9A5B;\n    border-radius: 5px 5px 0 0;\n    text-align: center;\n    display: flex;\n    justify-content: center;\n    cursor: pointer;\n  }\n  :host div.page-container .left-side .expander:hover:not([disabled]) {\n    background-color: #4B5320;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander.active:not([disabled]) {\n    background-color: #708238;\n    color: #FCFCF9;\n  }\n  :host div.page-container .left-side .expander[disabled] {\n    pointer-events: none;\n    opacity: 0.3;\n  }\n  :host div.page-container .left-side .expander .expander-icon {\n    font-size: 16px;\n  }\n  :host div.page-container .left-side .expander .expander-icon.flipped {\n    transform: rotate(180deg);\n  }\n}\n:host .page-container {\n  height: 100%;\n  width: 100%;\n  display: flex;\n}\n:host .page-container .left-side {\n  position: relative;\n  flex: 1 1 0;\n  overflow: hidden;\n  max-width: 27.5%;\n  min-width: 20rem;\n}\n:host .page-container .left-side .expander {\n  display: none;\n}\n:host .page-container .right-side {\n  flex: 1 1 0;\n  overflow: auto;\n  position: relative;\n}\n:host .page-container {\n  display: flex;\n  flex-direction: column;\n  padding-left: 1rem;\n}\n:host .page-container .footer {\n  padding-bottom: 15rem;\n}\n.nav-items-container {\n  display: flex;\n  justify-content: flex-start;\n  margin: 1rem 2rem 0 2rem;\n  height: 2rem;\n}\n@media only screen and (max-width: 550px) {\n  .nav-items-container {\n    margin: 0 0.25rem;\n    justify-content: center;\n  }\n}\n.nav-items-container .nav-item {\n  background-color: #3F4038;\n  color: #FCFCF9;\n  width: 8rem;\n  padding: 0.5rem;\n  cursor: pointer;\n  text-align: center;\n  outline: none;\n  white-space: nowrap;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  flex: 0 1 auto;\n  margin: 0 0.25rem;\n  border-radius: 4px 4px 0 0;\n}\n.nav-items-container .nav-item:hover:not([disabled]) {\n  background-color: #4B5320;\n  color: #FCFCF9;\n}\n.nav-items-container .nav-item.active:not([disabled]) {\n  background-color: #708238;\n  color: #FCFCF9;\n}\n.nav-items-container .nav-item[disabled] {\n  pointer-events: none;\n  opacity: 0.3;\n}\n.page-content {\n  background-color: #EFEBDF;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9hZG1pbi9wcm9qZWN0cy9kYXd1LWhvbWUvc3JjL3N0eWxlcy9taXhpbnMuc2NzcyIsInNyYy9hcHAvcGhvdG8tZ2FsbGVyeS9waG90by1nYWxsZXJ5LmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvc3R5bGVzL3ZhcmlhYmxlcy5zY3NzIiwiL1VzZXJzL2FkbWluL3Byb2plY3RzL2Rhd3UtaG9tZS9zcmMvYXBwL3Bob3RvLWdhbGxlcnkvcGhvdG8tZ2FsbGVyeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0Rkk7RUFDSTtJQUNJLHNCQUFBO0VDM0ZWO0VENEZVO0lBQ0ksY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLGVBQUE7SUFFQSx1QkFBQTtFQzNGZDtFRDRGYztJQUNJLFdBQUE7RUMxRmxCO0VENEZjO0lBOEdkLHlCRWpNWTtJRmtNWixjRTVNZTtJRitGRyxrQkFBQTtJQUNBLFNBQUE7SUFDQSxTQUFBO0lBQ0EsMkJBQUE7SUFDQSxhQUFBO0lBQ0EsWUFBQTtJQUNBLHlCQUFBO0lBQ0EsMEJBQUE7SUFDQSxrQkFBQTtJQUNBLGFBQUE7SUFDQSx1QkFBQTtJQUNBLGVBQUE7RUN6RmxCO0VENExBO0lBQ0UseUJFeE5TO0lGeU5ULGNFL01hO0VEcUJmO0VENExBO0lBQ0UseUJFM05VO0lGNE5WLGNFbk5hO0VEeUJmO0VENExBO0lBQ0Usb0JBQUE7SUFDQSxZQUFBO0VDMUxGO0VEOEVrQjtJQUNJLGVBQUE7RUM1RXRCO0VENkVzQjtJQUNJLHlCQUFBO0VDM0UxQjtBQUNGO0FEa0ZJO0VBQ0ksWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FDaEZSO0FEa0ZRO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDaEZaO0FEaUZZO0VBQ0ksYUFBQTtBQy9FaEI7QURrRlE7RUFDSSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FDaEZaO0FFaEVFO0VBQ0UsYUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7QUZrRUo7QUVqRUk7RUFDRSxxQkFBQTtBRm1FTjtBRTlEQTtFQUNFLGFBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsWUFBQTtBRmlFRjtBRGlLSTtFR3RPSjtJQU1JLGlCQUFBO0lBQ0EsdUJBQUE7RUZtRUY7QUFDRjtBRWxFRTtFSGdNQSx5QkVqTVk7RUZrTVosY0U1TWU7RUZrTGIsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtLQUFBLHNCQUFBO01BQUEscUJBQUE7VUFBQSxpQkFBQTtFRzNLQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSwwQkFBQTtBRjRFSjtBRGtIRTtFQUNFLHlCRXhOUztFRnlOVCxjRS9NYTtBRCtGakI7QURrSEU7RUFDRSx5QkUzTlU7RUY0TlYsY0VuTmE7QURtR2pCO0FEa0hFO0VBQ0Usb0JBQUE7RUFDQSxZQUFBO0FDaEhKO0FFcEZBO0VBQ0UseUJEZlM7QURzR1giLCJmaWxlIjoic3JjL2FwcC9waG90by1nYWxsZXJ5L3Bob3RvLWdhbGxlcnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICd2YXJpYWJsZXMnO1xuXG5AbWl4aW4gYmFzZS1jb3JvbmEtZGFzaGJvYXJkIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwYWRkaW5nLWJvdHRvbTogMnJlbTtcbiAgICAuY2hhcnQtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLmNoYXJ0LWhlYWRlciB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDEuNXJlbTtcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5yYWRpby1idXR0b24tY29udGFpbmVye1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b25zIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgcmFkaW8tYnV0dG9uLWNvbnRhaW5lcjtcbiAgICAgICAgICAgICAgICAgICAgJjpub3QoOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogMXJlbTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLmNoYXJ0IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1pbi13aWR0aDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAzcHg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5tYXRlcmlhbC1pY29ucyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDEgMCBhdXRvO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC5yYWRpby1idXR0b24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZHd1LXN0YXQtdmlld2VyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICAgICAgICAgICAgZmxleDogMSAwIGF1dG87XG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAub3ZlcnZpZXcuY2hhcnQge1xuICAgICAgICAgICAgaGVpZ2h0OiAxMi41cmVtO1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgZHd1LWNoYXJ0LWxlZ2VuZCB7XG4gICAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDAuMjVyZW07XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWl4aW4gcmFkaW8tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICAucmFkaW8tYnV0dG9uIHtcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQtbWluaS1idXR0b247XG4gICAgICAgIEBpbmNsdWRlIHNoYWRvdztcbiAgICAgICAgJjpmaXJzdC1jaGlsZCB7XG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggMCAwIDVweDtcbiAgICAgICAgfVxuICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggNXB4IDA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbkBtaXhpbiBzaGFkb3cge1xuICAgIHRyYW5zaXRpb24tZHVyYXRpb246IGJveC1zaGFkb3cgMjVtcywgdHJhbnNmb3JtLCAyNW1zO1xuICAgIGJveC1zaGFkb3c6IDFweCAxcHggMnB4IDAgJGxpZ2h0ZXItZ3JheTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgJjphY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG4gICAgJi5hY3RpdmUge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMXB4KTtcbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICB9XG59XG5cbkBtaXhpbiByZXNwb25zaXZlLXBhZ2Uge1xuICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XG4gICAgICAgIGRpdi5wYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgICAgLmxlZnQtc2lkZSB7XG4gICAgICAgICAgICAgICAgZmxleDogMCAwIGF1dG87XG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMy4yNXJlbTtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgICAgICAgLy8gbWluLXdpZHRoOiBub25lO1xuICAgICAgICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCA1MG1zO1xuICAgICAgICAgICAgICAgICYuZXhwYW5kZWQge1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDg1JTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgICAgICAgICBib3R0b206IDA7XG4gICAgICAgICAgICAgICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMy41cmVtO1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDFyZW07XG4gICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRtb3NzLWdyZWVuO1xuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHggNXB4IDAgMCA7XG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgLmV4cGFuZGVyLWljb24ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgICAgICAgICAgJi5mbGlwcGVkIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnBhZ2UtY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcblxuICAgICAgICAubGVmdC1zaWRlIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICAgIG1heC13aWR0aDogMjcuNSU7XG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwcmVtO1xuICAgICAgICAgICAgLmV4cGFuZGVyIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yaWdodC1zaWRlIHtcbiAgICAgICAgICAgIGZsZXg6IDEgMSAwO1xuICAgICAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cbiAgICB9XG5cbn1cbkBtaXhpbiBsaWdodC1taW5pLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgbGlnaHQtdGhlbWU7XG4gICAgQGluY2x1ZGUgYnV0dG9uLXhzO1xufVxuXG5AbWl4aW4gbGlnaHQtc21hbGwtYnV0dG9uIHtcbiAgICBAaW5jbHVkZSBsaWdodC10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tc207XG59XG5cbkBtaXhpbiBkYXJrLWJ1dHRvbiB7XG4gICAgQGluY2x1ZGUgZGFyay10aGVtZTtcbiAgICBAaW5jbHVkZSBidXR0b24tbWQ7XG59XG5cbkBtaXhpbiBidXR0b24teHMge1xuICAgIG1pbi13aWR0aDogMnJlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBmb250LXNpemU6IDFyZW07XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBvdXRsaW5lOiBub25lO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbkBtaXhpbiBidXR0b24tc20ge1xuICAgIG1pbi13aWR0aDogM3JlbTtcbiAgICBwYWRkaW5nOiAwLjI1cmVtIDAuNXJlbTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG91dGxpbmU6IG5vbmU7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcbn1cblxuQG1peGluIGJ1dHRvbi1tZCB7XG4gICAgd2lkdGg6IDhyZW07XG4gICAgcGFkZGluZzogMC41cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIHVzZXItc2VsZWN0OiBub25lO1xufVxuXG5AbWl4aW4gbGlnaHQtdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAkZWdnc2hlbGwtZGFyaztcbiAgJjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRsYXVyZWwtZ3JlZW47XG4gIH1cbiAgJi5hY3RpdmU6bm90KFtkaXNhYmxlZF0pIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkb2xpdmUtZ3JlZW47XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgfVxuICAmW2Rpc2FibGVkXSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG59XG5cbkBtaXhpbiBkYXJrLXRoZW1lIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrLW9saXZlO1xuICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICAmOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGFybXktZ3JlZW47XG4gICAgY29sb3I6ICRsaWdodGVzdC1ncmVlbjtcbiAgfVxuICAmLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRvbGl2ZS1ncmVlbjtcbiAgICBjb2xvcjogJGxpZ2h0ZXN0LWdyZWVuO1xuICB9XG4gICZbZGlzYWJsZWRdIHtcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICBvcGFjaXR5OiAwLjM7XG4gIH1cbn1cblxuQG1peGluIHRvcC1uYXYtcGFnZSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAubWFpbi1jb250ZW50IHtcbiAgICAgICAgZmxleDogMSAxIDA7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIH1cbn1cblxuQG1peGluIHJlc3BvbmQtdG8oJG1lZGlhKSB7XG4gIEBpZiAkbWVkaWEgPT0gc21hbGwge1xuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogJGJyZWFrLXNtYWxsKSB7IEBjb250ZW50OyB9XG4gIH1cbiAgQGVsc2UgaWYgJG1lZGlhID09IG1lZGl1bSB7XG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAkYnJlYWstc21hbGwgKyAxKSBhbmQgKG1heC13aWR0aDogJGJyZWFrLWxhcmdlIC0gMSkgeyBAY29udGVudDsgfVxuICB9XG4gIEBlbHNlIGlmICRtZWRpYSA9PSB3aWRlIHtcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicmVhay1sYXJnZSkgeyBAY29udGVudDsgfVxuICB9XG59XG4iLCJAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NTBweCkge1xuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICAgIGZsZXg6IDAgMCBhdXRvO1xuICAgIGhlaWdodDogMTMuMjVyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHRyYW5zaXRpb246IGhlaWdodCA1MG1zO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlLmV4cGFuZGVkIHtcbiAgICBoZWlnaHQ6IDg1JTtcbiAgfVxuICA6aG9zdCBkaXYucGFnZS1jb250YWluZXIgLmxlZnQtc2lkZSAuZXhwYW5kZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjQwMzg7XG4gICAgY29sb3I6ICNGQ0ZDRjk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgIHdpZHRoOiAzLjVyZW07XG4gICAgaGVpZ2h0OiAxcmVtO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICM4QTlBNUI7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4IDVweCAwIDA7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlcjpob3Zlcjpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0QjUzMjA7XG4gICAgY29sb3I6ICNGQ0ZDRjk7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM3MDgyMzg7XG4gICAgY29sb3I6ICNGQ0ZDRjk7XG4gIH1cbiAgOmhvc3QgZGl2LnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyW2Rpc2FibGVkXSB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgb3BhY2l0eTogMC4zO1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlciAuZXhwYW5kZXItaWNvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xuICB9XG4gIDpob3N0IGRpdi5wYWdlLWNvbnRhaW5lciAubGVmdC1zaWRlIC5leHBhbmRlciAuZXhwYW5kZXItaWNvbi5mbGlwcGVkIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICB9XG59XG46aG9zdCAucGFnZS1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGZsZXg6IDEgMSAwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBtYXgtd2lkdGg6IDI3LjUlO1xuICBtaW4td2lkdGg6IDIwcmVtO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5sZWZ0LXNpZGUgLmV4cGFuZGVyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbjpob3N0IC5wYWdlLWNvbnRhaW5lciAucmlnaHQtc2lkZSB7XG4gIGZsZXg6IDEgMSAwO1xuICBvdmVyZmxvdzogYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcGFkZGluZy1sZWZ0OiAxcmVtO1xufVxuOmhvc3QgLnBhZ2UtY29udGFpbmVyIC5mb290ZXIge1xuICBwYWRkaW5nLWJvdHRvbTogMTVyZW07XG59XG5cbi5uYXYtaXRlbXMtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBtYXJnaW46IDFyZW0gMnJlbSAwIDJyZW07XG4gIGhlaWdodDogMnJlbTtcbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcbiAgLm5hdi1pdGVtcy1jb250YWluZXIge1xuICAgIG1hcmdpbjogMCAwLjI1cmVtO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICB9XG59XG4ubmF2LWl0ZW1zLWNvbnRhaW5lciAubmF2LWl0ZW0ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0Y0MDM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbiAgd2lkdGg6IDhyZW07XG4gIHBhZGRpbmc6IDAuNXJlbTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBmbGV4OiAwIDEgYXV0bztcbiAgbWFyZ2luOiAwIDAuMjVyZW07XG4gIGJvcmRlci1yYWRpdXM6IDRweCA0cHggMCAwO1xufVxuLm5hdi1pdGVtcy1jb250YWluZXIgLm5hdi1pdGVtOmhvdmVyOm5vdChbZGlzYWJsZWRdKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM0QjUzMjA7XG4gIGNvbG9yOiAjRkNGQ0Y5O1xufVxuLm5hdi1pdGVtcy1jb250YWluZXIgLm5hdi1pdGVtLmFjdGl2ZTpub3QoW2Rpc2FibGVkXSkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNzA4MjM4O1xuICBjb2xvcjogI0ZDRkNGOTtcbn1cbi5uYXYtaXRlbXMtY29udGFpbmVyIC5uYXYtaXRlbVtkaXNhYmxlZF0ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgb3BhY2l0eTogMC4zO1xufVxuXG4ucGFnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VGRUJERjtcbn0iLCJcbiRkYXJrLWdyZWVuOiAjMjkyRTEyO1xuJGFybXktZ3JlZW46ICM0QjUzMjA7XG4kb2xpdmUtZ3JlZW46ICM3MDgyMzg7XG4kbW9zcy1ncmVlbjogIzhBOUE1QjtcbiRsYXVyZWwtZ3JlZW46ICNCQUMzOUY7XG5cbiRzYXR1cmF0ZWQtb2xpdmU6ICM3Mjk5MDA7XG4kc2F0dXJhdGVkLWJsdWU6ICMxNjRFQjc7XG5cbi8vIG5pY2UgZm9yIHRleHQgYWdhaW5zdCBkYXJrIGJhY2tncm91bmRcbiRsaWdodC1ncmVlbjogI0Y0RjdFQTtcbiRsaWdodGVzdC1ncmVlbjogI0ZDRkNGOTtcblxuLy8gVXNlZCBmb3IgZmlsZSBzZWxlY3RvclxuJGVnZ3NoZWxsLWRhcmtlcjogI0RERDlDRjtcbiRlZ2dzaGVsbC1kYXJrOiAjRUFFNkRBO1xuJGVnZ3NoZWxsOiAjRUZFQkRGO1xuJGVnZ3NoZWxsLWxpZ2h0OiAjRjJFRUUxO1xuXG4vLyBncmF5c1xuJGJhc2ljYWxseS1ibGFjazogIzIwMjEyNDtcbiRibGFjay1vbGl2ZTogIzNGNDAzODtcbiRncmFuaXRlOiAjNjU2MzVGO1xuJGxpZ2h0ZXItZ3JheTogIzlEOUI5OTtcbiR3aGl0ZTogI2ZmZjtcblxuJGdvbGQ6ICNENkI5MDI7XG4kc3Rhci1ibHVlOiAjMUQ2MkM0O1xuXG4kYnJlYWstc21hbGw6IDU1MHB4O1xuJGJyZWFrLW1kOiA4MDBweDtcbiRicmVhay1sYXJnZTogMTAyNHB4O1xuIiwiQGltcG9ydCAnbWl4aW5zJztcblxuOmhvc3Qge1xuICBAaW5jbHVkZSByZXNwb25zaXZlLXBhZ2U7XG4gIC5wYWdlLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHBhZGRpbmctbGVmdDogMXJlbTtcbiAgICAuZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxNXJlbTtcbiAgICB9XG4gIH1cbn1cblxuLm5hdi1pdGVtcy1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIG1hcmdpbjogMXJlbSAycmVtIDAgMnJlbTtcbiAgaGVpZ2h0OiAycmVtO1xuICBAaW5jbHVkZSByZXNwb25kLXRvKHNtYWxsKSB7XG4gICAgbWFyZ2luOiAwIDAuMjVyZW07XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIH1cbiAgLm5hdi1pdGVtIHtcbiAgICBAaW5jbHVkZSBkYXJrLWJ1dHRvbjtcbiAgICBmbGV4OiAwIDEgYXV0bztcbiAgICBtYXJnaW46IDAgMC4yNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcbiAgfVxufVxuXG4ucGFnZS1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogJGVnZ3NoZWxsO1xufSJdfQ== */");

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
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/index */ "./src/app/services/index.ts");
/* harmony import */ var _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @photo-gallery/services/index */ "./src/app/photo-gallery/services/index.ts");




// import * as EXIFStatic from 'exif-js';
var PhotoGalleryComponent = /** @class */ (function () {
    function PhotoGalleryComponent(firebaseAuthService, pgs, exifService, userLocationService) {
        this.firebaseAuthService = firebaseAuthService;
        this.pgs = pgs;
        this.exifService = exifService;
        this.userLocationService = userLocationService;
        // this.uploadedFiles$ = this.pgs.getUploadedFiles$();
    }
    PhotoGalleryComponent.ctorParameters = function () { return [
        { type: _services_index__WEBPACK_IMPORTED_MODULE_2__["FirebaseAuthService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["PhotoGalleryService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["ExifService"] },
        { type: _photo_gallery_services_index__WEBPACK_IMPORTED_MODULE_3__["UserLocationService"] }
    ]; };
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
/* harmony import */ var latlon_geohash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! latlon-geohash */ "./node_modules/latlon-geohash/latlon-geohash.js");




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
                    resolve({});
                    return;
                }
                console.log('exif', exif);
                var latitudeMag = exif.GPSLatitude[0] + (exif.GPSLatitude[1] / 60) + (exif.GPSLatitude[2] / 3600);
                var longitudeMag = exif.GPSLongitude[0] + (exif.GPSLongitude[1] / 60) + (exif.GPSLongitude[2] / 3600);
                var latitude = (exif.GPSLatitudeRef === 'N') ? latitudeMag : -latitudeMag;
                var longitude = (exif.GPSLongitudeRef === 'E') ? longitudeMag : -longitudeMag;
                var geohash = latlon_geohash__WEBPACK_IMPORTED_MODULE_3__["default"].encode(latitude, longitude, 12);
                resolve({
                    latitude: latitude,
                    longitude: longitude,
                    geohash: geohash,
                });
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
/* harmony import */ var _services_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/index */ "./src/app/services/index.ts");
/* harmony import */ var _user_location_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-location.service */ "./src/app/photo-gallery/services/user-location.service.ts");






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
                        console.log('fileDeleted', fileId);
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
    PhotoGalleryService.prototype.getNearByUploads$ = function () {
        var _this = this;
        var nearByUploadStreams$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        var userLocation = this.userLocationService.getUserLocation()
            .then(function (userLocation) {
            nearByUploadStreams$.next(_this.ffs.getNearbyUploads$(userLocation));
        });
        return nearByUploadStreams$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (nearbyUploads$) {
            return nearbyUploads$;
        }));
    };
    PhotoGalleryService.ctorParameters = function () { return [
        { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["FirebaseAuthService"] },
        { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["FirebaseFirestoreService"] },
        { type: _services_index__WEBPACK_IMPORTED_MODULE_4__["FirebaseStorageService"] },
        { type: _user_location_service__WEBPACK_IMPORTED_MODULE_5__["UserLocationService"] }
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
/* harmony import */ var latlon_geohash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! latlon-geohash */ "./node_modules/latlon-geohash/latlon-geohash.js");



var UserLocationService = /** @class */ (function () {
    function UserLocationService() {
    }
    UserLocationService.prototype.getUserLocation = function () {
        return new Promise(function (resolve, reject) {
            navigator.geolocation.getCurrentPosition(function (userLocation) {
                console.log('userLocation', userLocation);
                var latitude = userLocation.coords.latitude;
                var longitude = userLocation.coords.longitude;
                var geohash = latlon_geohash__WEBPACK_IMPORTED_MODULE_2__["default"].encode(latitude, longitude, 12);
                resolve({
                    geohash: geohash,
                    latitude: latitude,
                    longitude: longitude,
                });
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
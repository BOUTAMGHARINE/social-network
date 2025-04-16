(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_acdca806._.js", {

"[project]/src/components/likeDislikeComment/likeDislikeComment.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LikeDislikeComment)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
// import styles from ""
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function LikeDislikeComment() {
    _s();
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [disliked, setDisliked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [comment, setComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [submittedComment, setSubmittedComment] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const handleLike = ()=>{
        setLiked(!liked);
        if (disliked) setDisliked(false);
    };
    const handleDislike = ()=>{
        setDisliked(!disliked);
        if (liked) setLiked(false);
    };
    const handleCommentSubmit = (e)=>{
        e.preventDefault();
        setSubmittedComment(comment);
        setComment('');
    };
    return(//className={styles.reactionContainer}
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            minWidth: '100%',
            margin: '5px auto'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "buttons",
                style: {
                    fontSize: '24px',
                    marginBottom: '10px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: handleLike,
                        style: {
                            color: liked ? 'var(--color-primary)' : 'gray',
                            fontSize: '18px',
                            backgroundColor: 'transparent',
                            border: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiLike"], {}, void 0, false, {
                                fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                                lineNumber: 36,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Like"
                            }, void 0, false, {
                                fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                                lineNumber: 36,
                                columnNumber: 22
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        // className={styles.button}
                        onClick: handleDislike,
                        style: {
                            color: disliked ? 'red' : 'gray',
                            fontSize: '18px',
                            backgroundColor: 'transparent',
                            border: 'none'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiDislike"], {}, void 0, false, {
                                fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                                lineNumber: 43,
                                columnNumber: 11
                            }, this),
                            " ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: "Dislike"
                            }, void 0, false, {
                                fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                                lineNumber: 43,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                        lineNumber: 38,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                className: "form",
                onSubmit: handleCommentSubmit,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                        placeholder: "Write a comment...",
                        value: comment,
                        onChange: (e)=>setComment(e.target.value),
                        rows: 2,
                        style: {
                            width: '80%',
                            padding: '5px',
                            borderRadius: '4px',
                            resize: 'none'
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                        lineNumber: 48,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        style: {
                            marginTop: '0px',
                            marginLeft: '5px',
                            padding: '6px 12px',
                            backgroundColor: '#0070f3',
                            color: 'white',
                            border: 'none',
                            borderRadius: '4px',
                            cursor: 'pointer'
                        },
                        children: "Submit Comment"
                    }, void 0, false, {
                        fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                        lineNumber: 55,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            submittedComment && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    marginTop: '20px',
                    background: '#222',
                    padding: '10px',
                    borderRadius: '4px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                        children: "Comment:"
                    }, void 0, false, {
                        fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: submittedComment
                    }, void 0, false, {
                        fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                        lineNumber: 76,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
                lineNumber: 74,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/likeDislikeComment/likeDislikeComment.jsx",
        lineNumber: 32,
        columnNumber: 5
    }, this));
}
_s(LikeDislikeComment, "5Kd+rAFRdpVvmmm3XR334x+BN8I=");
_c = LikeDislikeComment;
var _c;
__turbopack_context__.k.register(_c, "LikeDislikeComment");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
"[project]/src/components/likeDislike/LikeDislike.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "button": "LikeDislike-module__nD08zG__button",
  "dislike": "LikeDislike-module__nD08zG__dislike",
  "like": "LikeDislike-module__nD08zG__like",
  "reactionContainer": "LikeDislike-module__nD08zG__reactionContainer",
});
}}),
"[project]/src/components/likeDislike/LikeDislike.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LikeDislike)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likeDislike$2f$LikeDislike$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/likeDislike/LikeDislike.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/bi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function LikeDislike() {
    _s();
    const [liked, setLiked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [disliked, setDisliked] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const handleLike = ()=>{
        setLiked(!liked);
        if (disliked) setDisliked(false); // undo dislike if like is clicked
    };
    const handleDislike = ()=>{
        setDisliked(!disliked);
        if (liked) setLiked(false); // undo like if dislike is clicked
    };
    return(// style={{ fontSize: '24px' }}
    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likeDislike$2f$LikeDislike$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].reactionContainer,
        style: {
            fontSize: '24px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likeDislike$2f$LikeDislike$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].like,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likeDislike$2f$LikeDislike$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                    onClick: handleLike,
                    style: {
                        color: liked ? 'var(--color-primary)' : 'gray',
                        fontSize: '18px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiLike"], {}, void 0, false, {
                            fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
                            lineNumber: 26,
                            columnNumber: 9
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Like"
                        }, void 0, false, {
                            fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
                            lineNumber: 26,
                            columnNumber: 20
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
                    lineNumber: 25,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
                lineNumber: 24,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likeDislike$2f$LikeDislike$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].dislike,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likeDislike$2f$LikeDislike$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__["default"].button,
                    onClick: handleDislike,
                    style: {
                        color: disliked ? 'red' : 'gray',
                        marginLeft: '10px',
                        fontSize: '18px'
                    },
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$bi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BiDislike"], {}, void 0, false, {
                            fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
                            lineNumber: 34,
                            columnNumber: 11
                        }, this),
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: "Dislike"
                        }, void 0, false, {
                            fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
                    lineNumber: 33,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/likeDislike/LikeDislike.jsx",
        lineNumber: 23,
        columnNumber: 5
    }, this));
}
_s(LikeDislike, "2hOUA1c9xUARlt6WzWPFBukmLfg=");
_c = LikeDislike;
{} //--------
 // return(
 //     <div className={styles.like}>
 //         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M709.23-140H288.46v-480l265.39-263.84L587.69-850q6.23 6.23 10.35 16.5 4.11 10.27 4.11 19.35V-804l-42.46 184h268q28.54 0 50.42 21.89Q900-576.23 900-547.69v64.61q0 6.23-1.62 13.46-1.61 7.23-3.61 13.47L780.15-185.69q-8.61 19.23-28.84 32.46T709.23-140Zm-360.77-60h360.77q4.23 0 8.65-2.31 4.43-2.31 6.74-7.69L840-480v-67.69q0-5.39-3.46-8.85t-8.85-3.46H483.85L534-779.23 348.46-594.46V-200Zm0-394.46V-200v-394.46Zm-60-25.54v60H160v360h128.46v60H100v-480h188.46Z"/></svg>
 //         <span>Like</span>
 //     </div>
 // );
var _c;
__turbopack_context__.k.register(_c, "LikeDislike");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_acdca806._.js.map
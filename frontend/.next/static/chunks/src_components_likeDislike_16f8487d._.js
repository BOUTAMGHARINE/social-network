(globalThis.TURBOPACK = globalThis.TURBOPACK || []).push(["static/chunks/src_components_likeDislike_16f8487d._.js", {

"[project]/src/components/likeDislike/likePost.module.css [app-client] (css module)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.v({
  "like": "likePost-module__rXTqNa__like",
});
}}),
"[project]/src/components/likeDislike/likePost.jsx [app-client] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname, k: __turbopack_refresh__, m: module } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>LikeDislike)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$likeDislike$2f$likePost$2e$module$2e$css__$5b$app$2d$client$5d$__$28$css__module$29$__ = __turbopack_context__.i("[project]/src/components/likeDislike/likePost.module.css [app-client] (css module)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        style: {
            fontSize: '24px'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleLike,
                style: {
                    color: liked ? 'green' : 'gray'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        xmlns: "http://www.w3.org/2000/svg",
                        height: "24px",
                        viewBox: "0 -960 960 960",
                        width: "24px",
                        fill: "#e3e3e3",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M709.23-140H288.46v-480l265.39-263.84L587.69-850q6.23 6.23 10.35 16.5 4.11 10.27 4.11 19.35V-804l-42.46 184h268q28.54 0 50.42 21.89Q900-576.23 900-547.69v64.61q0 6.23-1.62 13.46-1.61 7.23-3.61 13.47L780.15-185.69q-8.61 19.23-28.84 32.46T709.23-140Zm-360.77-60h360.77q4.23 0 8.65-2.31 4.43-2.31 6.74-7.69L840-480v-67.69q0-5.39-3.46-8.85t-8.85-3.46H483.85L534-779.23 348.46-594.46V-200Zm0-394.46V-200v-394.46Zm-60-25.54v60H160v360h128.46v60H100v-480h188.46Z"
                        }, void 0, false, {
                            fileName: "[project]/src/components/likeDislike/likePost.jsx",
                            lineNumber: 24,
                            columnNumber: 116
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/likeDislike/likePost.jsx",
                        lineNumber: 24,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Like"
                    }, void 0, false, {
                        fileName: "[project]/src/components/likeDislike/likePost.jsx",
                        lineNumber: 25,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/likeDislike/likePost.jsx",
                lineNumber: 22,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: handleDislike,
                style: {
                    color: disliked ? 'red' : 'gray',
                    marginLeft: '10px'
                },
                children: "👎 Dislike"
            }, void 0, false, {
                fileName: "[project]/src/components/likeDislike/likePost.jsx",
                lineNumber: 27,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/likeDislike/likePost.jsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
} //--------
 // return(
 //     <div className={styles.like}>
 //         <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e3e3e3"><path d="M709.23-140H288.46v-480l265.39-263.84L587.69-850q6.23 6.23 10.35 16.5 4.11 10.27 4.11 19.35V-804l-42.46 184h268q28.54 0 50.42 21.89Q900-576.23 900-547.69v64.61q0 6.23-1.62 13.46-1.61 7.23-3.61 13.47L780.15-185.69q-8.61 19.23-28.84 32.46T709.23-140Zm-360.77-60h360.77q4.23 0 8.65-2.31 4.43-2.31 6.74-7.69L840-480v-67.69q0-5.39-3.46-8.85t-8.85-3.46H483.85L534-779.23 348.46-594.46V-200Zm0-394.46V-200v-394.46Zm-60-25.54v60H160v360h128.46v60H100v-480h188.46Z"/></svg>
 //         <span>Like</span>                    
 //     </div>
 // );
_s(LikeDislike, "2hOUA1c9xUARlt6WzWPFBukmLfg=");
_c = LikeDislike;
var _c;
__turbopack_context__.k.register(_c, "LikeDislike");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(module, globalThis.$RefreshHelpers$);
}
}}),
}]);

//# sourceMappingURL=src_components_likeDislike_16f8487d._.js.map
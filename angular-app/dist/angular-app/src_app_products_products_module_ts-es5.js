(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (self["webpackChunkangular_app"] = self["webpackChunkangular_app"] || []).push([["src_app_products_products_module_ts"], {
    /***/
    3679:
    /*!********************************************************************!*\
      !*** ./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AbstractControl": function AbstractControl() {
          return (
            /* binding */
            _AbstractControl
          );
        },

        /* harmony export */
        "AbstractControlDirective": function AbstractControlDirective() {
          return (
            /* binding */
            _AbstractControlDirective
          );
        },

        /* harmony export */
        "AbstractFormGroupDirective": function AbstractFormGroupDirective() {
          return (
            /* binding */
            _AbstractFormGroupDirective
          );
        },

        /* harmony export */
        "COMPOSITION_BUFFER_MODE": function COMPOSITION_BUFFER_MODE() {
          return (
            /* binding */
            _COMPOSITION_BUFFER_MODE
          );
        },

        /* harmony export */
        "CheckboxControlValueAccessor": function CheckboxControlValueAccessor() {
          return (
            /* binding */
            _CheckboxControlValueAccessor
          );
        },

        /* harmony export */
        "CheckboxRequiredValidator": function CheckboxRequiredValidator() {
          return (
            /* binding */
            _CheckboxRequiredValidator
          );
        },

        /* harmony export */
        "ControlContainer": function ControlContainer() {
          return (
            /* binding */
            _ControlContainer
          );
        },

        /* harmony export */
        "DefaultValueAccessor": function DefaultValueAccessor() {
          return (
            /* binding */
            _DefaultValueAccessor
          );
        },

        /* harmony export */
        "EmailValidator": function EmailValidator() {
          return (
            /* binding */
            _EmailValidator
          );
        },

        /* harmony export */
        "FormArray": function FormArray() {
          return (
            /* binding */
            _FormArray
          );
        },

        /* harmony export */
        "FormArrayName": function FormArrayName() {
          return (
            /* binding */
            _FormArrayName
          );
        },

        /* harmony export */
        "FormBuilder": function FormBuilder() {
          return (
            /* binding */
            _FormBuilder
          );
        },

        /* harmony export */
        "FormControl": function FormControl() {
          return (
            /* binding */
            _FormControl
          );
        },

        /* harmony export */
        "FormControlDirective": function FormControlDirective() {
          return (
            /* binding */
            _FormControlDirective
          );
        },

        /* harmony export */
        "FormControlName": function FormControlName() {
          return (
            /* binding */
            _FormControlName
          );
        },

        /* harmony export */
        "FormGroup": function FormGroup() {
          return (
            /* binding */
            _FormGroup
          );
        },

        /* harmony export */
        "FormGroupDirective": function FormGroupDirective() {
          return (
            /* binding */
            _FormGroupDirective
          );
        },

        /* harmony export */
        "FormGroupName": function FormGroupName() {
          return (
            /* binding */
            _FormGroupName
          );
        },

        /* harmony export */
        "FormsModule": function FormsModule() {
          return (
            /* binding */
            _FormsModule
          );
        },

        /* harmony export */
        "MaxLengthValidator": function MaxLengthValidator() {
          return (
            /* binding */
            _MaxLengthValidator
          );
        },

        /* harmony export */
        "MaxValidator": function MaxValidator() {
          return (
            /* binding */
            _MaxValidator
          );
        },

        /* harmony export */
        "MinLengthValidator": function MinLengthValidator() {
          return (
            /* binding */
            _MinLengthValidator
          );
        },

        /* harmony export */
        "MinValidator": function MinValidator() {
          return (
            /* binding */
            _MinValidator
          );
        },

        /* harmony export */
        "NG_ASYNC_VALIDATORS": function NG_ASYNC_VALIDATORS() {
          return (
            /* binding */
            _NG_ASYNC_VALIDATORS
          );
        },

        /* harmony export */
        "NG_VALIDATORS": function NG_VALIDATORS() {
          return (
            /* binding */
            _NG_VALIDATORS
          );
        },

        /* harmony export */
        "NG_VALUE_ACCESSOR": function NG_VALUE_ACCESSOR() {
          return (
            /* binding */
            _NG_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "NgControl": function NgControl() {
          return (
            /* binding */
            _NgControl
          );
        },

        /* harmony export */
        "NgControlStatus": function NgControlStatus() {
          return (
            /* binding */
            _NgControlStatus
          );
        },

        /* harmony export */
        "NgControlStatusGroup": function NgControlStatusGroup() {
          return (
            /* binding */
            _NgControlStatusGroup
          );
        },

        /* harmony export */
        "NgForm": function NgForm() {
          return (
            /* binding */
            _NgForm
          );
        },

        /* harmony export */
        "NgModel": function NgModel() {
          return (
            /* binding */
            _NgModel
          );
        },

        /* harmony export */
        "NgModelGroup": function NgModelGroup() {
          return (
            /* binding */
            _NgModelGroup
          );
        },

        /* harmony export */
        "NgSelectOption": function NgSelectOption() {
          return (
            /* binding */
            _NgSelectOption
          );
        },

        /* harmony export */
        "NumberValueAccessor": function NumberValueAccessor() {
          return (
            /* binding */
            _NumberValueAccessor
          );
        },

        /* harmony export */
        "PatternValidator": function PatternValidator() {
          return (
            /* binding */
            _PatternValidator
          );
        },

        /* harmony export */
        "RadioControlValueAccessor": function RadioControlValueAccessor() {
          return (
            /* binding */
            _RadioControlValueAccessor
          );
        },

        /* harmony export */
        "RangeValueAccessor": function RangeValueAccessor() {
          return (
            /* binding */
            _RangeValueAccessor
          );
        },

        /* harmony export */
        "ReactiveFormsModule": function ReactiveFormsModule() {
          return (
            /* binding */
            _ReactiveFormsModule
          );
        },

        /* harmony export */
        "RequiredValidator": function RequiredValidator() {
          return (
            /* binding */
            _RequiredValidator
          );
        },

        /* harmony export */
        "SelectControlValueAccessor": function SelectControlValueAccessor() {
          return (
            /* binding */
            _SelectControlValueAccessor
          );
        },

        /* harmony export */
        "SelectMultipleControlValueAccessor": function SelectMultipleControlValueAccessor() {
          return (
            /* binding */
            _SelectMultipleControlValueAccessor
          );
        },

        /* harmony export */
        "VERSION": function VERSION() {
          return (
            /* binding */
            _VERSION
          );
        },

        /* harmony export */
        "Validators": function Validators() {
          return (
            /* binding */
            _Validators
          );
        },

        /* harmony export */
        "??InternalFormsSharedModule": function ??InternalFormsSharedModule() {
          return (
            /* binding */
            _??InternalFormsSharedModule
          );
        },

        /* harmony export */
        "??NgNoValidate": function ??NgNoValidate() {
          return (
            /* binding */
            _??NgNoValidate
          );
        },

        /* harmony export */
        "??NgSelectMultipleOption": function ??NgSelectMultipleOption() {
          return (
            /* binding */
            _??NgSelectMultipleOption
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_a": function ??angular_packages_forms_forms_a() {
          return (
            /* binding */
            SHARED_FORM_DIRECTIVES
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_b": function ??angular_packages_forms_forms_b() {
          return (
            /* binding */
            TEMPLATE_DRIVEN_DIRECTIVES
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_ba": function ??angular_packages_forms_forms_ba() {
          return (
            /* binding */
            _??NgSelectMultipleOption
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bb": function ??angular_packages_forms_forms_bb() {
          return (
            /* binding */
            _??NgNoValidate
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bc": function ??angular_packages_forms_forms_bc() {
          return (
            /* binding */
            MAX_VALIDATOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bd": function ??angular_packages_forms_forms_bd() {
          return (
            /* binding */
            MIN_VALIDATOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_be": function ??angular_packages_forms_forms_be() {
          return (
            /* binding */
            REQUIRED_VALIDATOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bf": function ??angular_packages_forms_forms_bf() {
          return (
            /* binding */
            CHECKBOX_REQUIRED_VALIDATOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bg": function ??angular_packages_forms_forms_bg() {
          return (
            /* binding */
            EMAIL_VALIDATOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bh": function ??angular_packages_forms_forms_bh() {
          return (
            /* binding */
            MIN_LENGTH_VALIDATOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bi": function ??angular_packages_forms_forms_bi() {
          return (
            /* binding */
            MAX_LENGTH_VALIDATOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bj": function ??angular_packages_forms_forms_bj() {
          return (
            /* binding */
            PATTERN_VALIDATOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bk": function ??angular_packages_forms_forms_bk() {
          return (
            /* binding */
            minValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bl": function ??angular_packages_forms_forms_bl() {
          return (
            /* binding */
            maxValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bm": function ??angular_packages_forms_forms_bm() {
          return (
            /* binding */
            requiredValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bn": function ??angular_packages_forms_forms_bn() {
          return (
            /* binding */
            requiredTrueValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bo": function ??angular_packages_forms_forms_bo() {
          return (
            /* binding */
            emailValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bp": function ??angular_packages_forms_forms_bp() {
          return (
            /* binding */
            minLengthValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bq": function ??angular_packages_forms_forms_bq() {
          return (
            /* binding */
            maxLengthValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_br": function ??angular_packages_forms_forms_br() {
          return (
            /* binding */
            patternValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_bs": function ??angular_packages_forms_forms_bs() {
          return (
            /* binding */
            _nullValidator
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_c": function ??angular_packages_forms_forms_c() {
          return (
            /* binding */
            REACTIVE_DRIVEN_DIRECTIVES
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_d": function ??angular_packages_forms_forms_d() {
          return (
            /* binding */
            _??InternalFormsSharedModule
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_e": function ??angular_packages_forms_forms_e() {
          return (
            /* binding */
            CHECKBOX_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_f": function ??angular_packages_forms_forms_f() {
          return (
            /* binding */
            BaseControlValueAccessor
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_g": function ??angular_packages_forms_forms_g() {
          return (
            /* binding */
            BuiltInControlValueAccessor
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_h": function ??angular_packages_forms_forms_h() {
          return (
            /* binding */
            DEFAULT_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_i": function ??angular_packages_forms_forms_i() {
          return (
            /* binding */
            AbstractControlStatus
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_j": function ??angular_packages_forms_forms_j() {
          return (
            /* binding */
            ngControlStatusHost
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_k": function ??angular_packages_forms_forms_k() {
          return (
            /* binding */
            formDirectiveProvider
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_l": function ??angular_packages_forms_forms_l() {
          return (
            /* binding */
            formControlBinding
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_m": function ??angular_packages_forms_forms_m() {
          return (
            /* binding */
            modelGroupProvider
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_n": function ??angular_packages_forms_forms_n() {
          return (
            /* binding */
            NUMBER_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_o": function ??angular_packages_forms_forms_o() {
          return (
            /* binding */
            RADIO_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_p": function ??angular_packages_forms_forms_p() {
          return (
            /* binding */
            RadioControlRegistryModule
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_q": function ??angular_packages_forms_forms_q() {
          return (
            /* binding */
            RadioControlRegistry
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_r": function ??angular_packages_forms_forms_r() {
          return (
            /* binding */
            RANGE_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_s": function ??angular_packages_forms_forms_s() {
          return (
            /* binding */
            NG_MODEL_WITH_FORM_CONTROL_WARNING
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_t": function ??angular_packages_forms_forms_t() {
          return (
            /* binding */
            formControlBinding$1
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_u": function ??angular_packages_forms_forms_u() {
          return (
            /* binding */
            controlNameBinding
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_v": function ??angular_packages_forms_forms_v() {
          return (
            /* binding */
            formDirectiveProvider$1
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_w": function ??angular_packages_forms_forms_w() {
          return (
            /* binding */
            formGroupNameProvider
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_x": function ??angular_packages_forms_forms_x() {
          return (
            /* binding */
            formArrayNameProvider
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_y": function ??angular_packages_forms_forms_y() {
          return (
            /* binding */
            SELECT_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "??angular_packages_forms_forms_z": function ??angular_packages_forms_forms_z() {
          return (
            /* binding */
            SELECT_MULTIPLE_VALUE_ACCESSOR
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      9412);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs */
      5758);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs/operators */
      8002);
      /**
       * @license Angular v12.0.4
       * (c) 2010-2021 Google LLC. https://angular.io/
       * License: MIT
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Base class for all ControlValueAccessor classes defined in Forms package.
       * Contains common logic and utility functions.
       *
       * Note: this is an *internal-only* class and should not be extended or used directly in
       * applications code.
       */


      var BaseControlValueAccessor = /*#__PURE__*/function () {
        function BaseControlValueAccessor(_renderer, _elementRef) {
          _classCallCheck(this, BaseControlValueAccessor);

          this._renderer = _renderer;
          this._elementRef = _elementRef;
          /**
           * The registered callback function called when a change or input event occurs on the input
           * element.
           * @nodoc
           */

          this.onChange = function (_) {};
          /**
           * The registered callback function called when a blur event occurs on the input element.
           * @nodoc
           */


          this.onTouched = function () {};
        }
        /**
         * Helper method that sets a property on a target element using the current Renderer
         * implementation.
         * @nodoc
         */


        _createClass(BaseControlValueAccessor, [{
          key: "setProperty",
          value: function setProperty(key, value) {
            this._renderer.setProperty(this._elementRef.nativeElement, key, value);
          }
          /**
           * Registers a function called when the control is touched.
           * @nodoc
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = fn;
          }
          /**
           * Sets the "disabled" property on the range input element.
           * @nodoc
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.setProperty('disabled', isDisabled);
          }
        }]);

        return BaseControlValueAccessor;
      }();

      BaseControlValueAccessor.??fac = function BaseControlValueAccessor_Factory(t) {
        return new (t || BaseControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef));
      };

      BaseControlValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: BaseControlValueAccessor
      });

      BaseControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BaseControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }];
        }, null);
      })();
      /**
       * Base class for all built-in ControlValueAccessor classes (except DefaultValueAccessor, which is
       * used in case no other CVAs can be found). We use this class to distinguish between default CVA,
       * built-in CVAs and custom CVAs, so that Forms logic can recognize built-in CVAs and treat custom
       * ones with higher priority (when both built-in and custom CVAs are present).
       *
       * Note: this is an *internal-only* class and should not be extended or used directly in
       * applications code.
       */


      var BuiltInControlValueAccessor = /*#__PURE__*/function (_BaseControlValueAcce) {
        _inherits(BuiltInControlValueAccessor, _BaseControlValueAcce);

        var _super = _createSuper(BuiltInControlValueAccessor);

        function BuiltInControlValueAccessor() {
          _classCallCheck(this, BuiltInControlValueAccessor);

          return _super.apply(this, arguments);
        }

        return BuiltInControlValueAccessor;
      }(BaseControlValueAccessor);

      BuiltInControlValueAccessor.??fac = /*@__PURE__*/function () {
        var ??BuiltInControlValueAccessor_BaseFactory;
        return function BuiltInControlValueAccessor_Factory(t) {
          return (??BuiltInControlValueAccessor_BaseFactory || (??BuiltInControlValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](BuiltInControlValueAccessor)))(t || BuiltInControlValueAccessor);
        };
      }();

      BuiltInControlValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: BuiltInControlValueAccessor,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BuiltInControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], null, null);
      })();
      /**
       * Used to provide a `ControlValueAccessor` for form controls.
       *
       * See `DefaultValueAccessor` for how to implement one.
       *
       * @publicApi
       */


      var _NG_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NgValueAccessor');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var CHECKBOX_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _CheckboxControlValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * A `ControlValueAccessor` for writing a value and listening to changes on a checkbox input
       * element.
       *
       * @usageNotes
       *
       * ### Using a checkbox with a reactive form.
       *
       * The following example shows how to use a checkbox with a reactive form.
       *
       * ```ts
       * const rememberLoginControl = new FormControl();
       * ```
       *
       * ```
       * <input type="checkbox" [formControl]="rememberLoginControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _CheckboxControlValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA) {
        _inherits(_CheckboxControlValueAccessor, _BuiltInControlValueA);

        var _super2 = _createSuper(_CheckboxControlValueAccessor);

        function _CheckboxControlValueAccessor() {
          _classCallCheck(this, _CheckboxControlValueAccessor);

          return _super2.apply(this, arguments);
        }

        _createClass(_CheckboxControlValueAccessor, [{
          key: "writeValue",
          value:
          /**
           * Sets the "checked" property on the input element.
           * @nodoc
           */
          function writeValue(value) {
            this.setProperty('checked', value);
          }
        }]);

        return _CheckboxControlValueAccessor;
      }(BuiltInControlValueAccessor);

      _CheckboxControlValueAccessor.??fac = /*@__PURE__*/function () {
        var ??CheckboxControlValueAccessor_BaseFactory;
        return function CheckboxControlValueAccessor_Factory(t) {
          return (??CheckboxControlValueAccessor_BaseFactory || (??CheckboxControlValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_CheckboxControlValueAccessor)))(t || _CheckboxControlValueAccessor);
        };
      }();

      _CheckboxControlValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _CheckboxControlValueAccessor,
        selectors: [["input", "type", "checkbox", "formControlName", ""], ["input", "type", "checkbox", "formControl", ""], ["input", "type", "checkbox", "ngModel", ""]],
        hostBindings: function CheckboxControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function CheckboxControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.checked);
            })("blur", function CheckboxControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([CHECKBOX_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_CheckboxControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=checkbox][formControlName],input[type=checkbox][formControl],input[type=checkbox][ngModel]',
            host: {
              '(change)': 'onChange($event.target.checked)',
              '(blur)': 'onTouched()'
            },
            providers: [CHECKBOX_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var DEFAULT_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _DefaultValueAccessor;
        }),
        multi: true
      };
      /**
       * We must check whether the agent is Android because composition events
       * behave differently between iOS and Android.
       */

      function _isAndroid() {
        var userAgent = (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["??getDOM"])() ? (0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["??getDOM"])().getUserAgent() : '';
        return /android (\d+)/.test(userAgent.toLowerCase());
      }
      /**
       * @description
       * Provide this token to control if form directives buffer IME input until
       * the "compositionend" event occurs.
       * @publicApi
       */


      var _COMPOSITION_BUFFER_MODE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('CompositionEventMode');
      /**
       * The default `ControlValueAccessor` for writing a value and listening to changes on input
       * elements. The accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * {@searchKeywords ngDefaultControl}
       *
       * @usageNotes
       *
       * ### Using the default value accessor
       *
       * The following example shows how to use an input element that activates the default value accessor
       * (in this case, a text field).
       *
       * ```ts
       * const firstNameControl = new FormControl();
       * ```
       *
       * ```
       * <input type="text" [formControl]="firstNameControl">
       * ```
       *
       * This value accessor is used by default for `<input type="text">` and `<textarea>` elements, but
       * you could also use it for custom components that have similar behavior and do not require special
       * processing. In order to attach the default value accessor to a custom element, add the
       * `ngDefaultControl` attribute as shown below.
       *
       * ```
       * <custom-input-component ngDefaultControl [(ngModel)]="value"></custom-input-component>
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _DefaultValueAccessor = /*#__PURE__*/function (_BaseControlValueAcce2) {
        _inherits(_DefaultValueAccessor, _BaseControlValueAcce2);

        var _super3 = _createSuper(_DefaultValueAccessor);

        function _DefaultValueAccessor(renderer, elementRef, _compositionMode) {
          var _this;

          _classCallCheck(this, _DefaultValueAccessor);

          _this = _super3.call(this, renderer, elementRef);
          _this._compositionMode = _compositionMode;
          /** Whether the user is creating a composition string (IME events). */

          _this._composing = false;

          if (_this._compositionMode == null) {
            _this._compositionMode = !_isAndroid();
          }

          return _this;
        }
        /**
         * Sets the "value" property on the input element.
         * @nodoc
         */


        _createClass(_DefaultValueAccessor, [{
          key: "writeValue",
          value: function writeValue(value) {
            var normalizedValue = value == null ? '' : value;
            this.setProperty('value', normalizedValue);
          }
          /** @internal */

        }, {
          key: "_handleInput",
          value: function _handleInput(value) {
            if (!this._compositionMode || this._compositionMode && !this._composing) {
              this.onChange(value);
            }
          }
          /** @internal */

        }, {
          key: "_compositionStart",
          value: function _compositionStart() {
            this._composing = true;
          }
          /** @internal */

        }, {
          key: "_compositionEnd",
          value: function _compositionEnd(value) {
            this._composing = false;
            this._compositionMode && this.onChange(value);
          }
        }]);

        return _DefaultValueAccessor;
      }(BaseControlValueAccessor);

      _DefaultValueAccessor.??fac = function DefaultValueAccessor_Factory(t) {
        return new (t || _DefaultValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_COMPOSITION_BUFFER_MODE, 8));
      };

      _DefaultValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _DefaultValueAccessor,
        selectors: [["input", "formControlName", "", 3, "type", "checkbox"], ["textarea", "formControlName", ""], ["input", "formControl", "", 3, "type", "checkbox"], ["textarea", "formControl", ""], ["input", "ngModel", "", 3, "type", "checkbox"], ["textarea", "ngModel", ""], ["", "ngDefaultControl", ""]],
        hostBindings: function DefaultValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function DefaultValueAccessor_input_HostBindingHandler($event) {
              return ctx._handleInput($event.target.value);
            })("blur", function DefaultValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            })("compositionstart", function DefaultValueAccessor_compositionstart_HostBindingHandler() {
              return ctx._compositionStart();
            })("compositionend", function DefaultValueAccessor_compositionend_HostBindingHandler($event) {
              return ctx._compositionEnd($event.target.value);
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([DEFAULT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      _DefaultValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: Boolean,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_COMPOSITION_BUFFER_MODE]
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_DefaultValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]',
            // TODO: vsavkin replace the above selector with the one below it once
            // https://github.com/angular/angular/issues/3011 is implemented
            // selector: '[ngModel],[formControl],[formControlName]',
            host: {
              '(input)': '$any(this)._handleInput($event.target.value)',
              '(blur)': 'onTouched()',
              '(compositionstart)': '$any(this)._compositionStart()',
              '(compositionend)': '$any(this)._compositionEnd($event.target.value)'
            },
            providers: [DEFAULT_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: Boolean,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_COMPOSITION_BUFFER_MODE]
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function isEmptyInputValue(value) {
        // we don't check for string here so it also works with arrays
        return value == null || value.length === 0;
      }

      function hasValidLength(value) {
        // non-strict comparison is intentional, to check for both `null` and `undefined` values
        return value != null && typeof value.length === 'number';
      }
      /**
       * @description
       * An `InjectionToken` for registering additional synchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_ASYNC_VALIDATORS`
       *
       * @usageNotes
       *
       * ### Providing a custom validator
       *
       * The following example registers a custom validator directive. Adding the validator to the
       * existing collection of validators requires the `multi: true` option.
       *
       * ```typescript
       * @Directive({
       *   selector: '[customValidator]',
       *   providers: [{provide: NG_VALIDATORS, useExisting: CustomValidatorDirective, multi: true}]
       * })
       * class CustomValidatorDirective implements Validator {
       *   validate(control: AbstractControl): ValidationErrors | null {
       *     return { 'custom': true };
       *   }
       * }
       * ```
       *
       * @publicApi
       */


      var _NG_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NgValidators');
      /**
       * @description
       * An `InjectionToken` for registering additional asynchronous validators used with
       * `AbstractControl`s.
       *
       * @see `NG_VALIDATORS`
       *
       * @publicApi
       */


      var _NG_ASYNC_VALIDATORS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NgAsyncValidators');
      /**
       * A regular expression that matches valid e-mail addresses.
       *
       * At a high level, this regexp matches e-mail addresses of the format `local-part@tld`, where:
       * - `local-part` consists of one or more of the allowed characters (alphanumeric and some
       *   punctuation symbols).
       * - `local-part` cannot begin or end with a period (`.`).
       * - `local-part` cannot be longer than 64 characters.
       * - `tld` consists of one or more `labels` separated by periods (`.`). For example `localhost` or
       *   `foo.com`.
       * - A `label` consists of one or more of the allowed characters (alphanumeric, dashes (`-`) and
       *   periods (`.`)).
       * - A `label` cannot begin or end with a dash (`-`) or a period (`.`).
       * - A `label` cannot be longer than 63 characters.
       * - The whole address cannot be longer than 254 characters.
       *
       * ## Implementation background
       *
       * This regexp was ported over from AngularJS (see there for git history):
       * https://github.com/angular/angular.js/blob/c133ef836/src/ng/directive/input.js#L27
       * It is based on the
       * [WHATWG version](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
       * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
       * lengths of different parts of the address). The main differences from the WHATWG version are:
       *   - Disallow `local-part` to begin or end with a period (`.`).
       *   - Disallow `local-part` length to exceed 64 characters.
       *   - Disallow total address length to exceed 254 characters.
       *
       * See [this commit](https://github.com/angular/angular.js/commit/f3f5cf72e) for more details.
       */


      var EMAIL_REGEXP = /^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
      /**
       * @description
       * Provides a set of built-in validators that can be used by form controls.
       *
       * A validator is a function that processes a `FormControl` or collection of
       * controls and returns an error map or null. A null map means that validation has passed.
       *
       * @see [Form Validation](/guide/form-validation)
       *
       * @publicApi
       */

      var _Validators = /*#__PURE__*/function () {
        function _Validators() {
          _classCallCheck(this, _Validators);
        }

        _createClass(_Validators, null, [{
          key: "min",
          value:
          /**
           * @description
           * Validator that requires the control's value to be greater than or equal to the provided number.
           *
           * @usageNotes
           *
           * ### Validate against a minimum of 3
           *
           * ```typescript
           * const control = new FormControl(2, Validators.min(3));
           *
           * console.log(control.errors); // {min: {min: 3, actual: 2}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `min` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */
          function min(_min) {
            return minValidator(_min);
          }
          /**
           * @description
           * Validator that requires the control's value to be less than or equal to the provided number.
           *
           * @usageNotes
           *
           * ### Validate against a maximum of 15
           *
           * ```typescript
           * const control = new FormControl(16, Validators.max(15));
           *
           * console.log(control.errors); // {max: {max: 15, actual: 16}}
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `max` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "max",
          value: function max(_max) {
            return maxValidator(_max);
          }
          /**
           * @description
           * Validator that requires the control have a non-empty value.
           *
           * @usageNotes
           *
           * ### Validate that the field is non-empty
           *
           * ```typescript
           * const control = new FormControl('', Validators.required);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map with the `required` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "required",
          value: function required(control) {
            return requiredValidator(control);
          }
          /**
           * @description
           * Validator that requires the control's value be true. This validator is commonly
           * used for required checkboxes.
           *
           * @usageNotes
           *
           * ### Validate that the field value is true
           *
           * ```typescript
           * const control = new FormControl('', Validators.requiredTrue);
           *
           * console.log(control.errors); // {required: true}
           * ```
           *
           * @returns An error map that contains the `required` property
           * set to `true` if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "requiredTrue",
          value: function requiredTrue(control) {
            return requiredTrueValidator(control);
          }
          /**
           * @description
           * Validator that requires the control's value pass an email validation test.
           *
           * Tests the value using a [regular
           * expression](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions)
           * pattern suitable for common usecases. The pattern is based on the definition of a valid email
           * address in the [WHATWG HTML
           * specification](https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address) with
           * some enhancements to incorporate more RFC rules (such as rules related to domain names and the
           * lengths of different parts of the address).
           *
           * The differences from the WHATWG version include:
           * - Disallow `local-part` (the part before the `@` symbol) to begin or end with a period (`.`).
           * - Disallow `local-part` to be longer than 64 characters.
           * - Disallow the whole address to be longer than 254 characters.
           *
           * If this pattern does not satisfy your business needs, you can use `Validators.pattern()` to
           * validate the value against a different pattern.
           *
           * @usageNotes
           *
           * ### Validate that the field matches a valid email pattern
           *
           * ```typescript
           * const control = new FormControl('bad@', Validators.email);
           *
           * console.log(control.errors); // {email: true}
           * ```
           *
           * @returns An error map with the `email` property
           * if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "email",
          value: function email(control) {
            return emailValidator(control);
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be greater than or equal
           * to the provided minimum length. This validator is also provided by default if you use the
           * the HTML5 `minlength` attribute. Note that the `minLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays. The
           * `minLength` validator logic is also not invoked for values when their `length` property is 0
           * (for example in case of an empty string or an empty array), to support optional controls. You
           * can use the standard `required` validator if empty values should not be considered valid.
           *
           * @usageNotes
           *
           * ### Validate that the field has a minimum of 3 characters
           *
           * ```typescript
           * const control = new FormControl('ng', Validators.minLength(3));
           *
           * console.log(control.errors); // {minlength: {requiredLength: 3, actualLength: 2}}
           * ```
           *
           * ```html
           * <input minlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `minlength` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "minLength",
          value: function minLength(_minLength) {
            return minLengthValidator(_minLength);
          }
          /**
           * @description
           * Validator that requires the length of the control's value to be less than or equal
           * to the provided maximum length. This validator is also provided by default if you use the
           * the HTML5 `maxlength` attribute. Note that the `maxLength` validator is intended to be used
           * only for types that have a numeric `length` property, such as strings or arrays.
           *
           * @usageNotes
           *
           * ### Validate that the field has maximum of 5 characters
           *
           * ```typescript
           * const control = new FormControl('Angular', Validators.maxLength(5));
           *
           * console.log(control.errors); // {maxlength: {requiredLength: 5, actualLength: 7}}
           * ```
           *
           * ```html
           * <input maxlength="5">
           * ```
           *
           * @returns A validator function that returns an error map with the
           * `maxlength` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "maxLength",
          value: function maxLength(_maxLength) {
            return maxLengthValidator(_maxLength);
          }
          /**
           * @description
           * Validator that requires the control's value to match a regex pattern. This validator is also
           * provided by default if you use the HTML5 `pattern` attribute.
           *
           * @usageNotes
           *
           * ### Validate that the field only contains letters or spaces
           *
           * ```typescript
           * const control = new FormControl('1', Validators.pattern('[a-zA-Z ]*'));
           *
           * console.log(control.errors); // {pattern: {requiredPattern: '^[a-zA-Z ]*$', actualValue: '1'}}
           * ```
           *
           * ```html
           * <input pattern="[a-zA-Z ]*">
           * ```
           *
           * ### Pattern matching with the global or sticky flag
           *
           * `RegExp` objects created with the `g` or `y` flags that are passed into `Validators.pattern`
           * can produce different results on the same input when validations are run consecutively. This is
           * due to how the behavior of `RegExp.prototype.test` is
           * specified in [ECMA-262](https://tc39.es/ecma262/#sec-regexpbuiltinexec)
           * (`RegExp` preserves the index of the last match when the global or sticky flag is used).
           * Due to this behavior, it is recommended that when using
           * `Validators.pattern` you **do not** pass in a `RegExp` object with either the global or sticky
           * flag enabled.
           *
           * ```typescript
           * // Not recommended (since the `g` flag is used)
           * const controlOne = new FormControl('1', Validators.pattern(/foo/g));
           *
           * // Good
           * const controlTwo = new FormControl('1', Validators.pattern(/foo/));
           * ```
           *
           * @param pattern A regular expression to be used as is to test the values, or a string.
           * If a string is passed, the `^` character is prepended and the `$` character is
           * appended to the provided string (if not already present), and the resulting regular
           * expression is used to test the values.
           *
           * @returns A validator function that returns an error map with the
           * `pattern` property if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "pattern",
          value: function pattern(_pattern) {
            return patternValidator(_pattern);
          }
          /**
           * @description
           * Validator that performs no operation.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "nullValidator",
          value: function nullValidator(control) {
            return _nullValidator(control);
          }
        }, {
          key: "compose",
          value: function compose(validators) {
            return _compose(validators);
          }
          /**
           * @description
           * Compose multiple async validators into a single function that returns the union
           * of the individual error objects for the provided control.
           *
           * @returns A validator function that returns an error map with the
           * merged error objects of the async validators if the validation check fails, otherwise `null`.
           *
           * @see `updateValueAndValidity()`
           *
           */

        }, {
          key: "composeAsync",
          value: function composeAsync(validators) {
            return _composeAsync(validators);
          }
        }]);

        return _Validators;
      }();
      /**
       * Validator that requires the control's value to be greater than or equal to the provided number.
       * See `Validators.min` for additional information.
       */


      function minValidator(min) {
        return function (control) {
          if (isEmptyInputValue(control.value) || isEmptyInputValue(min)) {
            return null; // don't validate empty values to allow optional controls
          }

          var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
          // minimum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-min

          return !isNaN(value) && value < min ? {
            'min': {
              'min': min,
              'actual': control.value
            }
          } : null;
        };
      }
      /**
       * Validator that requires the control's value to be less than or equal to the provided number.
       * See `Validators.max` for additional information.
       */


      function maxValidator(max) {
        return function (control) {
          if (isEmptyInputValue(control.value) || isEmptyInputValue(max)) {
            return null; // don't validate empty values to allow optional controls
          }

          var value = parseFloat(control.value); // Controls with NaN values after parsing should be treated as not having a
          // maximum, per the HTML forms spec: https://www.w3.org/TR/html5/forms.html#attr-input-max

          return !isNaN(value) && value > max ? {
            'max': {
              'max': max,
              'actual': control.value
            }
          } : null;
        };
      }
      /**
       * Validator that requires the control have a non-empty value.
       * See `Validators.required` for additional information.
       */


      function requiredValidator(control) {
        return isEmptyInputValue(control.value) ? {
          'required': true
        } : null;
      }
      /**
       * Validator that requires the control's value be true. This validator is commonly
       * used for required checkboxes.
       * See `Validators.requiredTrue` for additional information.
       */


      function requiredTrueValidator(control) {
        return control.value === true ? null : {
          'required': true
        };
      }
      /**
       * Validator that requires the control's value pass an email validation test.
       * See `Validators.email` for additional information.
       */


      function emailValidator(control) {
        if (isEmptyInputValue(control.value)) {
          return null; // don't validate empty values to allow optional controls
        }

        return EMAIL_REGEXP.test(control.value) ? null : {
          'email': true
        };
      }
      /**
       * Validator that requires the length of the control's value to be greater than or equal
       * to the provided minimum length. See `Validators.minLength` for additional information.
       */


      function minLengthValidator(minLength) {
        return function (control) {
          if (isEmptyInputValue(control.value) || !hasValidLength(control.value)) {
            // don't validate empty values to allow optional controls
            // don't validate values without `length` property
            return null;
          }

          return control.value.length < minLength ? {
            'minlength': {
              'requiredLength': minLength,
              'actualLength': control.value.length
            }
          } : null;
        };
      }
      /**
       * Validator that requires the length of the control's value to be less than or equal
       * to the provided maximum length. See `Validators.maxLength` for additional information.
       */


      function maxLengthValidator(maxLength) {
        return function (control) {
          return hasValidLength(control.value) && control.value.length > maxLength ? {
            'maxlength': {
              'requiredLength': maxLength,
              'actualLength': control.value.length
            }
          } : null;
        };
      }
      /**
       * Validator that requires the control's value to match a regex pattern.
       * See `Validators.pattern` for additional information.
       */


      function patternValidator(pattern) {
        if (!pattern) return _nullValidator;
        var regex;
        var regexStr;

        if (typeof pattern === 'string') {
          regexStr = '';
          if (pattern.charAt(0) !== '^') regexStr += '^';
          regexStr += pattern;
          if (pattern.charAt(pattern.length - 1) !== '$') regexStr += '$';
          regex = new RegExp(regexStr);
        } else {
          regexStr = pattern.toString();
          regex = pattern;
        }

        return function (control) {
          if (isEmptyInputValue(control.value)) {
            return null; // don't validate empty values to allow optional controls
          }

          var value = control.value;
          return regex.test(value) ? null : {
            'pattern': {
              'requiredPattern': regexStr,
              'actualValue': value
            }
          };
        };
      }
      /**
       * Function that has `ValidatorFn` shape, but performs no operation.
       */


      function _nullValidator(control) {
        return null;
      }

      function isPresent(o) {
        return o != null;
      }

      function toObservable(r) {
        var obs = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??isPromise"])(r) ? (0, rxjs__WEBPACK_IMPORTED_MODULE_2__.from)(r) : r;

        if (!(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["??isObservable"])(obs) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
          throw new Error("Expected validator to return Promise or Observable.");
        }

        return obs;
      }

      function mergeErrors(arrayOfErrors) {
        var res = {}; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        arrayOfErrors.forEach(function (errors) {
          res = errors != null ? Object.assign(Object.assign({}, res), errors) : res;
        });
        return Object.keys(res).length === 0 ? null : res;
      }

      function executeValidators(control, validators) {
        return validators.map(function (validator) {
          return validator(control);
        });
      }

      function isValidatorFn(validator) {
        return !validator.validate;
      }
      /**
       * Given the list of validators that may contain both functions as well as classes, return the list
       * of validator functions (convert validator classes into validator functions). This is needed to
       * have consistent structure in validators list before composing them.
       *
       * @param validators The set of validators that may contain validators both in plain function form
       *     as well as represented as a validator class.
       */


      function normalizeValidators(validators) {
        return validators.map(function (validator) {
          return isValidatorFn(validator) ? validator : function (c) {
            return validator.validate(c);
          };
        });
      }
      /**
       * Merges synchronous validators into a single validator function.
       * See `Validators.compose` for additional information.
       */


      function _compose(validators) {
        if (!validators) return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0) return null;
        return function (control) {
          return mergeErrors(executeValidators(control, presentValidators));
        };
      }
      /**
       * Accepts a list of validators of different possible shapes (`Validator` and `ValidatorFn`),
       * normalizes the list (converts everything to `ValidatorFn`) and merges them into a single
       * validator function.
       */


      function composeValidators(validators) {
        return validators != null ? _compose(normalizeValidators(validators)) : null;
      }
      /**
       * Merges asynchronous validators into a single validator function.
       * See `Validators.composeAsync` for additional information.
       */


      function _composeAsync(validators) {
        if (!validators) return null;
        var presentValidators = validators.filter(isPresent);
        if (presentValidators.length == 0) return null;
        return function (control) {
          var observables = executeValidators(control, presentValidators).map(toObservable);
          return (0, rxjs__WEBPACK_IMPORTED_MODULE_3__.forkJoin)(observables).pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.map)(mergeErrors));
        };
      }
      /**
       * Accepts a list of async validators of different possible shapes (`AsyncValidator` and
       * `AsyncValidatorFn`), normalizes the list (converts everything to `AsyncValidatorFn`) and merges
       * them into a single validator function.
       */


      function composeAsyncValidators(validators) {
        return validators != null ? _composeAsync(normalizeValidators(validators)) : null;
      }
      /**
       * Merges raw control validators with a given directive validator and returns the combined list of
       * validators as an array.
       */


      function mergeValidators(controlValidators, dirValidator) {
        if (controlValidators === null) return [dirValidator];
        return Array.isArray(controlValidators) ? [].concat(_toConsumableArray(controlValidators), [dirValidator]) : [controlValidators, dirValidator];
      }
      /**
       * Retrieves the list of raw synchronous validators attached to a given control.
       */


      function getControlValidators(control) {
        return control._rawValidators;
      }
      /**
       * Retrieves the list of raw asynchronous validators attached to a given control.
       */


      function getControlAsyncValidators(control) {
        return control._rawAsyncValidators;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * Base class for control directives.
       *
       * This class is only used internally in the `ReactiveFormsModule` and the `FormsModule`.
       *
       * @publicApi
       */


      var _AbstractControlDirective = /*#__PURE__*/function () {
        function _AbstractControlDirective() {
          _classCallCheck(this, _AbstractControlDirective);

          /**
           * Set of synchronous validators as they were provided while calling `setValidators` function.
           * @internal
           */
          this._rawValidators = [];
          /**
           * Set of asynchronous validators as they were provided while calling `setAsyncValidators`
           * function.
           * @internal
           */

          this._rawAsyncValidators = [];
          /*
           * The set of callbacks to be invoked when directive instance is being destroyed.
           */

          this._onDestroyCallbacks = [];
        }
        /**
         * @description
         * Reports the value of the control if it is present, otherwise null.
         */


        _createClass(_AbstractControlDirective, [{
          key: "value",
          get: function get() {
            return this.control ? this.control.value : null;
          }
          /**
           * @description
           * Reports whether the control is valid. A control is considered valid if no
           * validation errors exist with the current value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.control ? this.control.valid : null;
          }
          /**
           * @description
           * Reports whether the control is invalid, meaning that an error exists in the input value.
           * If the control is not present, null is returned.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.control ? this.control.invalid : null;
          }
          /**
           * @description
           * Reports whether a control is pending, meaning that that async validation is occurring and
           * errors are not yet available for the input value. If the control is not present, null is
           * returned.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.control ? this.control.pending : null;
          }
          /**
           * @description
           * Reports whether the control is disabled, meaning that the control is disabled
           * in the UI and is exempt from validation checks and excluded from aggregate
           * values of ancestor controls. If the control is not present, null is returned.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.control ? this.control.disabled : null;
          }
          /**
           * @description
           * Reports whether the control is enabled, meaning that the control is included in ancestor
           * calculations of validity or value. If the control is not present, null is returned.
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.control ? this.control.enabled : null;
          }
          /**
           * @description
           * Reports the control's validation errors. If the control is not present, null is returned.
           */

        }, {
          key: "errors",
          get: function get() {
            return this.control ? this.control.errors : null;
          }
          /**
           * @description
           * Reports whether the control is pristine, meaning that the user has not yet changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "pristine",
          get: function get() {
            return this.control ? this.control.pristine : null;
          }
          /**
           * @description
           * Reports whether the control is dirty, meaning that the user has changed
           * the value in the UI. If the control is not present, null is returned.
           */

        }, {
          key: "dirty",
          get: function get() {
            return this.control ? this.control.dirty : null;
          }
          /**
           * @description
           * Reports whether the control is touched, meaning that the user has triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "touched",
          get: function get() {
            return this.control ? this.control.touched : null;
          }
          /**
           * @description
           * Reports the validation status of the control. Possible values include:
           * 'VALID', 'INVALID', 'DISABLED', and 'PENDING'.
           * If the control is not present, null is returned.
           */

        }, {
          key: "status",
          get: function get() {
            return this.control ? this.control.status : null;
          }
          /**
           * @description
           * Reports whether the control is untouched, meaning that the user has not yet triggered
           * a `blur` event on it. If the control is not present, null is returned.
           */

        }, {
          key: "untouched",
          get: function get() {
            return this.control ? this.control.untouched : null;
          }
          /**
           * @description
           * Returns a multicasting observable that emits a validation status whenever it is
           * calculated for the control. If the control is not present, null is returned.
           */

        }, {
          key: "statusChanges",
          get: function get() {
            return this.control ? this.control.statusChanges : null;
          }
          /**
           * @description
           * Returns a multicasting observable of value changes for the control that emits every time the
           * value of the control changes in the UI or programmatically.
           * If the control is not present, null is returned.
           */

        }, {
          key: "valueChanges",
          get: function get() {
            return this.control ? this.control.valueChanges : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
          /**
           * Sets synchronous validators for this directive.
           * @internal
           */

        }, {
          key: "_setValidators",
          value: function _setValidators(validators) {
            this._rawValidators = validators || [];
            this._composedValidatorFn = composeValidators(this._rawValidators);
          }
          /**
           * Sets asynchronous validators for this directive.
           * @internal
           */

        }, {
          key: "_setAsyncValidators",
          value: function _setAsyncValidators(validators) {
            this._rawAsyncValidators = validators || [];
            this._composedAsyncValidatorFn = composeAsyncValidators(this._rawAsyncValidators);
          }
          /**
           * @description
           * Synchronous validator function composed of all the synchronous validators registered with this
           * directive.
           */

        }, {
          key: "validator",
          get: function get() {
            return this._composedValidatorFn || null;
          }
          /**
           * @description
           * Asynchronous validator function composed of all the asynchronous validators registered with
           * this directive.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn || null;
          }
          /**
           * Internal function to register callbacks that should be invoked
           * when directive instance is being destroyed.
           * @internal
           */

        }, {
          key: "_registerOnDestroy",
          value: function _registerOnDestroy(fn) {
            this._onDestroyCallbacks.push(fn);
          }
          /**
           * Internal function to invoke all registered "on destroy" callbacks.
           * Note: calling this function also clears the list of callbacks.
           * @internal
           */

        }, {
          key: "_invokeOnDestroyCallbacks",
          value: function _invokeOnDestroyCallbacks() {
            this._onDestroyCallbacks.forEach(function (fn) {
              return fn();
            });

            this._onDestroyCallbacks = [];
          }
          /**
           * @description
           * Resets the control with the provided value if the control is present.
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            if (this.control) this.control.reset(value);
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return this.control ? this.control.hasError(errorCode, path) : false;
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            return this.control ? this.control.getError(errorCode, path) : null;
          }
        }]);

        return _AbstractControlDirective;
      }();

      _AbstractControlDirective.??fac = function AbstractControlDirective_Factory(t) {
        return new (t || _AbstractControlDirective)();
      };

      _AbstractControlDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _AbstractControlDirective
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for directives that contain multiple registered instances of `NgControl`.
       * Only used by the forms module.
       *
       * @publicApi
       */

      var _ControlContainer = /*#__PURE__*/function (_AbstractControlDirec) {
        _inherits(_ControlContainer, _AbstractControlDirec);

        var _super4 = _createSuper(_ControlContainer);

        function _ControlContainer() {
          _classCallCheck(this, _ControlContainer);

          return _super4.apply(this, arguments);
        }

        _createClass(_ControlContainer, [{
          key: "formDirective",
          get:
          /**
           * @description
           * The top-level form directive for the control.
           */
          function get() {
            return null;
          }
          /**
           * @description
           * The path to this group.
           */

        }, {
          key: "path",
          get: function get() {
            return null;
          }
        }]);

        return _ControlContainer;
      }(_AbstractControlDirective);

      _ControlContainer.??fac = /*@__PURE__*/function () {
        var ??ControlContainer_BaseFactory;
        return function ControlContainer_Factory(t) {
          return (??ControlContainer_BaseFactory || (??ControlContainer_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_ControlContainer)))(t || _ControlContainer);
        };
      }();

      _ControlContainer.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _ControlContainer,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class that all `FormControl`-based directives extend. It binds a `FormControl`
       * object to a DOM element.
       *
       * @publicApi
       */

      var _NgControl = /*#__PURE__*/function (_AbstractControlDirec2) {
        _inherits(_NgControl, _AbstractControlDirec2);

        var _super5 = _createSuper(_NgControl);

        function _NgControl() {
          var _this2;

          _classCallCheck(this, _NgControl);

          _this2 = _super5.apply(this, arguments);
          /**
           * @description
           * The parent form for the control.
           *
           * @internal
           */

          _this2._parent = null;
          /**
           * @description
           * The name for the control
           */

          _this2.name = null;
          /**
           * @description
           * The value accessor for the control
           */

          _this2.valueAccessor = null;
          return _this2;
        }

        return _NgControl;
      }(_AbstractControlDirective);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var AbstractControlStatus = /*#__PURE__*/function () {
        function AbstractControlStatus(cd) {
          _classCallCheck(this, AbstractControlStatus);

          this._cd = cd;
        }

        _createClass(AbstractControlStatus, [{
          key: "is",
          value: function is(status) {
            var _a, _b;

            return !!((_b = (_a = this._cd) === null || _a === void 0 ? void 0 : _a.control) === null || _b === void 0 ? void 0 : _b[status]);
          }
        }]);

        return AbstractControlStatus;
      }();

      var ngControlStatusHost = {
        '[class.ng-untouched]': 'is("untouched")',
        '[class.ng-touched]': 'is("touched")',
        '[class.ng-pristine]': 'is("pristine")',
        '[class.ng-dirty]': 'is("dirty")',
        '[class.ng-valid]': 'is("valid")',
        '[class.ng-invalid]': 'is("invalid")',
        '[class.ng-pending]': 'is("pending")'
      };
      /**
       * @description
       * Directive automatically applied to Angular form controls that sets CSS classes
       * based on control status.
       *
       * @usageNotes
       *
       * ### CSS classes applied
       *
       * The following classes are applied as the properties become true:
       *
       * * ng-valid
       * * ng-invalid
       * * ng-pending
       * * ng-pristine
       * * ng-dirty
       * * ng-untouched
       * * ng-touched
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _NgControlStatus = /*#__PURE__*/function (_AbstractControlStatu) {
        _inherits(_NgControlStatus, _AbstractControlStatu);

        var _super6 = _createSuper(_NgControlStatus);

        function _NgControlStatus(cd) {
          _classCallCheck(this, _NgControlStatus);

          return _super6.call(this, cd);
        }

        return _NgControlStatus;
      }(AbstractControlStatus);

      _NgControlStatus.??fac = function NgControlStatus_Factory(t) {
        return new (t || _NgControlStatus)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NgControl, 2));
      };

      _NgControlStatus.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _NgControlStatus,
        selectors: [["", "formControlName", ""], ["", "ngModel", ""], ["", "formControl", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatus_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("ng-untouched", ctx.is("untouched"))("ng-touched", ctx.is("touched"))("ng-pristine", ctx.is("pristine"))("ng-dirty", ctx.is("dirty"))("ng-valid", ctx.is("valid"))("ng-invalid", ctx.is("invalid"))("ng-pending", ctx.is("pending"));
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      _NgControlStatus.ctorParameters = function () {
        return [{
          type: _NgControl,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_NgControlStatus, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formControlName],[ngModel],[formControl]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: _NgControl,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }]
          }];
        }, null);
      })();
      /**
       * @description
       * Directive automatically applied to Angular form groups that sets CSS classes
       * based on control status (valid/invalid/dirty/etc).
       *
       * @see `NgControlStatus`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _NgControlStatusGroup = /*#__PURE__*/function (_AbstractControlStatu2) {
        _inherits(_NgControlStatusGroup, _AbstractControlStatu2);

        var _super7 = _createSuper(_NgControlStatusGroup);

        function _NgControlStatusGroup(cd) {
          _classCallCheck(this, _NgControlStatusGroup);

          return _super7.call(this, cd);
        }

        return _NgControlStatusGroup;
      }(AbstractControlStatus);

      _NgControlStatusGroup.??fac = function NgControlStatusGroup_Factory(t) {
        return new (t || _NgControlStatusGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ControlContainer, 10));
      };

      _NgControlStatusGroup.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _NgControlStatusGroup,
        selectors: [["", "formGroupName", ""], ["", "formArrayName", ""], ["", "ngModelGroup", ""], ["", "formGroup", ""], ["form", 3, "ngNoForm", ""], ["", "ngForm", ""]],
        hostVars: 14,
        hostBindings: function NgControlStatusGroup_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????classProp"]("ng-untouched", ctx.is("untouched"))("ng-touched", ctx.is("touched"))("ng-pristine", ctx.is("pristine"))("ng-dirty", ctx.is("dirty"))("ng-valid", ctx.is("valid"))("ng-invalid", ctx.is("invalid"))("ng-pending", ctx.is("pending"));
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      _NgControlStatusGroup.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }]
        }];
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_NgControlStatusGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]',
            host: ngControlStatusHost
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }]
          }];
        }, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var FormErrorExamples = {
        formControlName: "\n    <div [formGroup]=\"myGroup\">\n      <input formControlName=\"firstName\">\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       firstName: new FormControl()\n    });",
        formGroupName: "\n    <div [formGroup]=\"myGroup\">\n       <div formGroupName=\"person\">\n          <input formControlName=\"firstName\">\n       </div>\n    </div>\n\n    In your class:\n\n    this.myGroup = new FormGroup({\n       person: new FormGroup({ firstName: new FormControl() })\n    });",
        formArrayName: "\n    <div [formGroup]=\"myGroup\">\n      <div formArrayName=\"cities\">\n        <div *ngFor=\"let city of cityArray.controls; index as i\">\n          <input [formControlName]=\"i\">\n        </div>\n      </div>\n    </div>\n\n    In your class:\n\n    this.cityArray = new FormArray([new FormControl('SF')]);\n    this.myGroup = new FormGroup({\n      cities: this.cityArray\n    });",
        ngModelGroup: "\n    <form>\n       <div ngModelGroup=\"person\">\n          <input [(ngModel)]=\"person.name\" name=\"firstName\">\n       </div>\n    </form>",
        ngModelWithFormGroup: "\n    <div [formGroup]=\"myGroup\">\n       <input formControlName=\"firstName\">\n       <input [(ngModel)]=\"showMoreControls\" [ngModelOptions]=\"{standalone: true}\">\n    </div>\n  "
      };
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      var ReactiveErrors = /*#__PURE__*/function () {
        function ReactiveErrors() {
          _classCallCheck(this, ReactiveErrors);
        }

        _createClass(ReactiveErrors, null, [{
          key: "controlParentException",
          value: function controlParentException() {
            throw new Error("formControlName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formControlName));
          }
        }, {
          key: "ngModelGroupException",
          value: function ngModelGroupException() {
            throw new Error("formControlName cannot be used with an ngModelGroup parent. It is only compatible with parents\n       that also have a \"form\" prefix: formGroupName, formArrayName, or formGroup.\n\n       Option 1:  Update the parent to be formGroupName (reactive form strategy)\n\n        ".concat(FormErrorExamples.formGroupName, "\n\n        Option 2: Use ngModel instead of formControlName (template-driven strategy)\n\n        ").concat(FormErrorExamples.ngModelGroup));
          }
        }, {
          key: "missingFormException",
          value: function missingFormException() {
            throw new Error("formGroup expects a FormGroup instance. Please pass one in.\n\n       Example:\n\n       ".concat(FormErrorExamples.formControlName));
          }
        }, {
          key: "groupParentException",
          value: function groupParentException() {
            throw new Error("formGroupName must be used with a parent formGroup directive.  You'll want to add a formGroup\n      directive and pass it an existing FormGroup instance (you can create one in your class).\n\n      Example:\n\n      ".concat(FormErrorExamples.formGroupName));
          }
        }, {
          key: "arrayParentException",
          value: function arrayParentException() {
            throw new Error("formArrayName must be used with a parent formGroup directive.  You'll want to add a formGroup\n       directive and pass it an existing FormGroup instance (you can create one in your class).\n\n        Example:\n\n        ".concat(FormErrorExamples.formArrayName));
          }
        }, {
          key: "disabledAttrWarning",
          value: function disabledAttrWarning() {
            console.warn("\n      It looks like you're using the disabled attribute with a reactive form directive. If you set disabled to true\n      when you set up this control in your component class, the disabled attribute will actually be set in the DOM for\n      you. We recommend using this approach to avoid 'changed after checked' errors.\n\n      Example:\n      form = new FormGroup({\n        first: new FormControl({value: 'Nancy', disabled: true}, Validators.required),\n        last: new FormControl('Drew', Validators.required)\n      });\n    ");
          }
        }, {
          key: "ngModelWarning",
          value: function ngModelWarning(directiveName) {
            console.warn("\n    It looks like you're using ngModel on the same form field as ".concat(directiveName, ".\n    Support for using the ngModel input property and ngModelChange event with\n    reactive form directives has been deprecated in Angular v6 and will be removed\n    in a future version of Angular.\n\n    For more information on this, see our API docs here:\n    https://angular.io/api/forms/").concat(directiveName === 'formControl' ? 'FormControlDirective' : 'FormControlName', "#use-with-ngmodel\n    "));
          }
        }]);

        return ReactiveErrors;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function controlPath(name, parent) {
        return [].concat(_toConsumableArray(parent.path), [name]);
      }
      /**
       * Links a Form control and a Form directive by setting up callbacks (such as `onChange`) on both
       * instances. This function is typically invoked when form directive is being initialized.
       *
       * @param control Form control instance that should be linked.
       * @param dir Directive that should be linked with a given control.
       */


      function setUpControl(control, dir) {
        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          if (!control) _throwError(dir, 'Cannot find control with');
          if (!dir.valueAccessor) _throwError(dir, 'No value accessor for form control with');
        }

        setUpValidators(control, dir);
        dir.valueAccessor.writeValue(control.value);
        setUpViewChangePipeline(control, dir);
        setUpModelChangePipeline(control, dir);
        setUpBlurPipeline(control, dir);
        setUpDisabledChangeHandler(control, dir);
      }
      /**
       * Reverts configuration performed by the `setUpControl` control function.
       * Effectively disconnects form control with a given form directive.
       * This function is typically invoked when corresponding form directive is being destroyed.
       *
       * @param control Form control which should be cleaned up.
       * @param dir Directive that should be disconnected from a given control.
       * @param validateControlPresenceOnChange Flag that indicates whether onChange handler should
       *     contain asserts to verify that it's not called once directive is destroyed. We need this flag
       *     to avoid potentially breaking changes caused by better control cleanup introduced in #39235.
       */


      function cleanUpControl(control, dir) {
        var validateControlPresenceOnChange = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

        var noop = function noop() {
          if (validateControlPresenceOnChange && (typeof ngDevMode === 'undefined' || ngDevMode)) {
            _noControlError(dir);
          }
        }; // The `valueAccessor` field is typically defined on FromControl and FormControlName directive
        // instances and there is a logic in `selectValueAccessor` function that throws if it's not the
        // case. We still check the presence of `valueAccessor` before invoking its methods to make sure
        // that cleanup works correctly if app code or tests are setup to ignore the error thrown from
        // `selectValueAccessor`. See https://github.com/angular/angular/issues/40521.


        if (dir.valueAccessor) {
          dir.valueAccessor.registerOnChange(noop);
          dir.valueAccessor.registerOnTouched(noop);
        }

        cleanUpValidators(control, dir);

        if (control) {
          dir._invokeOnDestroyCallbacks();

          control._registerOnCollectionChange(function () {});
        }
      }

      function registerOnValidatorChange(validators, onChange) {
        validators.forEach(function (validator) {
          if (validator.registerOnValidatorChange) validator.registerOnValidatorChange(onChange);
        });
      }
      /**
       * Sets up disabled change handler function on a given form control if ControlValueAccessor
       * associated with a given directive instance supports the `setDisabledState` call.
       *
       * @param control Form control where disabled change handler should be setup.
       * @param dir Corresponding directive instance associated with this control.
       */


      function setUpDisabledChangeHandler(control, dir) {
        if (dir.valueAccessor.setDisabledState) {
          var onDisabledChange = function onDisabledChange(isDisabled) {
            dir.valueAccessor.setDisabledState(isDisabled);
          };

          control.registerOnDisabledChange(onDisabledChange); // Register a callback function to cleanup disabled change handler
          // from a control instance when a directive is destroyed.

          dir._registerOnDestroy(function () {
            control._unregisterOnDisabledChange(onDisabledChange);
          });
        }
      }
      /**
       * Sets up sync and async directive validators on provided form control.
       * This function merges validators from the directive into the validators of the control.
       *
       * @param control Form control where directive validators should be setup.
       * @param dir Directive instance that contains validators to be setup.
       */


      function setUpValidators(control, dir) {
        var validators = getControlValidators(control);

        if (dir.validator !== null) {
          control.setValidators(mergeValidators(validators, dir.validator));
        } else if (typeof validators === 'function') {
          // If sync validators are represented by a single validator function, we force the
          // `Validators.compose` call to happen by executing the `setValidators` function with
          // an array that contains that function. We need this to avoid possible discrepancies in
          // validators behavior, so sync validators are always processed by the `Validators.compose`.
          // Note: we should consider moving this logic inside the `setValidators` function itself, so we
          // have consistent behavior on AbstractControl API level. The same applies to the async
          // validators logic below.
          control.setValidators([validators]);
        }

        var asyncValidators = getControlAsyncValidators(control);

        if (dir.asyncValidator !== null) {
          control.setAsyncValidators(mergeValidators(asyncValidators, dir.asyncValidator));
        } else if (typeof asyncValidators === 'function') {
          control.setAsyncValidators([asyncValidators]);
        } // Re-run validation when validator binding changes, e.g. minlength=3 -> minlength=4


        var onValidatorChange = function onValidatorChange() {
          return control.updateValueAndValidity();
        };

        registerOnValidatorChange(dir._rawValidators, onValidatorChange);
        registerOnValidatorChange(dir._rawAsyncValidators, onValidatorChange);
      }
      /**
       * Cleans up sync and async directive validators on provided form control.
       * This function reverts the setup performed by the `setUpValidators` function, i.e.
       * removes directive-specific validators from a given control instance.
       *
       * @param control Form control from where directive validators should be removed.
       * @param dir Directive instance that contains validators to be removed.
       * @returns true if a control was updated as a result of this action.
       */


      function cleanUpValidators(control, dir) {
        var isControlUpdated = false;

        if (control !== null) {
          if (dir.validator !== null) {
            var validators = getControlValidators(control);

            if (Array.isArray(validators) && validators.length > 0) {
              // Filter out directive validator function.
              var updatedValidators = validators.filter(function (validator) {
                return validator !== dir.validator;
              });

              if (updatedValidators.length !== validators.length) {
                isControlUpdated = true;
                control.setValidators(updatedValidators);
              }
            }
          }

          if (dir.asyncValidator !== null) {
            var asyncValidators = getControlAsyncValidators(control);

            if (Array.isArray(asyncValidators) && asyncValidators.length > 0) {
              // Filter out directive async validator function.
              var updatedAsyncValidators = asyncValidators.filter(function (asyncValidator) {
                return asyncValidator !== dir.asyncValidator;
              });

              if (updatedAsyncValidators.length !== asyncValidators.length) {
                isControlUpdated = true;
                control.setAsyncValidators(updatedAsyncValidators);
              }
            }
          }
        } // Clear onValidatorChange callbacks by providing a noop function.


        var noop = function noop() {};

        registerOnValidatorChange(dir._rawValidators, noop);
        registerOnValidatorChange(dir._rawAsyncValidators, noop);
        return isControlUpdated;
      }

      function setUpViewChangePipeline(control, dir) {
        dir.valueAccessor.registerOnChange(function (newValue) {
          control._pendingValue = newValue;
          control._pendingChange = true;
          control._pendingDirty = true;
          if (control.updateOn === 'change') updateControl(control, dir);
        });
      }

      function setUpBlurPipeline(control, dir) {
        dir.valueAccessor.registerOnTouched(function () {
          control._pendingTouched = true;
          if (control.updateOn === 'blur' && control._pendingChange) updateControl(control, dir);
          if (control.updateOn !== 'submit') control.markAsTouched();
        });
      }

      function updateControl(control, dir) {
        if (control._pendingDirty) control.markAsDirty();
        control.setValue(control._pendingValue, {
          emitModelToViewChange: false
        });
        dir.viewToModelUpdate(control._pendingValue);
        control._pendingChange = false;
      }

      function setUpModelChangePipeline(control, dir) {
        var onChange = function onChange(newValue, emitModelEvent) {
          // control -> view
          dir.valueAccessor.writeValue(newValue); // control -> ngModel

          if (emitModelEvent) dir.viewToModelUpdate(newValue);
        };

        control.registerOnChange(onChange); // Register a callback function to cleanup onChange handler
        // from a control instance when a directive is destroyed.

        dir._registerOnDestroy(function () {
          control._unregisterOnChange(onChange);
        });
      }
      /**
       * Links a FormGroup or FormArray instance and corresponding Form directive by setting up validators
       * present in the view.
       *
       * @param control FormGroup or FormArray instance that should be linked.
       * @param dir Directive that provides view validators.
       */


      function setUpFormContainer(control, dir) {
        if (control == null && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Cannot find control with');
        setUpValidators(control, dir);
      }
      /**
       * Reverts the setup performed by the `setUpFormContainer` function.
       *
       * @param control FormGroup or FormArray instance that should be cleaned up.
       * @param dir Directive that provided view validators.
       * @returns true if a control was updated as a result of this action.
       */


      function cleanUpFormContainer(control, dir) {
        return cleanUpValidators(control, dir);
      }

      function _noControlError(dir) {
        return _throwError(dir, 'There is no FormControl instance attached to form control element with');
      }

      function _throwError(dir, message) {
        var messageEnd;

        if (dir.path.length > 1) {
          messageEnd = "path: '".concat(dir.path.join(' -> '), "'");
        } else if (dir.path[0]) {
          messageEnd = "name: '".concat(dir.path, "'");
        } else {
          messageEnd = 'unspecified name attribute';
        }

        throw new Error("".concat(message, " ").concat(messageEnd));
      }

      function isPropertyUpdated(changes, viewModel) {
        if (!changes.hasOwnProperty('model')) return false;
        var change = changes['model'];
        if (change.isFirstChange()) return true;
        return !Object.is(viewModel, change.currentValue);
      }

      function isBuiltInAccessor(valueAccessor) {
        // Check if a given value accessor is an instance of a class that directly extends
        // `BuiltInControlValueAccessor` one.
        return Object.getPrototypeOf(valueAccessor.constructor) === BuiltInControlValueAccessor;
      }

      function syncPendingControls(form, directives) {
        form._syncPendingControls();

        directives.forEach(function (dir) {
          var control = dir.control;

          if (control.updateOn === 'submit' && control._pendingChange) {
            dir.viewToModelUpdate(control._pendingValue);
            control._pendingChange = false;
          }
        });
      } // TODO: vsavkin remove it once https://github.com/angular/angular/issues/3011 is implemented


      function selectValueAccessor(dir, valueAccessors) {
        if (!valueAccessors) return null;
        if (!Array.isArray(valueAccessors) && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'Value accessor was not provided as an array for form control with');
        var defaultAccessor = undefined;
        var builtinAccessor = undefined;
        var customAccessor = undefined;
        valueAccessors.forEach(function (v) {
          if (v.constructor === _DefaultValueAccessor) {
            defaultAccessor = v;
          } else if (isBuiltInAccessor(v)) {
            if (builtinAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one built-in value accessor matches form control with');
            builtinAccessor = v;
          } else {
            if (customAccessor && (typeof ngDevMode === 'undefined' || ngDevMode)) _throwError(dir, 'More than one custom value accessor matches form control with');
            customAccessor = v;
          }
        });
        if (customAccessor) return customAccessor;
        if (builtinAccessor) return builtinAccessor;
        if (defaultAccessor) return defaultAccessor;

        if (typeof ngDevMode === 'undefined' || ngDevMode) {
          _throwError(dir, 'No valid value accessor for form control with');
        }

        return null;
      }

      function removeListItem(list, el) {
        var index = list.indexOf(el);
        if (index > -1) list.splice(index, 1);
      } // TODO(kara): remove after deprecation period


      function _ngModelWarning(name, type, instance, warningConfig) {
        if (warningConfig === 'never') return;

        if ((warningConfig === null || warningConfig === 'once') && !type._ngModelWarningSentOnce || warningConfig === 'always' && !instance._ngModelWarningSent) {
          ReactiveErrors.ngModelWarning(name);
          type._ngModelWarningSentOnce = true;
          instance._ngModelWarningSent = true;
        }
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Reports that a FormControl is valid, meaning that no errors exist in the input value.
       *
       * @see `status`
       */


      var VALID = 'VALID';
      /**
       * Reports that a FormControl is invalid, meaning that an error exists in the input value.
       *
       * @see `status`
       */

      var INVALID = 'INVALID';
      /**
       * Reports that a FormControl is pending, meaning that that async validation is occurring and
       * errors are not yet available for the input value.
       *
       * @see `markAsPending`
       * @see `status`
       */

      var PENDING = 'PENDING';
      /**
       * Reports that a FormControl is disabled, meaning that the control is exempt from ancestor
       * calculations of validity or value.
       *
       * @see `markAsDisabled`
       * @see `status`
       */

      var DISABLED = 'DISABLED';

      function _find(control, path, delimiter) {
        if (path == null) return null;

        if (!Array.isArray(path)) {
          path = path.split(delimiter);
        }

        if (Array.isArray(path) && path.length === 0) return null; // Not using Array.reduce here due to a Chrome 80 bug
        // https://bugs.chromium.org/p/chromium/issues/detail?id=1049982

        var controlToFind = control;
        path.forEach(function (name) {
          if (controlToFind instanceof _FormGroup) {
            controlToFind = controlToFind.controls.hasOwnProperty(name) ? controlToFind.controls[name] : null;
          } else if (controlToFind instanceof _FormArray) {
            controlToFind = controlToFind.at(name) || null;
          } else {
            controlToFind = null;
          }
        });
        return controlToFind;
      }
      /**
       * Gets validators from either an options object or given validators.
       */


      function pickValidators(validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.validators : validatorOrOpts) || null;
      }
      /**
       * Creates validator function by combining provided validators.
       */


      function coerceToValidator(validator) {
        return Array.isArray(validator) ? composeValidators(validator) : validator || null;
      }
      /**
       * Gets async validators from either an options object or given validators.
       */


      function pickAsyncValidators(asyncValidator, validatorOrOpts) {
        return (isOptionsObj(validatorOrOpts) ? validatorOrOpts.asyncValidators : asyncValidator) || null;
      }
      /**
       * Creates async validator function by combining provided async validators.
       */


      function coerceToAsyncValidator(asyncValidator) {
        return Array.isArray(asyncValidator) ? composeAsyncValidators(asyncValidator) : asyncValidator || null;
      }

      function isOptionsObj(validatorOrOpts) {
        return validatorOrOpts != null && !Array.isArray(validatorOrOpts) && typeof validatorOrOpts === 'object';
      }
      /**
       * This is the base class for `FormControl`, `FormGroup`, and `FormArray`.
       *
       * It provides some of the shared behavior that all controls and groups of controls have, like
       * running validators, calculating status, and resetting state. It also defines the properties
       * that are shared between all sub-classes, like `value`, `valid`, and `dirty`. It shouldn't be
       * instantiated directly.
       *
       * @see [Forms Guide](/guide/forms)
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       * @see [Dynamic Forms Guide](/guide/dynamic-form)
       *
       * @publicApi
       */


      var _AbstractControl = /*#__PURE__*/function () {
        /**
         * Initialize the AbstractControl instance.
         *
         * @param validators The function or array of functions that is used to determine the validity of
         *     this control synchronously.
         * @param asyncValidators The function or array of functions that is used to determine validity of
         *     this control asynchronously.
         */
        function _AbstractControl(validators, asyncValidators) {
          _classCallCheck(this, _AbstractControl);

          /**
           * Indicates that a control has its own pending asynchronous validation in progress.
           *
           * @internal
           */
          this._hasOwnPendingAsyncValidator = false;
          /** @internal */

          this._onCollectionChange = function () {};

          this._parent = null;
          /**
           * A control is `pristine` if the user has not yet changed
           * the value in the UI.
           *
           * @returns True if the user has not yet changed the value in the UI; compare `dirty`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

          this.pristine = true;
          /**
           * True if the control is marked as `touched`.
           *
           * A control is marked `touched` once the user has triggered
           * a `blur` event on it.
           */

          this.touched = false;
          /** @internal */

          this._onDisabledChange = [];
          this._rawValidators = validators;
          this._rawAsyncValidators = asyncValidators;
          this._composedValidatorFn = coerceToValidator(this._rawValidators);
          this._composedAsyncValidatorFn = coerceToAsyncValidator(this._rawAsyncValidators);
        }
        /**
         * The function that is used to determine the validity of this control synchronously.
         */


        _createClass(_AbstractControl, [{
          key: "validator",
          get: function get() {
            return this._composedValidatorFn;
          },
          set: function set(validatorFn) {
            this._rawValidators = this._composedValidatorFn = validatorFn;
          }
          /**
           * The function that is used to determine the validity of this control asynchronously.
           */

        }, {
          key: "asyncValidator",
          get: function get() {
            return this._composedAsyncValidatorFn;
          },
          set: function set(asyncValidatorFn) {
            this._rawAsyncValidators = this._composedAsyncValidatorFn = asyncValidatorFn;
          }
          /**
           * The parent control.
           */

        }, {
          key: "parent",
          get: function get() {
            return this._parent;
          }
          /**
           * A control is `valid` when its `status` is `VALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control has passed all of its validation tests,
           * false otherwise.
           */

        }, {
          key: "valid",
          get: function get() {
            return this.status === VALID;
          }
          /**
           * A control is `invalid` when its `status` is `INVALID`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control has failed one or more of its validation checks,
           * false otherwise.
           */

        }, {
          key: "invalid",
          get: function get() {
            return this.status === INVALID;
          }
          /**
           * A control is `pending` when its `status` is `PENDING`.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if this control is in the process of conducting a validation check,
           * false otherwise.
           */

        }, {
          key: "pending",
          get: function get() {
            return this.status == PENDING;
          }
          /**
           * A control is `disabled` when its `status` is `DISABLED`.
           *
           * Disabled controls are exempt from validation checks and
           * are not included in the aggregate value of their ancestor
           * controls.
           *
           * @see {@link AbstractControl.status}
           *
           * @returns True if the control is disabled, false otherwise.
           */

        }, {
          key: "disabled",
          get: function get() {
            return this.status === DISABLED;
          }
          /**
           * A control is `enabled` as long as its `status` is not `DISABLED`.
           *
           * @returns True if the control has any status other than 'DISABLED',
           * false if the status is 'DISABLED'.
           *
           * @see {@link AbstractControl.status}
           *
           */

        }, {
          key: "enabled",
          get: function get() {
            return this.status !== DISABLED;
          }
          /**
           * A control is `dirty` if the user has changed the value
           * in the UI.
           *
           * @returns True if the user has changed the value of this control in the UI; compare `pristine`.
           * Programmatic changes to a control's value do not mark it dirty.
           */

        }, {
          key: "dirty",
          get: function get() {
            return !this.pristine;
          }
          /**
           * True if the control has not been marked as touched
           *
           * A control is `untouched` if the user has not yet triggered
           * a `blur` event on it.
           */

        }, {
          key: "untouched",
          get: function get() {
            return !this.touched;
          }
          /**
           * Reports the update strategy of the `AbstractControl` (meaning
           * the event on which the control updates itself).
           * Possible values: `'change'` | `'blur'` | `'submit'`
           * Default value: `'change'`
           */

        }, {
          key: "updateOn",
          get: function get() {
            return this._updateOn ? this._updateOn : this.parent ? this.parent.updateOn : 'change';
          }
          /**
           * Sets the synchronous validators that are active on this control.  Calling
           * this overwrites any existing sync validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "setValidators",
          value: function setValidators(newValidator) {
            this._rawValidators = newValidator;
            this._composedValidatorFn = coerceToValidator(newValidator);
          }
          /**
           * Sets the async validators that are active on this control. Calling this
           * overwrites any existing async validators.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "setAsyncValidators",
          value: function setAsyncValidators(newValidator) {
            this._rawAsyncValidators = newValidator;
            this._composedAsyncValidatorFn = coerceToAsyncValidator(newValidator);
          }
          /**
           * Empties out the sync validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearValidators",
          value: function clearValidators() {
            this.validator = null;
          }
          /**
           * Empties out the async validator list.
           *
           * When you add or remove a validator at run time, you must call
           * `updateValueAndValidity()` for the new validation to take effect.
           *
           */

        }, {
          key: "clearAsyncValidators",
          value: function clearAsyncValidators() {
            this.asyncValidator = null;
          }
          /**
           * Marks the control as `touched`. A control is touched by focus and
           * blur events that do not change the value.
           *
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsTouched",
          value: function markAsTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = true;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsTouched(opts);
            }
          }
          /**
           * Marks the control and all its descendant controls as `touched`.
           * @see `markAsTouched()`
           */

        }, {
          key: "markAllAsTouched",
          value: function markAllAsTouched() {
            this.markAsTouched({
              onlySelf: true
            });

            this._forEachChild(function (control) {
              return control.markAllAsTouched();
            });
          }
          /**
           * Marks the control as `untouched`.
           *
           * If the control has any children, also marks all children as `untouched`
           * and recalculates the `touched` status of all parent controls.
           *
           * @see `markAsTouched()`
           * @see `markAsDirty()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after the marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsUntouched",
          value: function markAsUntouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = false;
            this._pendingTouched = false;

            this._forEachChild(function (control) {
              control.markAsUntouched({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /**
           * Marks the control as `dirty`. A control becomes dirty when
           * the control's value is changed through the UI; compare `markAsTouched`.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsPristine()`
           *
           * @param opts Configuration options that determine how the control propagates changes
           * and emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsDirty",
          value: function markAsDirty() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = false;

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsDirty(opts);
            }
          }
          /**
           * Marks the control as `pristine`.
           *
           * If the control has any children, marks all children as `pristine`,
           * and recalculates the `pristine` status of all parent
           * controls.
           *
           * @see `markAsTouched()`
           * @see `markAsUntouched()`
           * @see `markAsDirty()`
           *
           * @param opts Configuration options that determine how the control emits events after
           * marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           */

        }, {
          key: "markAsPristine",
          value: function markAsPristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = true;
            this._pendingDirty = false;

            this._forEachChild(function (control) {
              control.markAsPristine({
                onlySelf: true
              });
            });

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /**
           * Marks the control as `pending`.
           *
           * A control is pending while the control performs async validation.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates changes and
           * emits events after marking is applied.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), the `statusChanges`
           * observable emits an event with the latest status the control is marked pending.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "markAsPending",
          value: function markAsPending() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.status = PENDING;

            if (opts.emitEvent !== false) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.markAsPending(opts);
            }
          }
          /**
           * Disables the control. This means the control is exempt from validation checks and
           * excluded from the aggregate value of any parent. Its status is `DISABLED`.
           *
           * If the control has children, all children are also disabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configuration options that determine how the control propagates
           * changes and emits events after the control is disabled.
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is disabled.
           * When false, no events are emitted.
           */

        }, {
          key: "disable",
          value: function disable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = DISABLED;
            this.errors = null;

            this._forEachChild(function (control) {
              control.disable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this._updateValue();

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(true);
            });
          }
          /**
           * Enables the control. This means the control is included in validation checks and
           * the aggregate value of its parent. Its status recalculates based on its value and
           * its validators.
           *
           * By default, if the control has children, all children are enabled.
           *
           * @see {@link AbstractControl.status}
           *
           * @param opts Configure options that control how the control propagates changes and
           * emits events when marked as untouched
           * * `onlySelf`: When true, mark only this control. When false or not supplied,
           * marks all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is enabled.
           * When false, no events are emitted.
           */

        }, {
          key: "enable",
          value: function enable() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            // If parent has been marked artificially dirty we don't want to re-calculate the
            // parent's dirtiness based on the children.
            var skipPristineCheck = this._parentMarkedDirty(opts.onlySelf);

            this.status = VALID;

            this._forEachChild(function (control) {
              control.enable(Object.assign(Object.assign({}, opts), {
                onlySelf: true
              }));
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });

            this._updateAncestors(Object.assign(Object.assign({}, opts), {
              skipPristineCheck: skipPristineCheck
            }));

            this._onDisabledChange.forEach(function (changeFn) {
              return changeFn(false);
            });
          }
        }, {
          key: "_updateAncestors",
          value: function _updateAncestors(opts) {
            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);

              if (!opts.skipPristineCheck) {
                this._parent._updatePristine();
              }

              this._parent._updateTouched();
            }
          }
          /**
           * @param parent Sets the parent of the control
           */

        }, {
          key: "setParent",
          value: function setParent(parent) {
            this._parent = parent;
          }
          /**
           * Recalculates the value and validation status of the control.
           *
           * By default, it also updates the value and validity of its ancestors.
           *
           * @param opts Configuration options determine how the control propagates changes and emits events
           * after updates and validity checks are applied.
           * * `onlySelf`: When true, only update this control. When false or not supplied,
           * update all direct ancestors. Default is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "updateValueAndValidity",
          value: function updateValueAndValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

            this._setInitialStatus();

            this._updateValue();

            if (this.enabled) {
              this._cancelExistingSubscription();

              this.errors = this._runValidator();
              this.status = this._calculateStatus();

              if (this.status === VALID || this.status === PENDING) {
                this._runAsyncValidator(opts.emitEvent);
              }
            }

            if (opts.emitEvent !== false) {
              this.valueChanges.emit(this.value);
              this.statusChanges.emit(this.status);
            }

            if (this._parent && !opts.onlySelf) {
              this._parent.updateValueAndValidity(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTreeValidity",
          value: function _updateTreeValidity() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
              emitEvent: true
            };

            this._forEachChild(function (ctrl) {
              return ctrl._updateTreeValidity(opts);
            });

            this.updateValueAndValidity({
              onlySelf: true,
              emitEvent: opts.emitEvent
            });
          }
        }, {
          key: "_setInitialStatus",
          value: function _setInitialStatus() {
            this.status = this._allControlsDisabled() ? DISABLED : VALID;
          }
        }, {
          key: "_runValidator",
          value: function _runValidator() {
            return this.validator ? this.validator(this) : null;
          }
        }, {
          key: "_runAsyncValidator",
          value: function _runAsyncValidator(emitEvent) {
            var _this3 = this;

            if (this.asyncValidator) {
              this.status = PENDING;
              this._hasOwnPendingAsyncValidator = true;
              var obs = toObservable(this.asyncValidator(this));
              this._asyncValidationSubscription = obs.subscribe(function (errors) {
                _this3._hasOwnPendingAsyncValidator = false; // This will trigger the recalculation of the validation status, which depends on
                // the state of the asynchronous validation (whether it is in progress or not). So, it is
                // necessary that we have updated the `_hasOwnPendingAsyncValidator` boolean flag first.

                _this3.setErrors(errors, {
                  emitEvent: emitEvent
                });
              });
            }
          }
        }, {
          key: "_cancelExistingSubscription",
          value: function _cancelExistingSubscription() {
            if (this._asyncValidationSubscription) {
              this._asyncValidationSubscription.unsubscribe();

              this._hasOwnPendingAsyncValidator = false;
            }
          }
          /**
           * Sets errors on a form control when running validations manually, rather than automatically.
           *
           * Calling `setErrors` also updates the validity of the parent control.
           *
           * @usageNotes
           *
           * ### Manually set the errors for a control
           *
           * ```
           * const login = new FormControl('someLogin');
           * login.setErrors({
           *   notUnique: true
           * });
           *
           * expect(login.valid).toEqual(false);
           * expect(login.errors).toEqual({ notUnique: true });
           *
           * login.setValue('someOtherLogin');
           *
           * expect(login.valid).toEqual(true);
           * ```
           */

        }, {
          key: "setErrors",
          value: function setErrors(errors) {
            var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.errors = errors;

            this._updateControlsErrors(opts.emitEvent !== false);
          }
          /**
           * Retrieves a child control given the control's name or path.
           *
           * @param path A dot-delimited string or array of string/number values that define the path to the
           * control.
           *
           * @usageNotes
           * ### Retrieve a nested control
           *
           * For example, to get a `name` control nested within a `person` sub-group:
           *
           * * `this.form.get('person.name');`
           *
           * -OR-
           *
           * * `this.form.get(['person', 'name']);`
           *
           * ### Retrieve a control in a FormArray
           *
           * When accessing an element inside a FormArray, you can use an element index.
           * For example, to get a `price` control from the first element in an `items` array you can use:
           *
           * * `this.form.get('items.0.price');`
           *
           * -OR-
           *
           * * `this.form.get(['items', 0, 'price']);`
           */

        }, {
          key: "get",
          value: function get(path) {
            return _find(this, path, '.');
          }
          /**
           * @description
           * Reports error data for the control with the given path.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * @returns error data for that particular error. If the control or error is not present,
           * null is returned.
           */

        }, {
          key: "getError",
          value: function getError(errorCode, path) {
            var control = path ? this.get(path) : this;
            return control && control.errors ? control.errors[errorCode] : null;
          }
          /**
           * @description
           * Reports whether the control with the given path has the error specified.
           *
           * @param errorCode The code of the error to check
           * @param path A list of control names that designates how to move from the current control
           * to the control that should be queried for errors.
           *
           * @usageNotes
           * For example, for the following `FormGroup`:
           *
           * ```
           * form = new FormGroup({
           *   address: new FormGroup({ street: new FormControl() })
           * });
           * ```
           *
           * The path to the 'street' control from the root form would be 'address' -> 'street'.
           *
           * It can be provided to this method in one of two formats:
           *
           * 1. An array of string control names, e.g. `['address', 'street']`
           * 1. A period-delimited list of control names in one string, e.g. `'address.street'`
           *
           * If no path is given, this method checks for the error on the current control.
           *
           * @returns whether the given error is present in the control at the given path.
           *
           * If the control is not present, false is returned.
           */

        }, {
          key: "hasError",
          value: function hasError(errorCode, path) {
            return !!this.getError(errorCode, path);
          }
          /**
           * Retrieves the top-level ancestor of this control.
           */

        }, {
          key: "root",
          get: function get() {
            var x = this;

            while (x._parent) {
              x = x._parent;
            }

            return x;
          }
          /** @internal */

        }, {
          key: "_updateControlsErrors",
          value: function _updateControlsErrors(emitEvent) {
            this.status = this._calculateStatus();

            if (emitEvent) {
              this.statusChanges.emit(this.status);
            }

            if (this._parent) {
              this._parent._updateControlsErrors(emitEvent);
            }
          }
          /** @internal */

        }, {
          key: "_initObservables",
          value: function _initObservables() {
            this.valueChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
            this.statusChanges = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          }
        }, {
          key: "_calculateStatus",
          value: function _calculateStatus() {
            if (this._allControlsDisabled()) return DISABLED;
            if (this.errors) return INVALID;
            if (this._hasOwnPendingAsyncValidator || this._anyControlsHaveStatus(PENDING)) return PENDING;
            if (this._anyControlsHaveStatus(INVALID)) return INVALID;
            return VALID;
          }
          /** @internal */

        }, {
          key: "_anyControlsHaveStatus",
          value: function _anyControlsHaveStatus(status) {
            return this._anyControls(function (control) {
              return control.status === status;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsDirty",
          value: function _anyControlsDirty() {
            return this._anyControls(function (control) {
              return control.dirty;
            });
          }
          /** @internal */

        }, {
          key: "_anyControlsTouched",
          value: function _anyControlsTouched() {
            return this._anyControls(function (control) {
              return control.touched;
            });
          }
          /** @internal */

        }, {
          key: "_updatePristine",
          value: function _updatePristine() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.pristine = !this._anyControlsDirty();

            if (this._parent && !opts.onlySelf) {
              this._parent._updatePristine(opts);
            }
          }
          /** @internal */

        }, {
          key: "_updateTouched",
          value: function _updateTouched() {
            var opts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            this.touched = this._anyControlsTouched();

            if (this._parent && !opts.onlySelf) {
              this._parent._updateTouched(opts);
            }
          }
          /** @internal */

        }, {
          key: "_isBoxedValue",
          value: function _isBoxedValue(formState) {
            return typeof formState === 'object' && formState !== null && Object.keys(formState).length === 2 && 'value' in formState && 'disabled' in formState;
          }
          /** @internal */

        }, {
          key: "_registerOnCollectionChange",
          value: function _registerOnCollectionChange(fn) {
            this._onCollectionChange = fn;
          }
          /** @internal */

        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy(opts) {
            if (isOptionsObj(opts) && opts.updateOn != null) {
              this._updateOn = opts.updateOn;
            }
          }
          /**
           * Check to see if parent has been marked artificially dirty.
           *
           * @internal
           */

        }, {
          key: "_parentMarkedDirty",
          value: function _parentMarkedDirty(onlySelf) {
            var parentDirty = this._parent && this._parent.dirty;
            return !onlySelf && !!parentDirty && !this._parent._anyControlsDirty();
          }
        }]);

        return _AbstractControl;
      }();
      /**
       * Tracks the value and validation status of an individual form control.
       *
       * This is one of the three fundamental building blocks of Angular forms, along with
       * `FormGroup` and `FormArray`. It extends the `AbstractControl` class that
       * implements most of the base functionality for accessing the value, validation status,
       * user interactions and events. See [usage examples below](#usage-notes).
       *
       * @see `AbstractControl`
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see [Usage Notes](#usage-notes)
       *
       * @usageNotes
       *
       * ### Initializing Form Controls
       *
       * Instantiate a `FormControl`, with an initial value.
       *
       * ```ts
       * const control = new FormControl('some value');
       * console.log(control.value);     // 'some value'
       *```
       *
       * The following example initializes the control with a form state object. The `value`
       * and `disabled` keys are required in this case.
       *
       * ```ts
       * const control = new FormControl({ value: 'n/a', disabled: true });
       * console.log(control.value);     // 'n/a'
       * console.log(control.status);    // 'DISABLED'
       * ```
       *
       * The following example initializes the control with a sync validator.
       *
       * ```ts
       * const control = new FormControl('', Validators.required);
       * console.log(control.value);      // ''
       * console.log(control.status);     // 'INVALID'
       * ```
       *
       * The following example initializes the control using an options object.
       *
       * ```ts
       * const control = new FormControl('', {
       *    validators: Validators.required,
       *    asyncValidators: myAsyncValidator
       * });
       * ```
       *
       * ### Configure the control to update on a blur event
       *
       * Set the `updateOn` option to `'blur'` to update on the blur `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'blur' });
       * ```
       *
       * ### Configure the control to update on a submit event
       *
       * Set the `updateOn` option to `'submit'` to update on a submit `event`.
       *
       * ```ts
       * const control = new FormControl('', { updateOn: 'submit' });
       * ```
       *
       * ### Reset the control back to an initial value
       *
       * You reset to a specific form state by passing through a standalone
       * value or a form state object that contains both a value and a disabled state
       * (these are the only two properties that cannot be calculated).
       *
       * ```ts
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       *
       * control.reset('Drew');
       *
       * console.log(control.value); // 'Drew'
       * ```
       *
       * ### Reset the control back to an initial value and disabled
       *
       * ```
       * const control = new FormControl('Nancy');
       *
       * console.log(control.value); // 'Nancy'
       * console.log(control.status); // 'VALID'
       *
       * control.reset({ value: 'Drew', disabled: true });
       *
       * console.log(control.value); // 'Drew'
       * console.log(control.status); // 'DISABLED'
       * ```
       *
       * @publicApi
       */


      var _FormControl = /*#__PURE__*/function (_AbstractControl2) {
        _inherits(_FormControl, _AbstractControl2);

        var _super8 = _createSuper(_FormControl);

        /**
         * Creates a new `FormControl` instance.
         *
         * @param formState Initializes the control with an initial value,
         * or an object that defines the initial value and disabled state.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function _FormControl() {
          var _this4;

          var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
          var validatorOrOpts = arguments.length > 1 ? arguments[1] : undefined;
          var asyncValidator = arguments.length > 2 ? arguments[2] : undefined;

          _classCallCheck(this, _FormControl);

          _this4 = _super8.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          /** @internal */

          _this4._onChange = [];

          _this4._applyFormState(formState);

          _this4._setUpdateStrategy(validatorOrOpts);

          _this4._initObservables();

          _this4.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this4;
        }
        /**
         * Sets a new value for the form control.
         *
         * @param value The new value for the control.
         * @param options Configuration options that determine how the control propagates changes
         * and emits events when the value changes.
         * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
         * updateValueAndValidity} method.
         *
         * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
         * false.
         * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
         * `valueChanges`
         * observables emit events with the latest status and value when the control value is updated.
         * When false, no events are emitted.
         * * `emitModelToViewChange`: When true or not supplied  (the default), each change triggers an
         * `onChange` event to
         * update the view.
         * * `emitViewToModelChange`: When true or not supplied (the default), each change triggers an
         * `ngModelChange`
         * event to update the model.
         *
         */


        _createClass(_FormControl, [{
          key: "setValue",
          value: function setValue(value) {
            var _this5 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.value = this._pendingValue = value;

            if (this._onChange.length && options.emitModelToViewChange !== false) {
              this._onChange.forEach(function (changeFn) {
                return changeFn(_this5.value, options.emitViewToModelChange !== false);
              });
            }

            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of a control.
           *
           * This function is functionally the same as {@link FormControl#setValue setValue} at this level.
           * It exists for symmetry with {@link FormGroup#patchValue patchValue} on `FormGroups` and
           * `FormArrays`, where it does behave differently.
           *
           * @see `setValue` for options
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.setValue(value, options);
          }
          /**
           * Resets the form control, marking it `pristine` and `untouched`, and setting
           * the value to null.
           *
           * @param formState Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           *
           */

        }, {
          key: "reset",
          value: function reset() {
            var formState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._applyFormState(formState);

            this.markAsPristine(options);
            this.markAsUntouched(options);
            this.setValue(this.value, options);
            this._pendingChange = false;
          }
          /**
           * @internal
           */

        }, {
          key: "_updateValue",
          value: function _updateValue() {}
          /**
           * @internal
           */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return false;
          }
          /**
           * @internal
           */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            return this.disabled;
          }
          /**
           * Register a listener for change events.
           *
           * @param fn The method that is called when the value changes
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange.push(fn);
          }
          /**
           * Internal function to unregister a change events listener.
           * @internal
           */

        }, {
          key: "_unregisterOnChange",
          value: function _unregisterOnChange(fn) {
            removeListItem(this._onChange, fn);
          }
          /**
           * Register a listener for disabled events.
           *
           * @param fn The method that is called when the disabled status changes.
           */

        }, {
          key: "registerOnDisabledChange",
          value: function registerOnDisabledChange(fn) {
            this._onDisabledChange.push(fn);
          }
          /**
           * Internal function to unregister a disabled event listener.
           * @internal
           */

        }, {
          key: "_unregisterOnDisabledChange",
          value: function _unregisterOnDisabledChange(fn) {
            removeListItem(this._onDisabledChange, fn);
          }
          /**
           * @internal
           */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {}
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            if (this.updateOn === 'submit') {
              if (this._pendingDirty) this.markAsDirty();
              if (this._pendingTouched) this.markAsTouched();

              if (this._pendingChange) {
                this.setValue(this._pendingValue, {
                  onlySelf: true,
                  emitModelToViewChange: false
                });
                return true;
              }
            }

            return false;
          }
        }, {
          key: "_applyFormState",
          value: function _applyFormState(formState) {
            if (this._isBoxedValue(formState)) {
              this.value = this._pendingValue = formState.value;
              formState.disabled ? this.disable({
                onlySelf: true,
                emitEvent: false
              }) : this.enable({
                onlySelf: true,
                emitEvent: false
              });
            } else {
              this.value = this._pendingValue = formState;
            }
          }
        }]);

        return _FormControl;
      }(_AbstractControl);
      /**
       * Tracks the value and validity state of a group of `FormControl` instances.
       *
       * A `FormGroup` aggregates the values of each child `FormControl` into one object,
       * with each control name as the key.  It calculates its status by reducing the status values
       * of its children. For example, if one of the controls in a group is invalid, the entire
       * group becomes invalid.
       *
       * `FormGroup` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormArray`.
       *
       * When instantiating a `FormGroup`, pass in a collection of child controls as the first
       * argument. The key for each child registers the name for the control.
       *
       * @usageNotes
       *
       * ### Create a form group with 2 controls
       *
       * ```
       * const form = new FormGroup({
       *   first: new FormControl('Nancy', Validators.minLength(2)),
       *   last: new FormControl('Drew'),
       * });
       *
       * console.log(form.value);   // {first: 'Nancy', last; 'Drew'}
       * console.log(form.status);  // 'VALID'
       * ```
       *
       * ### Create a form group with a group-level validator
       *
       * You include group-level validators as the second arg, or group-level async
       * validators as the third arg. These come in handy when you want to perform validation
       * that considers the value of more than one child control.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('', Validators.minLength(2)),
       *   passwordConfirm: new FormControl('', Validators.minLength(2)),
       * }, passwordMatchValidator);
       *
       *
       * function passwordMatchValidator(g: FormGroup) {
       *    return g.get('password').value === g.get('passwordConfirm').value
       *       ? null : {'mismatch': true};
       * }
       * ```
       *
       * Like `FormControl` instances, you choose to pass in
       * validators and async validators as part of an options object.
       *
       * ```
       * const form = new FormGroup({
       *   password: new FormControl('')
       *   passwordConfirm: new FormControl('')
       * }, { validators: passwordMatchValidator, asyncValidators: otherValidator });
       * ```
       *
       * ### Set the updateOn property for all controls in a form group
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * group level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const c = new FormGroup({
       *   one: new FormControl()
       * }, { updateOn: 'blur' });
       * ```
       *
       * @publicApi
       */


      var _FormGroup = /*#__PURE__*/function (_AbstractControl3) {
        _inherits(_FormGroup, _AbstractControl3);

        var _super9 = _createSuper(_FormGroup);

        /**
         * Creates a new `FormGroup` instance.
         *
         * @param controls A collection of child controls. The key for each child is the name
         * under which it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function _FormGroup(controls, validatorOrOpts, asyncValidator) {
          var _this6;

          _classCallCheck(this, _FormGroup);

          _this6 = _super9.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this6.controls = controls;

          _this6._initObservables();

          _this6._setUpdateStrategy(validatorOrOpts);

          _this6._setUpControls();

          _this6.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`. The status should be broadcasted via the `statusChanges` observable,
            // so we set `emitEvent` to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this6;
        }
        /**
         * Registers a control with the group's list of controls.
         *
         * This method does not update the value or validity of the control.
         * Use {@link FormGroup#addControl addControl} instead.
         *
         * @param name The control name to register in the collection
         * @param control Provides the control for the given name
         */


        _createClass(_FormGroup, [{
          key: "registerControl",
          value: function registerControl(name, control) {
            if (this.controls[name]) return this.controls[name];
            this.controls[name] = control;
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);

            return control;
          }
          /**
           * Add a control to this group.
           *
           * This method also updates the value and validity of the control.
           *
           * @param name The control name to add to the collection
           * @param control Provides the control for the given name
           * @param options Specifies whether this FormGroup instance should emit events after a new
           *     control is added.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * added. When false, no events are emitted.
           */

        }, {
          key: "addControl",
          value: function addControl(name, control) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            this.registerControl(name, control);
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Remove a control from this group.
           *
           * This method also updates the value and validity of the control.
           *
           * @param name The control name to remove from the collection
           * @param options Specifies whether this FormGroup instance should emit events after a
           *     control is removed.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * removed. When false, no events are emitted.
           */

        }, {
          key: "removeControl",
          value: function removeControl(name) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Replace an existing control.
           *
           * @param name The control name to replace in the collection
           * @param control Provides the control for the given name
           * @param options Specifies whether this FormGroup instance should emit events after an
           *     existing control is replaced.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * replaced with a new one. When false, no events are emitted.
           */

        }, {
          key: "setControl",
          value: function setControl(name, control) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            if (this.controls[name]) this.controls[name]._registerOnCollectionChange(function () {});
            delete this.controls[name];
            if (control) this.registerControl(name, control);
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Check whether there is an enabled control with the given name in the group.
           *
           * Reports false for disabled controls. If you'd like to check for existence in the group
           * only, use {@link AbstractControl#get get} instead.
           *
           * @param controlName The control name to check for existence in the collection
           *
           * @returns false for disabled controls, true otherwise.
           */

        }, {
          key: "contains",
          value: function contains(controlName) {
            return this.controls.hasOwnProperty(controlName) && this.controls[controlName].enabled;
          }
          /**
           * Sets the value of the `FormGroup`. It accepts an object that matches
           * the structure of the group, with control names as keys.
           *
           * @usageNotes
           * ### Set the complete value for the form group
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl(),
           *   last: new FormControl()
           * });
           *
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.setValue({first: 'Nancy', last: 'Drew'});
           * console.log(form.value);   // {first: 'Nancy', last: 'Drew'}
           * ```
           *
           * @throws When strict checks fail, such as setting the value of a control
           * that doesn't exist or if you exclude a value of a control that does exist.
           *
           * @param value The new value for the control that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes
           * and emits events after the value changes.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this7 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            Object.keys(value).forEach(function (name) {
              _this7._throwIfControlMissing(name);

              _this7.controls[name].setValue(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormGroup`. It accepts an object with control
           * names as keys, and does its best to match the values to the correct controls
           * in the group.
           *
           * It accepts both super-sets and sub-sets of the group without throwing an error.
           *
           * @usageNotes
           * ### Patch the value for a form group
           *
           * ```
           * const form = new FormGroup({
           *    first: new FormControl(),
           *    last: new FormControl()
           * });
           * console.log(form.value);   // {first: null, last: null}
           *
           * form.patchValue({first: 'Nancy'});
           * console.log(form.value);   // {first: 'Nancy', last: null}
           * ```
           *
           * @param value The object that matches the structure of the group.
           * @param options Configuration options that determine how the control propagates changes and
           * emits events after the value is patched.
           * * `onlySelf`: When true, each change only affects this control and not its parent. Default is
           * true.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control value
           * is updated. When false, no events are emitted. The configuration options are passed to
           * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this8 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
            // `patchValue` can be called recursively and inner data structures might have these values, so
            // we just ignore such cases when a field containing FormGroup instance receives `null` or
            // `undefined` as a value.
            if (value == null
            /* both `null` and `undefined` */
            ) return;
            Object.keys(value).forEach(function (name) {
              if (_this8.controls[name]) {
                _this8.controls[name].patchValue(value[name], {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormGroup`, marks all descendants `pristine` and `untouched` and sets
           * the value of all descendants to null.
           *
           * You reset to a specific form state by passing in a map of states
           * that matches the structure of your form, with control names as keys. The state
           * is a standalone value or a form state object with both a value and a disabled
           * status.
           *
           * @param value Resets the control with an initial value,
           * or an object that defines the initial value and disabled state.
           *
           * @param options Configuration options that determine how the control propagates changes
           * and emits events when the group is reset.
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default is
           * false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           *
           * @usageNotes
           *
           * ### Reset the form group values
           *
           * ```ts
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * console.log(form.value);  // {first: 'first name', last: 'last name'}
           *
           * form.reset({ first: 'name', last: 'last name' });
           *
           * console.log(form.value);  // {first: 'name', last: 'last name'}
           * ```
           *
           * ### Reset the form group values and disabled status
           *
           * ```
           * const form = new FormGroup({
           *   first: new FormControl('first name'),
           *   last: new FormControl('last name')
           * });
           *
           * form.reset({
           *   first: {value: 'name', disabled: true},
           *   last: 'last'
           * });
           *
           * console.log(form.value);  // {last: 'last'}
           * console.log(form.get('first').status);  // 'DISABLED'
           * ```
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, name) {
              control.reset(value[name], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the `FormGroup`, including any disabled controls.
           *
           * Retrieves all values regardless of disabled status.
           * The `value` property is the best way to get the value of the group, because
           * it excludes disabled controls in the `FormGroup`.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this._reduceChildren({}, function (acc, control, name) {
              acc[name] = control instanceof _FormControl ? control.value : control.getRawValue();
              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this._reduceChildren(false, function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            });

            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(name) {
            if (!Object.keys(this.controls).length) {
              throw new Error("\n        There are no form controls registered with this group yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.controls[name]) {
              throw new Error("Cannot find form control with name: ".concat(name, "."));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            var _this9 = this;

            Object.keys(this.controls).forEach(function (key) {
              // The list of controls can change (for ex. controls might be removed) while the loop
              // is running (as a result of invoking Forms API in `valueChanges` subscription), so we
              // have to null check before invoking the callback.
              var control = _this9.controls[key];
              control && cb(control, key);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this10 = this;

            this._forEachChild(function (control) {
              control.setParent(_this10);

              control._registerOnCollectionChange(_this10._onCollectionChange);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            this.value = this._reduceValue();
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            for (var _i = 0, _Object$keys = Object.keys(this.controls); _i < _Object$keys.length; _i++) {
              var controlName = _Object$keys[_i];
              var control = this.controls[controlName];

              if (this.contains(controlName) && condition(control)) {
                return true;
              }
            }

            return false;
          }
          /** @internal */

        }, {
          key: "_reduceValue",
          value: function _reduceValue() {
            var _this11 = this;

            return this._reduceChildren({}, function (acc, control, name) {
              if (control.enabled || _this11.disabled) {
                acc[name] = control.value;
              }

              return acc;
            });
          }
          /** @internal */

        }, {
          key: "_reduceChildren",
          value: function _reduceChildren(initValue, fn) {
            var res = initValue;

            this._forEachChild(function (control, name) {
              res = fn(res, control, name);
            });

            return res;
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            for (var _i2 = 0, _Object$keys2 = Object.keys(this.controls); _i2 < _Object$keys2.length; _i2++) {
              var controlName = _Object$keys2[_i2];

              if (this.controls[controlName].enabled) {
                return false;
              }
            }

            return Object.keys(this.controls).length > 0 || this.disabled;
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, name) {
              if (value[name] === undefined) {
                throw new Error("Must supply a value for form control with name: '".concat(name, "'."));
              }
            });
          }
        }]);

        return _FormGroup;
      }(_AbstractControl);
      /**
       * Tracks the value and validity state of an array of `FormControl`,
       * `FormGroup` or `FormArray` instances.
       *
       * A `FormArray` aggregates the values of each child `FormControl` into an array.
       * It calculates its status by reducing the status values of its children. For example, if one of
       * the controls in a `FormArray` is invalid, the entire array becomes invalid.
       *
       * `FormArray` is one of the three fundamental building blocks used to define forms in Angular,
       * along with `FormControl` and `FormGroup`.
       *
       * @usageNotes
       *
       * ### Create an array of form controls
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy', Validators.minLength(2)),
       *   new FormControl('Drew'),
       * ]);
       *
       * console.log(arr.value);   // ['Nancy', 'Drew']
       * console.log(arr.status);  // 'VALID'
       * ```
       *
       * ### Create a form array with array-level validators
       *
       * You include array-level validators and async validators. These come in handy
       * when you want to perform validation that considers the value of more than one child
       * control.
       *
       * The two types of validators are passed in separately as the second and third arg
       * respectively, or together as part of an options object.
       *
       * ```
       * const arr = new FormArray([
       *   new FormControl('Nancy'),
       *   new FormControl('Drew')
       * ], {validators: myValidator, asyncValidators: myAsyncValidator});
       * ```
       *
       * ### Set the updateOn property for all controls in a form array
       *
       * The options object is used to set a default value for each child
       * control's `updateOn` property. If you set `updateOn` to `'blur'` at the
       * array level, all child controls default to 'blur', unless the child
       * has explicitly specified a different `updateOn` value.
       *
       * ```ts
       * const arr = new FormArray([
       *    new FormControl()
       * ], {updateOn: 'blur'});
       * ```
       *
       * ### Adding or removing controls from a form array
       *
       * To change the controls in the array, use the `push`, `insert`, `removeAt` or `clear` methods
       * in `FormArray` itself. These methods ensure the controls are properly tracked in the
       * form's hierarchy. Do not modify the array of `AbstractControl`s used to instantiate
       * the `FormArray` directly, as that result in strange and unexpected behavior such
       * as broken change detection.
       *
       * @publicApi
       */


      var _FormArray = /*#__PURE__*/function (_AbstractControl4) {
        _inherits(_FormArray, _AbstractControl4);

        var _super10 = _createSuper(_FormArray);

        /**
         * Creates a new `FormArray` instance.
         *
         * @param controls An array of child controls. Each child control is given an index
         * where it is registered.
         *
         * @param validatorOrOpts A synchronous validator function, or an array of
         * such functions, or an `AbstractControlOptions` object that contains validation functions
         * and a validation trigger.
         *
         * @param asyncValidator A single async validator or array of async validator functions
         *
         */
        function _FormArray(controls, validatorOrOpts, asyncValidator) {
          var _this12;

          _classCallCheck(this, _FormArray);

          _this12 = _super10.call(this, pickValidators(validatorOrOpts), pickAsyncValidators(asyncValidator, validatorOrOpts));
          _this12.controls = controls;

          _this12._initObservables();

          _this12._setUpdateStrategy(validatorOrOpts);

          _this12._setUpControls();

          _this12.updateValueAndValidity({
            onlySelf: true,
            // If `asyncValidator` is present, it will trigger control status change from `PENDING` to
            // `VALID` or `INVALID`.
            // The status should be broadcasted via the `statusChanges` observable, so we set `emitEvent`
            // to `true` to allow that during the control creation process.
            emitEvent: !!asyncValidator
          });

          return _this12;
        }
        /**
         * Get the `AbstractControl` at the given `index` in the array.
         *
         * @param index Index in the array to retrieve the control
         */


        _createClass(_FormArray, [{
          key: "at",
          value: function at(index) {
            return this.controls[index];
          }
          /**
           * Insert a new `AbstractControl` at the end of the array.
           *
           * @param control Form control to be inserted
           * @param options Specifies whether this FormArray instance should emit events after a new
           *     control is added.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * inserted. When false, no events are emitted.
           */

        }, {
          key: "push",
          value: function push(control) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            this.controls.push(control);

            this._registerControl(control);

            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Insert a new `AbstractControl` at the given `index` in the array.
           *
           * @param index Index in the array to insert the control
           * @param control Form control to be inserted
           * @param options Specifies whether this FormArray instance should emit events after a new
           *     control is inserted.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * inserted. When false, no events are emitted.
           */

        }, {
          key: "insert",
          value: function insert(index, control) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            this.controls.splice(index, 0, control);

            this._registerControl(control);

            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });
          }
          /**
           * Remove the control at the given `index` in the array.
           *
           * @param index Index in the array to remove the control
           * @param options Specifies whether this FormArray instance should emit events after a
           *     control is removed.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * removed. When false, no events are emitted.
           */

        }, {
          key: "removeAt",
          value: function removeAt(index) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });
          }
          /**
           * Replace an existing control.
           *
           * @param index Index in the array to replace the control
           * @param control The `AbstractControl` control to replace the existing control
           * @param options Specifies whether this FormArray instance should emit events after an
           *     existing control is replaced with a new one.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control is
           * replaced with a new one. When false, no events are emitted.
           */

        }, {
          key: "setControl",
          value: function setControl(index, control) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            if (this.controls[index]) this.controls[index]._registerOnCollectionChange(function () {});
            this.controls.splice(index, 1);

            if (control) {
              this.controls.splice(index, 0, control);

              this._registerControl(control);
            }

            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });

            this._onCollectionChange();
          }
          /**
           * Length of the control array.
           */

        }, {
          key: "length",
          get: function get() {
            return this.controls.length;
          }
          /**
           * Sets the value of the `FormArray`. It accepts an array that matches
           * the structure of the control.
           *
           * This method performs strict checks, and throws an error if you try
           * to set the value of a control that doesn't exist or if you exclude the
           * value of a control.
           *
           * @usageNotes
           * ### Set the values for the controls in the form array
           *
           * ```
           * const arr = new FormArray([
           *   new FormControl(),
           *   new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.setValue(['Nancy', 'Drew']);
           * console.log(arr.value);   // ['Nancy', 'Drew']
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control value is updated.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            var _this13 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._checkAllValuesPresent(value);

            value.forEach(function (newValue, index) {
              _this13._throwIfControlMissing(index);

              _this13.at(index).setValue(newValue, {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Patches the value of the `FormArray`. It accepts an array that matches the
           * structure of the control, and does its best to match the values to the correct
           * controls in the group.
           *
           * It accepts both super-sets and sub-sets of the array without throwing an error.
           *
           * @usageNotes
           * ### Patch the values for controls in a form array
           *
           * ```
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.value);   // [null, null]
           *
           * arr.patchValue(['Nancy']);
           * console.log(arr.value);   // ['Nancy', null]
           * ```
           *
           * @param value Array of latest values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when the control value
           * is updated. When false, no events are emitted. The configuration options are passed to
           * the {@link AbstractControl#updateValueAndValidity updateValueAndValidity} method.
           */

        }, {
          key: "patchValue",
          value: function patchValue(value) {
            var _this14 = this;

            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            // Even though the `value` argument type doesn't allow `null` and `undefined` values, the
            // `patchValue` can be called recursively and inner data structures might have these values, so
            // we just ignore such cases when a field containing FormArray instance receives `null` or
            // `undefined` as a value.
            if (value == null
            /* both `null` and `undefined` */
            ) return;
            value.forEach(function (newValue, index) {
              if (_this14.at(index)) {
                _this14.at(index).patchValue(newValue, {
                  onlySelf: true,
                  emitEvent: options.emitEvent
                });
              }
            });
            this.updateValueAndValidity(options);
          }
          /**
           * Resets the `FormArray` and all descendants are marked `pristine` and `untouched`, and the
           * value of all descendants to null or null maps.
           *
           * You reset to a specific form state by passing in an array of states
           * that matches the structure of the control. The state is a standalone value
           * or a form state object with both a value and a disabled status.
           *
           * @usageNotes
           * ### Reset the values in a form array
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * arr.reset(['name', 'last name']);
           *
           * console.log(this.arr.value);  // ['name', 'last name']
           * ```
           *
           * ### Reset the values in a form array and the disabled status for the first control
           *
           * ```
           * this.arr.reset([
           *   {value: 'name', disabled: true},
           *   'last'
           * ]);
           *
           * console.log(this.arr.value);  // ['name', 'last name']
           * console.log(this.arr.get(0).status);  // 'DISABLED'
           * ```
           *
           * @param value Array of values for the controls
           * @param options Configure options that determine how the control propagates changes and
           * emits events after the value changes
           *
           * * `onlySelf`: When true, each change only affects this control, and not its parent. Default
           * is false.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges`
           * observables emit events with the latest status and value when the control is reset.
           * When false, no events are emitted.
           * The configuration options are passed to the {@link AbstractControl#updateValueAndValidity
           * updateValueAndValidity} method.
           */

        }, {
          key: "reset",
          value: function reset() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            this._forEachChild(function (control, index) {
              control.reset(value[index], {
                onlySelf: true,
                emitEvent: options.emitEvent
              });
            });

            this._updatePristine(options);

            this._updateTouched(options);

            this.updateValueAndValidity(options);
          }
          /**
           * The aggregate value of the array, including any disabled controls.
           *
           * Reports all values regardless of disabled status.
           * For enabled controls only, the `value` property is the best way to get the value of the array.
           */

        }, {
          key: "getRawValue",
          value: function getRawValue() {
            return this.controls.map(function (control) {
              return control instanceof _FormControl ? control.value : control.getRawValue();
            });
          }
          /**
           * Remove all controls in the `FormArray`.
           *
           * @param options Specifies whether this FormArray instance should emit events after all
           *     controls are removed.
           * * `emitEvent`: When true or not supplied (the default), both the `statusChanges` and
           * `valueChanges` observables emit events with the latest status and value when all controls
           * in this FormArray instance are removed. When false, no events are emitted.
           *
           * @usageNotes
           * ### Remove all elements from a FormArray
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           * console.log(arr.length);  // 2
           *
           * arr.clear();
           * console.log(arr.length);  // 0
           * ```
           *
           * It's a simpler and more efficient alternative to removing all elements one by one:
           *
           * ```ts
           * const arr = new FormArray([
           *    new FormControl(),
           *    new FormControl()
           * ]);
           *
           * while (arr.length) {
           *    arr.removeAt(0);
           * }
           * ```
           */

        }, {
          key: "clear",
          value: function clear() {
            var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            if (this.controls.length < 1) return;

            this._forEachChild(function (control) {
              return control._registerOnCollectionChange(function () {});
            });

            this.controls.splice(0);
            this.updateValueAndValidity({
              emitEvent: options.emitEvent
            });
          }
          /** @internal */

        }, {
          key: "_syncPendingControls",
          value: function _syncPendingControls() {
            var subtreeUpdated = this.controls.reduce(function (updated, child) {
              return child._syncPendingControls() ? true : updated;
            }, false);
            if (subtreeUpdated) this.updateValueAndValidity({
              onlySelf: true
            });
            return subtreeUpdated;
          }
          /** @internal */

        }, {
          key: "_throwIfControlMissing",
          value: function _throwIfControlMissing(index) {
            if (!this.controls.length) {
              throw new Error("\n        There are no form controls registered with this array yet. If you're using ngModel,\n        you may want to check next tick (e.g. use setTimeout).\n      ");
            }

            if (!this.at(index)) {
              throw new Error("Cannot find form control at index ".concat(index));
            }
          }
          /** @internal */

        }, {
          key: "_forEachChild",
          value: function _forEachChild(cb) {
            this.controls.forEach(function (control, index) {
              cb(control, index);
            });
          }
          /** @internal */

        }, {
          key: "_updateValue",
          value: function _updateValue() {
            var _this15 = this;

            this.value = this.controls.filter(function (control) {
              return control.enabled || _this15.disabled;
            }).map(function (control) {
              return control.value;
            });
          }
          /** @internal */

        }, {
          key: "_anyControls",
          value: function _anyControls(condition) {
            return this.controls.some(function (control) {
              return control.enabled && condition(control);
            });
          }
          /** @internal */

        }, {
          key: "_setUpControls",
          value: function _setUpControls() {
            var _this16 = this;

            this._forEachChild(function (control) {
              return _this16._registerControl(control);
            });
          }
          /** @internal */

        }, {
          key: "_checkAllValuesPresent",
          value: function _checkAllValuesPresent(value) {
            this._forEachChild(function (control, i) {
              if (value[i] === undefined) {
                throw new Error("Must supply a value for form control at index: ".concat(i, "."));
              }
            });
          }
          /** @internal */

        }, {
          key: "_allControlsDisabled",
          value: function _allControlsDisabled() {
            var _iterator = _createForOfIteratorHelper(this.controls),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var control = _step.value;
                if (control.enabled) return false;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            return this.controls.length > 0 || this.disabled;
          }
        }, {
          key: "_registerControl",
          value: function _registerControl(control) {
            control.setParent(this);

            control._registerOnCollectionChange(this._onCollectionChange);
          }
        }]);

        return _FormArray;
      }(_AbstractControl);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NgForm;
        })
      };

      var ??0 = function ??0() {
        return Promise.resolve(null);
      };

      var resolvedPromise = ??0();
      /**
       * @description
       * Creates a top-level `FormGroup` instance and binds it to a form
       * to track aggregate form value and validation status.
       *
       * As soon as you import the `FormsModule`, this directive becomes active by default on
       * all `<form>` tags.  You don't need to add a special selector.
       *
       * You optionally export the directive into a local template variable using `ngForm` as the key
       * (ex: `#myForm="ngForm"`). This is optional, but useful.  Many properties from the underlying
       * `FormGroup` instance are duplicated on the directive itself, so a reference to it
       * gives you access to the aggregate value and validity status of the form, as well as
       * user interaction properties like `dirty` and `touched`.
       *
       * To register child controls with the form, use `NgModel` with a `name`
       * attribute. You may use `NgModelGroup` to create sub-groups within the form.
       *
       * If necessary, listen to the directive's `ngSubmit` event to be notified when the user has
       * triggered a form submission. The `ngSubmit` event emits the original form
       * submission event.
       *
       * In template driven forms, all `<form>` tags are automatically tagged as `NgForm`.
       * To import the `FormsModule` but skip its usage in some forms,
       * for example, to use native HTML5 validation, add the `ngNoForm` and the `<form>`
       * tags won't create an `NgForm` directive. In reactive forms, using `ngNoForm` is
       * unnecessary because the `<form>` tags are inert. In that case, you would
       * refrain from using the `formGroup` directive.
       *
       * @usageNotes
       *
       * ### Listening for form submission
       *
       * The following example shows how to capture the form values from the "ngSubmit" event.
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Setting the update options
       *
       * The following example shows you how to change the "updateOn" option from its default using
       * ngFormOptions.
       *
       * ```html
       * <form [ngFormOptions]="{updateOn: 'blur'}">
       *    <input name="one" ngModel>  <!-- this ngModel will update on blur -->
       * </form>
       * ```
       *
       * ### Native DOM validation UI
       *
       * In order to prevent the native DOM form validation UI from interfering with Angular's form
       * validation, Angular automatically adds the `novalidate` attribute on any `<form>` whenever
       * `FormModule` or `ReactiveFormModule` are imported into the application.
       * If you want to explicitly enable native DOM validation UI with Angular forms, you can add the
       * `ngNativeValidate` attribute to the `<form>` element:
       *
       * ```html
       * <form ngNativeValidate>
       *   ...
       * </form>
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var _NgForm = /*#__PURE__*/function (_ControlContainer2) {
        _inherits(_NgForm, _ControlContainer2);

        var _super11 = _createSuper(_NgForm);

        function _NgForm(validators, asyncValidators) {
          var _this17;

          _classCallCheck(this, _NgForm);

          _this17 = _super11.call(this);
          /**
           * @description
           * Returns whether the form submission has been triggered.
           */

          _this17.submitted = false;
          _this17._directives = [];
          /**
           * @description
           * Event emitter for the "ngSubmit" event
           */

          _this17.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this17.form = new _FormGroup({}, composeValidators(validators), composeAsyncValidators(asyncValidators));
          return _this17;
        }
        /** @nodoc */


        _createClass(_NgForm, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            this._setUpdateStrategy();
          }
          /**
           * @description
           * The directive instance.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * The internal `FormGroup` instance.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it is always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Returns a map of the controls in this group.
           */

        }, {
          key: "controls",
          get: function get() {
            return this.form.controls;
          }
          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "addControl",
          value: function addControl(dir) {
            var _this18 = this;

            resolvedPromise.then(function () {
              var container = _this18._findContainer(dir.path);

              dir.control = container.registerControl(dir.name, dir.control);
              setUpControl(dir.control, dir);
              dir.control.updateValueAndValidity({
                emitEvent: false
              });

              _this18._directives.push(dir);
            });
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `NgModel` directive.
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `NgModel` instance from the internal list of directives
           *
           * @param dir The `NgModel` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            var _this19 = this;

            resolvedPromise.then(function () {
              var container = _this19._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }

              removeListItem(_this19._directives, dir);
            });
          }
          /**
           * @description
           * Adds a new `NgModelGroup` directive instance to the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            var _this20 = this;

            resolvedPromise.then(function () {
              var container = _this20._findContainer(dir.path);

              var group = new _FormGroup({});
              setUpFormContainer(group, dir);
              container.registerControl(dir.name, group);
              group.updateValueAndValidity({
                emitEvent: false
              });
            });
          }
          /**
           * @description
           * Removes the `NgModelGroup` directive instance from the form.
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {
            var _this21 = this;

            resolvedPromise.then(function () {
              var container = _this21._findContainer(dir.path);

              if (container) {
                container.removeControl(dir.name);
              }
            });
          }
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `NgModelGroup` directive instance
           *
           * @param dir The `NgModelGroup` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `NgControl` directive.
           *
           * @param dir The `NgControl` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var _this22 = this;

            resolvedPromise.then(function () {
              var ctrl = _this22.form.get(dir.path);

              ctrl.setValue(value);
            });
          }
          /**
           * @description
           * Sets the value for this `FormGroup`.
           *
           * @param value The new value
           */

        }, {
          key: "setValue",
          value: function setValue(value) {
            this.control.setValue(value);
          }
          /**
           * @description
           * Method called when the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this._directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.form._updateOn = this.options.updateOn;
            }
          }
          /** @internal */

        }, {
          key: "_findContainer",
          value: function _findContainer(path) {
            path.pop();
            return path.length ? this.form.get(path) : this.form;
          }
        }]);

        return _NgForm;
      }(_ControlContainer);

      _NgForm.??fac = function NgForm_Factory(t) {
        return new (t || _NgForm)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _NgForm.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _NgForm,
        selectors: [["form", 3, "ngNoForm", "", 3, "formGroup", ""], ["ng-form"], ["", "ngForm", ""]],
        hostBindings: function NgForm_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function NgForm_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function NgForm_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          options: ["ngFormOptions", "options"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([formDirectiveProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      _NgForm.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _NgForm.propDecorators = {
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngFormOptions']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_NgForm, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]',
            providers: [formDirectiveProvider],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            outputs: ['ngSubmit'],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngFormOptions']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       * A base class for code shared between the `NgModelGroup` and `FormGroupName` directives.
       *
       * @publicApi
       */


      var _AbstractFormGroupDirective = /*#__PURE__*/function (_ControlContainer3) {
        _inherits(_AbstractFormGroupDirective, _ControlContainer3);

        var _super12 = _createSuper(_AbstractFormGroupDirective);

        function _AbstractFormGroupDirective() {
          _classCallCheck(this, _AbstractFormGroupDirective);

          return _super12.apply(this, arguments);
        }

        _createClass(_AbstractFormGroupDirective, [{
          key: "ngOnInit",
          value:
          /** @nodoc */
          function ngOnInit() {
            this._checkParentType(); // Register the group with its parent group.


            this.formDirective.addFormGroup(this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              // Remove the group from its parent group.
              this.formDirective.removeFormGroup(this);
            }
          }
          /**
           * @description
           * The `FormGroup` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormGroup(this);
          }
          /**
           * @description
           * The path to this group from the top-level directive.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /** @internal */

        }, {
          key: "_checkParentType",
          value: function _checkParentType() {}
        }]);

        return _AbstractFormGroupDirective;
      }(_ControlContainer);

      _AbstractFormGroupDirective.??fac = /*@__PURE__*/function () {
        var ??AbstractFormGroupDirective_BaseFactory;
        return function AbstractFormGroupDirective_Factory(t) {
          return (??AbstractFormGroupDirective_BaseFactory || (??AbstractFormGroupDirective_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_AbstractFormGroupDirective)))(t || _AbstractFormGroupDirective);
        };
      }();

      _AbstractFormGroupDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _AbstractFormGroupDirective,
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_AbstractFormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var TemplateDrivenErrors = /*#__PURE__*/function () {
        function TemplateDrivenErrors() {
          _classCallCheck(this, TemplateDrivenErrors);
        }

        _createClass(TemplateDrivenErrors, null, [{
          key: "modelParentException",
          value: function modelParentException() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroup directive.  Try using\n      formGroup's partner directive \"formControlName\" instead.  Example:\n\n      ".concat(FormErrorExamples.formControlName, "\n\n      Or, if you'd like to avoid registering this form control, indicate that it's standalone in ngModelOptions:\n\n      Example:\n\n      ").concat(FormErrorExamples.ngModelWithFormGroup));
          }
        }, {
          key: "formGroupNameException",
          value: function formGroupNameException() {
            throw new Error("\n      ngModel cannot be used to register form controls with a parent formGroupName or formArrayName directive.\n\n      Option 1: Use formControlName instead of ngModel (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Update ngModel's parent be ngModelGroup (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
          }
        }, {
          key: "missingNameException",
          value: function missingNameException() {
            throw new Error("If ngModel is used within a form tag, either the name attribute must be set or the form\n      control must be defined as 'standalone' in ngModelOptions.\n\n      Example 1: <input [(ngModel)]=\"person.firstName\" name=\"first\">\n      Example 2: <input [(ngModel)]=\"person.firstName\" [ngModelOptions]=\"{standalone: true}\">");
          }
        }, {
          key: "modelGroupParentException",
          value: function modelGroupParentException() {
            throw new Error("\n      ngModelGroup cannot be used with a parent formGroup directive.\n\n      Option 1: Use formGroupName instead of ngModelGroup (reactive strategy):\n\n      ".concat(FormErrorExamples.formGroupName, "\n\n      Option 2:  Use a regular form tag instead of the formGroup directive (template-driven strategy):\n\n      ").concat(FormErrorExamples.ngModelGroup));
          }
        }]);

        return TemplateDrivenErrors;
      }();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var modelGroupProvider = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NgModelGroup;
        })
      };
      /**
       * @description
       * Creates and binds a `FormGroup` instance to a DOM element.
       *
       * This directive can only be used as a child of `NgForm` (within `<form>` tags).
       *
       * Use this directive to validate a sub-group of your form separately from the
       * rest of your form, or if some values in your domain model make more sense
       * to consume together in a nested object.
       *
       * Provide a name for the sub-group and it will become the key
       * for the sub-group in the form's full value. If you need direct access, export the directive into
       * a local template variable using `ngModelGroup` (ex: `#myGroup="ngModelGroup"`).
       *
       * @usageNotes
       *
       * ### Consuming controls in a grouping
       *
       * The following example shows you how to combine controls together in a sub-group
       * of the form.
       *
       * {@example forms/ts/ngModelGroup/ng_model_group_example.ts region='Component'}
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var _NgModelGroup = /*#__PURE__*/function (_AbstractFormGroupDir) {
        _inherits(_NgModelGroup, _AbstractFormGroupDir);

        var _super13 = _createSuper(_NgModelGroup);

        function _NgModelGroup(parent, validators, asyncValidators) {
          var _this23;

          _classCallCheck(this, _NgModelGroup);

          _this23 = _super13.call(this);
          _this23._parent = parent;

          _this23._setValidators(validators);

          _this23._setAsyncValidators(asyncValidators);

          return _this23;
        }
        /** @internal */


        _createClass(_NgModelGroup, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof _NgForm) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              TemplateDrivenErrors.modelGroupParentException();
            }
          }
        }]);

        return _NgModelGroup;
      }(_AbstractFormGroupDirective);

      _NgModelGroup.??fac = function NgModelGroup_Factory(t) {
        return new (t || _NgModelGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ControlContainer, 5), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _NgModelGroup.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _NgModelGroup,
        selectors: [["", "ngModelGroup", ""]],
        inputs: {
          name: ["ngModelGroup", "name"]
        },
        exportAs: ["ngModelGroup"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([modelGroupProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      _NgModelGroup.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _NgModelGroup.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModelGroup']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_NgModelGroup, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngModelGroup]',
            providers: [modelGroupProvider],
            exportAs: 'ngModelGroup'
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModelGroup']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formControlBinding = {
        provide: _NgControl,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NgModel;
        })
      };

      var ??0$1 = function ??0$1() {
        return Promise.resolve(null);
      };
      /**
       * `ngModel` forces an additional change detection run when its inputs change:
       * E.g.:
       * ```
       * <div>{{myModel.valid}}</div>
       * <input [(ngModel)]="myValue" #myModel="ngModel">
       * ```
       * I.e. `ngModel` can export itself on the element and then be used in the template.
       * Normally, this would result in expressions before the `input` that use the exported directive
       * to have an old value as they have been
       * dirty checked before. As this is a very common case for `ngModel`, we added this second change
       * detection run.
       *
       * Notes:
       * - this is just one extra run no matter how many `ngModel`s have been changed.
       * - this is a general problem when using `exportAs` for directives!
       */


      var resolvedPromise$1 = ??0$1();
      /**
       * @description
       * Creates a `FormControl` instance from a domain model and binds it
       * to a form control element.
       *
       * The `FormControl` instance tracks the value, user interaction, and
       * validation status of the control and keeps the view synced with the model. If used
       * within a parent form, the directive also registers itself with the form as a child
       * control.
       *
       * This directive is used by itself or as part of a larger form. Use the
       * `ngModel` selector to activate it.
       *
       * It accepts a domain model as an optional `Input`. If you have a one-way binding
       * to `ngModel` with `[]` syntax, changing the domain model's value in the component
       * class sets the value in the view. If you have a two-way binding with `[()]` syntax
       * (also known as 'banana-in-a-box syntax'), the value in the UI always syncs back to
       * the domain model in your class.
       *
       * To inspect the properties of the associated `FormControl` (like the validity state),
       * export the directive into a local template variable using `ngModel` as the key (ex:
       * `#myVar="ngModel"`). You can then access the control using the directive's `control` property.
       * However, the most commonly used properties (like `valid` and `dirty`) also exist on the control
       * for direct access. See a full list of properties directly available in
       * `AbstractControlDirective`.
       *
       * @see `RadioControlValueAccessor`
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using ngModel on a standalone control
       *
       * The following examples show a simple standalone control using `ngModel`:
       *
       * {@example forms/ts/simpleNgModel/simple_ng_model_example.ts region='Component'}
       *
       * When using the `ngModel` within `<form>` tags, you'll also need to supply a `name` attribute
       * so that the control can be registered with the parent form under that name.
       *
       * In the context of a parent form, it's often unnecessary to include one-way or two-way binding,
       * as the parent form syncs the value for you. You access its properties by exporting it into a
       * local template variable using `ngForm` such as (`#f="ngForm"`). Use the variable where
       * needed on form submission.
       *
       * If you do need to populate initial values into your form, using a one-way binding for
       * `ngModel` tends to be sufficient as long as you use the exported form's value rather
       * than the domain model's value on submit.
       *
       * ### Using ngModel within a form
       *
       * The following example shows controls using `ngModel` within a form:
       *
       * {@example forms/ts/simpleForm/simple_form_example.ts region='Component'}
       *
       * ### Using a standalone ngModel within a group
       *
       * The following example shows you how to use a standalone ngModel control
       * within a form. This controls the display of the form, but doesn't contain form data.
       *
       * ```html
       * <form>
       *   <input name="login" ngModel placeholder="Login">
       *   <input type="checkbox" ngModel [ngModelOptions]="{standalone: true}"> Show more options?
       * </form>
       * <!-- form value: {login: ''} -->
       * ```
       *
       * ### Setting the ngModel `name` attribute through options
       *
       * The following example shows you an alternate way to set the name attribute. Here,
       * an attribute identified as name is used within a custom form control component. To still be able
       * to specify the NgModel's name, you must specify it using the `ngModelOptions` input instead.
       *
       * ```html
       * <form>
       *   <my-custom-form-control name="Nancy" ngModel [ngModelOptions]="{name: 'user'}">
       *   </my-custom-form-control>
       * </form>
       * <!-- form value: {user: ''} -->
       * ```
       *
       * @ngModule FormsModule
       * @publicApi
       */

      var _NgModel = /*#__PURE__*/function (_NgControl2) {
        _inherits(_NgModel, _NgControl2);

        var _super14 = _createSuper(_NgModel);

        function _NgModel(parent, validators, asyncValidators, valueAccessors) {
          var _this24;

          _classCallCheck(this, _NgModel);

          _this24 = _super14.call(this);
          _this24.control = new _FormControl();
          /** @internal */

          _this24._registered = false;
          /**
           * @description
           * Event emitter for producing the `ngModelChange` event after
           * the view model updates.
           */

          _this24.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this24._parent = parent;

          _this24._setValidators(validators);

          _this24._setAsyncValidators(asyncValidators);

          _this24.valueAccessor = selectValueAccessor(_assertThisInitialized(_this24), valueAccessors);
          return _this24;
        }
        /** @nodoc */


        _createClass(_NgModel, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkForErrors();

            if (!this._registered) this._setUpControl();

            if ('isDisabled' in changes) {
              this._updateDisabled(changes);
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              this._updateValue(this.model);

              this.viewModel = this.model;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.formDirective && this.formDirective.removeControl(this);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return this._parent ? controlPath(this.name, this._parent) : [this.name];
          }
          /**
           * @description
           * The top-level directive for this control if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value emitted by `ngModelChange`.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._setUpdateStrategy();

            this._isStandalone() ? this._setUpStandalone() : this.formDirective.addControl(this);
            this._registered = true;
          }
        }, {
          key: "_setUpdateStrategy",
          value: function _setUpdateStrategy() {
            if (this.options && this.options.updateOn != null) {
              this.control._updateOn = this.options.updateOn;
            }
          }
        }, {
          key: "_isStandalone",
          value: function _isStandalone() {
            return !this._parent || !!(this.options && this.options.standalone);
          }
        }, {
          key: "_setUpStandalone",
          value: function _setUpStandalone() {
            setUpControl(this.control, this);
            this.control.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_checkForErrors",
          value: function _checkForErrors() {
            if (!this._isStandalone()) {
              this._checkParentType();
            }

            this._checkName();
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof _NgModelGroup) && this._parent instanceof _AbstractFormGroupDirective) {
                TemplateDrivenErrors.formGroupNameException();
              } else if (!(this._parent instanceof _NgModelGroup) && !(this._parent instanceof _NgForm)) {
                TemplateDrivenErrors.modelParentException();
              }
            }
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.options && this.options.name) this.name = this.options.name;

            if (!this._isStandalone() && !this.name && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              TemplateDrivenErrors.missingNameException();
            }
          }
        }, {
          key: "_updateValue",
          value: function _updateValue(value) {
            var _this25 = this;

            resolvedPromise$1.then(function () {
              _this25.control.setValue(value, {
                emitViewToModelChange: false
              });
            });
          }
        }, {
          key: "_updateDisabled",
          value: function _updateDisabled(changes) {
            var _this26 = this;

            var disabledValue = changes['isDisabled'].currentValue;
            var isDisabled = disabledValue === '' || disabledValue && disabledValue !== 'false';
            resolvedPromise$1.then(function () {
              if (isDisabled && !_this26.control.disabled) {
                _this26.control.disable();
              } else if (!isDisabled && _this26.control.disabled) {
                _this26.control.enable();
              }
            });
          }
        }]);

        return _NgModel;
      }(_NgControl);

      _NgModel.??fac = function NgModel_Factory(t) {
        return new (t || _NgModel)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ControlContainer, 9), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALUE_ACCESSOR, 10));
      };

      _NgModel.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _NgModel,
        selectors: [["", "ngModel", "", 3, "formControlName", "", 3, "formControl", ""]],
        inputs: {
          name: "name",
          isDisabled: ["disabled", "isDisabled"],
          model: ["ngModel", "model"],
          options: ["ngModelOptions", "options"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngModel"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([formControlBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });

      _NgModel.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALUE_ACCESSOR]
          }]
        }];
      };

      _NgModel.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModel']
        }],
        options: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModelOptions']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_NgModel, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[ngModel]:not([formControlName]):not([formControl])',
            providers: [formControlBinding],
            exportAs: 'ngModel'
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALUE_ACCESSOR]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['ngModelChange']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['disabled']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModel']
          }],
          options: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModelOptions']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @description
       *
       * Adds `novalidate` attribute to all forms by default.
       *
       * `novalidate` is used to disable browser's native form validation.
       *
       * If you want to use native validation with Angular forms, just add `ngNativeValidate` attribute:
       *
       * ```
       * <form ngNativeValidate></form>
       * ```
       *
       * @publicApi
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       */


      var _??NgNoValidate = function _??NgNoValidate() {
        _classCallCheck(this, _??NgNoValidate);
      };

      _??NgNoValidate.??fac = function ??NgNoValidate_Factory(t) {
        return new (t || _??NgNoValidate)();
      };

      _??NgNoValidate.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _??NgNoValidate,
        selectors: [["form", 3, "ngNoForm", "", 3, "ngNativeValidate", ""]],
        hostAttrs: ["novalidate", ""]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_??NgNoValidate, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'form:not([ngNoForm]):not([ngNativeValidate])',
            host: {
              'novalidate': ''
            }
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var NUMBER_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _NumberValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a number value and listening to number input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a number input with a reactive form.
       *
       * The following example shows how to use a number input with a reactive form.
       *
       * ```ts
       * const totalCountControl = new FormControl();
       * ```
       *
       * ```
       * <input type="number" [formControl]="totalCountControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _NumberValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA2) {
        _inherits(_NumberValueAccessor, _BuiltInControlValueA2);

        var _super15 = _createSuper(_NumberValueAccessor);

        function _NumberValueAccessor() {
          _classCallCheck(this, _NumberValueAccessor);

          return _super15.apply(this, arguments);
        }

        _createClass(_NumberValueAccessor, [{
          key: "writeValue",
          value:
          /**
           * Sets the "value" property on the input element.
           * @nodoc
           */
          function writeValue(value) {
            // The value needs to be normalized for IE9, otherwise it is set to 'null' when null
            var normalizedValue = value == null ? '' : value;
            this.setProperty('value', normalizedValue);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
        }]);

        return _NumberValueAccessor;
      }(BuiltInControlValueAccessor);

      _NumberValueAccessor.??fac = /*@__PURE__*/function () {
        var ??NumberValueAccessor_BaseFactory;
        return function NumberValueAccessor_Factory(t) {
          return (??NumberValueAccessor_BaseFactory || (??NumberValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_NumberValueAccessor)))(t || _NumberValueAccessor);
        };
      }();

      _NumberValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _NumberValueAccessor,
        selectors: [["input", "type", "number", "formControlName", ""], ["input", "type", "number", "formControl", ""], ["input", "type", "number", "ngModel", ""]],
        hostBindings: function NumberValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("input", function NumberValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function NumberValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([NUMBER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_NumberValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=number][formControlName],input[type=number][formControl],input[type=number][ngModel]',
            host: {
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [NUMBER_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var RADIO_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _RadioControlValueAccessor;
        }),
        multi: true
      };

      function throwNameError() {
        throw new Error("\n      If you define both a name and a formControlName attribute on your radio button, their values\n      must match. Ex: <input type=\"radio\" formControlName=\"food\" name=\"food\">\n    ");
      }
      /**
       * Internal-only NgModule that works as a host for the `RadioControlRegistry` tree-shakable
       * provider. Note: the `InternalFormsSharedModule` can not be used here directly, since it's
       * declared *after* the `RadioControlRegistry` class and the `providedIn` doesn't support
       * `forwardRef` logic.
       */


      var RadioControlRegistryModule = function RadioControlRegistryModule() {
        _classCallCheck(this, RadioControlRegistryModule);
      };

      RadioControlRegistryModule.??fac = function RadioControlRegistryModule_Factory(t) {
        return new (t || RadioControlRegistryModule)();
      };

      RadioControlRegistryModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: RadioControlRegistryModule
      });
      RadioControlRegistryModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RadioControlRegistryModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule
        }], null, null);
      })();
      /**
       * @description
       * Class used by Angular to track radio buttons. For internal use only.
       */


      var RadioControlRegistry = /*#__PURE__*/function () {
        function RadioControlRegistry() {
          _classCallCheck(this, RadioControlRegistry);

          this._accessors = [];
        }
        /**
         * @description
         * Adds a control to the internal registry. For internal use only.
         */


        _createClass(RadioControlRegistry, [{
          key: "add",
          value: function add(control, accessor) {
            this._accessors.push([control, accessor]);
          }
          /**
           * @description
           * Removes a control from the internal registry. For internal use only.
           */

        }, {
          key: "remove",
          value: function remove(accessor) {
            for (var i = this._accessors.length - 1; i >= 0; --i) {
              if (this._accessors[i][1] === accessor) {
                this._accessors.splice(i, 1);

                return;
              }
            }
          }
          /**
           * @description
           * Selects a radio button. For internal use only.
           */

        }, {
          key: "select",
          value: function select(accessor) {
            var _this27 = this;

            this._accessors.forEach(function (c) {
              if (_this27._isSameGroup(c, accessor) && c[1] !== accessor) {
                c[1].fireUncheck(accessor.value);
              }
            });
          }
        }, {
          key: "_isSameGroup",
          value: function _isSameGroup(controlPair, accessor) {
            if (!controlPair[0].control) return false;
            return controlPair[0]._parent === accessor._control._parent && controlPair[1].name === accessor.name;
          }
        }]);

        return RadioControlRegistry;
      }();

      RadioControlRegistry.??fac = function RadioControlRegistry_Factory(t) {
        return new (t || RadioControlRegistry)();
      };

      RadioControlRegistry.??prov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({
        factory: function RadioControlRegistry_Factory() {
          return new RadioControlRegistry();
        },
        token: RadioControlRegistry,
        providedIn: RadioControlRegistryModule
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RadioControlRegistry, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: RadioControlRegistryModule
          }]
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @description
       * The `ControlValueAccessor` for writing radio control values and listening to radio control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using radio buttons with reactive form directives
       *
       * The follow example shows how to use radio buttons in a reactive form. When using radio buttons in
       * a reactive form, radio buttons in the same group should have the same `formControlName`.
       * Providing a `name` attribute is optional.
       *
       * {@example forms/ts/reactiveRadioButtons/reactive_radio_button_example.ts region='Reactive'}
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _RadioControlValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA3) {
        _inherits(_RadioControlValueAccessor, _BuiltInControlValueA3);

        var _super16 = _createSuper(_RadioControlValueAccessor);

        function _RadioControlValueAccessor(renderer, elementRef, _registry, _injector) {
          var _this28;

          _classCallCheck(this, _RadioControlValueAccessor);

          _this28 = _super16.call(this, renderer, elementRef);
          _this28._registry = _registry;
          _this28._injector = _injector;
          /**
           * The registered callback function called when a change event occurs on the input element.
           * Note: we declare `onChange` here (also used as host listener) as a function with no arguments
           * to override the `onChange` function (which expects 1 argument) in the parent
           * `BaseControlValueAccessor` class.
           * @nodoc
           */

          _this28.onChange = function () {};

          return _this28;
        }
        /** @nodoc */


        _createClass(_RadioControlValueAccessor, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._control = this._injector.get(_NgControl);

            this._checkName();

            this._registry.add(this._control, this);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._registry.remove(this);
          }
          /**
           * Sets the "checked" property value on the radio input element.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this._state = value === this.value;
            this.setProperty('checked', this._state);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this29 = this;

            this._fn = fn;

            this.onChange = function () {
              fn(_this29.value);

              _this29._registry.select(_this29);
            };
          }
          /**
           * Sets the "value" on the radio input element and unchecks it.
           *
           * @param value
           */

        }, {
          key: "fireUncheck",
          value: function fireUncheck(value) {
            this.writeValue(value);
          }
        }, {
          key: "_checkName",
          value: function _checkName() {
            if (this.name && this.formControlName && this.name !== this.formControlName && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throwNameError();
            }

            if (!this.name && this.formControlName) this.name = this.formControlName;
          }
        }]);

        return _RadioControlValueAccessor;
      }(BuiltInControlValueAccessor);

      _RadioControlValueAccessor.??fac = function RadioControlValueAccessor_Factory(t) {
        return new (t || _RadioControlValueAccessor)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](RadioControlRegistry), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector));
      };

      _RadioControlValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _RadioControlValueAccessor,
        selectors: [["input", "type", "radio", "formControlName", ""], ["input", "type", "radio", "formControl", ""], ["input", "type", "radio", "ngModel", ""]],
        hostBindings: function RadioControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function RadioControlValueAccessor_change_HostBindingHandler() {
              return ctx.onChange();
            })("blur", function RadioControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          name: "name",
          formControlName: "formControlName",
          value: "value"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([RADIO_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      _RadioControlValueAccessor.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: RadioControlRegistry
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
        }];
      };

      _RadioControlValueAccessor.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        formControlName: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_RadioControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=radio][formControlName],input[type=radio][formControl],input[type=radio][ngModel]',
            host: {
              '(change)': 'onChange()',
              '(blur)': 'onTouched()'
            },
            providers: [RADIO_VALUE_ACCESSOR]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: RadioControlRegistry
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injector
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          formControlName: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var RANGE_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _RangeValueAccessor;
        }),
        multi: true
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing a range value and listening to range input changes.
       * The value accessor is used by the `FormControlDirective`, `FormControlName`, and  `NgModel`
       * directives.
       *
       * @usageNotes
       *
       * ### Using a range input with a reactive form
       *
       * The following example shows how to use a range input with a reactive form.
       *
       * ```ts
       * const ageControl = new FormControl();
       * ```
       *
       * ```
       * <input type="range" [formControl]="ageControl">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _RangeValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA4) {
        _inherits(_RangeValueAccessor, _BuiltInControlValueA4);

        var _super17 = _createSuper(_RangeValueAccessor);

        function _RangeValueAccessor() {
          _classCallCheck(this, _RangeValueAccessor);

          return _super17.apply(this, arguments);
        }

        _createClass(_RangeValueAccessor, [{
          key: "writeValue",
          value:
          /**
           * Sets the "value" property on the input element.
           * @nodoc
           */
          function writeValue(value) {
            this.setProperty('value', parseFloat(value));
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this.onChange = function (value) {
              fn(value == '' ? null : parseFloat(value));
            };
          }
        }]);

        return _RangeValueAccessor;
      }(BuiltInControlValueAccessor);

      _RangeValueAccessor.??fac = /*@__PURE__*/function () {
        var ??RangeValueAccessor_BaseFactory;
        return function RangeValueAccessor_Factory(t) {
          return (??RangeValueAccessor_BaseFactory || (??RangeValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_RangeValueAccessor)))(t || _RangeValueAccessor);
        };
      }();

      _RangeValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _RangeValueAccessor,
        selectors: [["input", "type", "range", "formControlName", ""], ["input", "type", "range", "formControl", ""], ["input", "type", "range", "ngModel", ""]],
        hostBindings: function RangeValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function RangeValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("input", function RangeValueAccessor_input_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function RangeValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([RANGE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_RangeValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=range][formControlName],input[type=range][formControl],input[type=range][ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(input)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [RANGE_VALUE_ACCESSOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Token to provide to turn off the ngModel warning on formControl and formControlName.
       */


      var NG_MODEL_WITH_FORM_CONTROL_WARNING = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('NgModelWithFormControlWarning');
      var formControlBinding$1 = {
        provide: _NgControl,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormControlDirective;
        })
      };
      /**
       * @description
       * Synchronizes a standalone `FormControl` instance to a form control element.
       *
       * Note that support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives was deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * The following example shows how to register a standalone control and set its value.
       *
       * {@example forms/ts/simpleFormControl/simple_form_control_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormControlDirective = /*#__PURE__*/function (_NgControl3) {
        _inherits(_FormControlDirective, _NgControl3);

        var _super18 = _createSuper(_FormControlDirective);

        function _FormControlDirective(validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this30;

          _classCallCheck(this, _FormControlDirective);

          _this30 = _super18.call(this);
          _this30._ngModelWarningConfig = _ngModelWarningConfig;
          /** @deprecated as of v6 */

          _this30.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular `FormControlDirective` instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this30._ngModelWarningSent = false;

          _this30._setValidators(validators);

          _this30._setAsyncValidators(asyncValidators);

          _this30.valueAccessor = selectValueAccessor(_assertThisInitialized(_this30), valueAccessors);
          return _this30;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(_FormControlDirective, [{
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              ReactiveErrors.disabledAttrWarning();
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (this._isControlChanged(changes)) {
              var previousForm = changes['form'].previousValue;

              if (previousForm) {
                cleanUpControl(previousForm, this,
                /* validateControlPresenceOnChange */
                false);
              }

              setUpControl(this.form, this);

              if (this.control.disabled && this.valueAccessor.setDisabledState) {
                this.valueAccessor.setDisabledState(true);
              }

              this.form.updateValueAndValidity({
                emitEvent: false
              });
            }

            if (isPropertyUpdated(changes, this.viewModel)) {
              if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControl', _FormControlDirective, this, this._ngModelWarningConfig);
              }

              this.form.setValue(this.model);
              this.viewModel = this.model;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.form) {
              cleanUpControl(this.form, this,
              /* validateControlPresenceOnChange */
              false);
            }
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * The `FormControl` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
        }, {
          key: "_isControlChanged",
          value: function _isControlChanged(changes) {
            return changes.hasOwnProperty('form');
          }
        }]);

        return _FormControlDirective;
      }(_NgControl);

      _FormControlDirective.??fac = function FormControlDirective_Factory(t) {
        return new (t || _FormControlDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      _FormControlDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _FormControlDirective,
        selectors: [["", "formControl", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          form: ["formControl", "form"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([formControlBinding$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlDirective. Used to support warning config of "once".
       *
       * @internal
       */

      _FormControlDirective._ngModelWarningSentOnce = false;

      _FormControlDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      _FormControlDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formControl']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_FormControlDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formControl]',
            providers: [formControlBinding$1],
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['disabled']
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formControl']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModel']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formDirectiveProvider$1 = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormGroupDirective;
        })
      };
      /**
       * @description
       *
       * Binds an existing `FormGroup` to a DOM element.
       *
       * This directive accepts an existing `FormGroup` instance. It will then use this
       * `FormGroup` instance to match any child `FormControl`, `FormGroup`,
       * and `FormArray` instances to child `FormControlName`, `FormGroupName`,
       * and `FormArrayName` directives.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * @usageNotes
       * ### Register Form Group
       *
       * The following example registers a `FormGroup` with first name and last name controls,
       * and listens for the *ngSubmit* event when the button is clicked.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormGroupDirective = /*#__PURE__*/function (_ControlContainer4) {
        _inherits(_FormGroupDirective, _ControlContainer4);

        var _super19 = _createSuper(_FormGroupDirective);

        function _FormGroupDirective(validators, asyncValidators) {
          var _this31;

          _classCallCheck(this, _FormGroupDirective);

          _this31 = _super19.call(this);
          _this31.validators = validators;
          _this31.asyncValidators = asyncValidators;
          /**
           * @description
           * Reports whether the form submission has been triggered.
           */

          _this31.submitted = false;
          /**
           * Callback that should be invoked when controls in FormGroup or FormArray collection change
           * (added or removed). This callback triggers corresponding DOM updates.
           */

          _this31._onCollectionChange = function () {
            return _this31._updateDomValue();
          };
          /**
           * @description
           * Tracks the list of added `FormControlName` instances
           */


          _this31.directives = [];
          /**
           * @description
           * Tracks the `FormGroup` bound to this directive.
           */

          _this31.form = null;
          /**
           * @description
           * Emits an event when the form submission has been triggered.
           */

          _this31.ngSubmit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

          _this31._setValidators(validators);

          _this31._setAsyncValidators(asyncValidators);

          return _this31;
        }
        /** @nodoc */


        _createClass(_FormGroupDirective, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this._checkFormPresent();

            if (changes.hasOwnProperty('form')) {
              this._updateValidators();

              this._updateDomValue();

              this._updateRegistrations();

              this._oldForm = this.form;
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.form) {
              cleanUpValidators(this.form, this); // Currently the `onCollectionChange` callback is rewritten each time the
              // `_registerOnCollectionChange` function is invoked. The implication is that cleanup should
              // happen *only* when the `onCollectionChange` callback was set by this directive instance.
              // Otherwise it might cause overriding a callback of some other directive instances. We should
              // consider updating this logic later to make it similar to how `onChange` callbacks are
              // handled, see https://github.com/angular/angular/issues/39732 for additional info.

              if (this.form._onCollectionChange === this._onCollectionChange) {
                this.form._registerOnCollectionChange(function () {});
              }
            }
          }
          /**
           * @description
           * Returns this directive's instance.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this;
          }
          /**
           * @description
           * Returns the `FormGroup` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.form;
          }
          /**
           * @description
           * Returns an array representing the path to this group. Because this directive
           * always lives at the top level of a form, it always an empty array.
           */

        }, {
          key: "path",
          get: function get() {
            return [];
          }
          /**
           * @description
           * Method that sets up the control directive in this group, re-calculates its value
           * and validity, and adds the instance to the internal list of directives.
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "addControl",
          value: function addControl(dir) {
            var ctrl = this.form.get(dir.path);
            setUpControl(ctrl, dir);
            ctrl.updateValueAndValidity({
              emitEvent: false
            });
            this.directives.push(dir);
            return ctrl;
          }
          /**
           * @description
           * Retrieves the `FormControl` instance from the provided `FormControlName` directive
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "getControl",
          value: function getControl(dir) {
            return this.form.get(dir.path);
          }
          /**
           * @description
           * Removes the `FormControlName` instance from the internal list of directives
           *
           * @param dir The `FormControlName` directive instance.
           */

        }, {
          key: "removeControl",
          value: function removeControl(dir) {
            cleanUpControl(dir.control || null, dir,
            /* validateControlPresenceOnChange */
            false);
            removeListItem(this.directives, dir);
          }
          /**
           * Adds a new `FormGroupName` directive instance to the form.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "addFormGroup",
          value: function addFormGroup(dir) {
            this._setUpFormContainer(dir);
          }
          /**
           * Performs the necessary cleanup when a `FormGroupName` directive instance is removed from the
           * view.
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "removeFormGroup",
          value: function removeFormGroup(dir) {
            this._cleanUpFormContainer(dir);
          }
          /**
           * @description
           * Retrieves the `FormGroup` for a provided `FormGroupName` directive instance
           *
           * @param dir The `FormGroupName` directive instance.
           */

        }, {
          key: "getFormGroup",
          value: function getFormGroup(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Performs the necessary setup when a `FormArrayName` directive instance is added to the view.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "addFormArray",
          value: function addFormArray(dir) {
            this._setUpFormContainer(dir);
          }
          /**
           * Performs the necessary cleanup when a `FormArrayName` directive instance is removed from the
           * view.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "removeFormArray",
          value: function removeFormArray(dir) {
            this._cleanUpFormContainer(dir);
          }
          /**
           * @description
           * Retrieves the `FormArray` for a provided `FormArrayName` directive instance.
           *
           * @param dir The `FormArrayName` directive instance.
           */

        }, {
          key: "getFormArray",
          value: function getFormArray(dir) {
            return this.form.get(dir.path);
          }
          /**
           * Sets the new value for the provided `FormControlName` directive.
           *
           * @param dir The `FormControlName` directive instance.
           * @param value The new value for the directive's control.
           */

        }, {
          key: "updateModel",
          value: function updateModel(dir, value) {
            var ctrl = this.form.get(dir.path);
            ctrl.setValue(value);
          }
          /**
           * @description
           * Method called with the "submit" event is triggered on the form.
           * Triggers the `ngSubmit` emitter to emit the "submit" event as its payload.
           *
           * @param $event The "submit" event object
           */

        }, {
          key: "onSubmit",
          value: function onSubmit($event) {
            this.submitted = true;
            syncPendingControls(this.form, this.directives);
            this.ngSubmit.emit($event);
            return false;
          }
          /**
           * @description
           * Method called when the "reset" event is triggered on the form.
           */

        }, {
          key: "onReset",
          value: function onReset() {
            this.resetForm();
          }
          /**
           * @description
           * Resets the form to an initial value and resets its submitted status.
           *
           * @param value The new value for the form.
           */

        }, {
          key: "resetForm",
          value: function resetForm() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;
            this.form.reset(value);
            this.submitted = false;
          }
          /** @internal */

        }, {
          key: "_updateDomValue",
          value: function _updateDomValue() {
            var _this32 = this;

            this.directives.forEach(function (dir) {
              var oldCtrl = dir.control;

              var newCtrl = _this32.form.get(dir.path);

              if (oldCtrl !== newCtrl) {
                // Note: the value of the `dir.control` may not be defined, for example when it's a first
                // `FormControl` that is added to a `FormGroup` instance (via `addControl` call).
                cleanUpControl(oldCtrl || null, dir); // Check whether new control at the same location inside the corresponding `FormGroup` is an
                // instance of `FormControl` and perform control setup only if that's the case.
                // Note: we don't need to clear the list of directives (`this.directives`) here, it would be
                // taken care of in the `removeControl` method invoked when corresponding `formControlName`
                // directive instance is being removed (invoked from `FormControlName.ngOnDestroy`).

                if (newCtrl instanceof _FormControl) {
                  setUpControl(newCtrl, dir);
                  dir.control = newCtrl;
                }
              }
            });

            this.form._updateTreeValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_setUpFormContainer",
          value: function _setUpFormContainer(dir) {
            var ctrl = this.form.get(dir.path);
            setUpFormContainer(ctrl, dir); // NOTE: this operation looks unnecessary in case no new validators were added in
            // `setUpFormContainer` call. Consider updating this code to match the logic in
            // `_cleanUpFormContainer` function.

            ctrl.updateValueAndValidity({
              emitEvent: false
            });
          }
        }, {
          key: "_cleanUpFormContainer",
          value: function _cleanUpFormContainer(dir) {
            if (this.form) {
              var ctrl = this.form.get(dir.path);

              if (ctrl) {
                var isControlUpdated = cleanUpFormContainer(ctrl, dir);

                if (isControlUpdated) {
                  // Run validity check only in case a control was updated (i.e. view validators were
                  // removed) as removing view validators might cause validity to change.
                  ctrl.updateValueAndValidity({
                    emitEvent: false
                  });
                }
              }
            }
          }
        }, {
          key: "_updateRegistrations",
          value: function _updateRegistrations() {
            this.form._registerOnCollectionChange(this._onCollectionChange);

            if (this._oldForm) {
              this._oldForm._registerOnCollectionChange(function () {});
            }
          }
        }, {
          key: "_updateValidators",
          value: function _updateValidators() {
            setUpValidators(this.form, this);

            if (this._oldForm) {
              cleanUpValidators(this._oldForm, this);
            }
          }
        }, {
          key: "_checkFormPresent",
          value: function _checkFormPresent() {
            if (!this.form && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.missingFormException();
            }
          }
        }]);

        return _FormGroupDirective;
      }(_ControlContainer);

      _FormGroupDirective.??fac = function FormGroupDirective_Factory(t) {
        return new (t || _FormGroupDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _FormGroupDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _FormGroupDirective,
        selectors: [["", "formGroup", ""]],
        hostBindings: function FormGroupDirective_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("submit", function FormGroupDirective_submit_HostBindingHandler($event) {
              return ctx.onSubmit($event);
            })("reset", function FormGroupDirective_reset_HostBindingHandler() {
              return ctx.onReset();
            });
          }
        },
        inputs: {
          form: ["formGroup", "form"]
        },
        outputs: {
          ngSubmit: "ngSubmit"
        },
        exportAs: ["ngForm"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([formDirectiveProvider$1]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });

      _FormGroupDirective.ctorParameters = function () {
        return [{
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _FormGroupDirective.propDecorators = {
        form: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formGroup']
        }],
        ngSubmit: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_FormGroupDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formGroup]',
            providers: [formDirectiveProvider$1],
            host: {
              '(submit)': 'onSubmit($event)',
              '(reset)': 'onReset()'
            },
            exportAs: 'ngForm'
          }]
        }], function () {
          return [{
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formGroup']
          }],
          ngSubmit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var formGroupNameProvider = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormGroupName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormGroup` to a DOM element.
       *
       * This directive can only be used with a parent `FormGroupDirective`.
       *
       * It accepts the string name of the nested `FormGroup` to link, and
       * looks for a `FormGroup` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * Use nested form groups to validate a sub-group of a
       * form separately from the rest or to group the values of certain
       * controls into their own nested object.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @usageNotes
       *
       * ### Access the group by name
       *
       * The following example uses the {@link AbstractControl#get get} method to access the
       * associated `FormGroup`
       *
       * ```ts
       *   this.form.get('name');
       * ```
       *
       * ### Access individual controls in the group
       *
       * The following example uses the {@link AbstractControl#get get} method to access
       * individual controls within the group using dot syntax.
       *
       * ```ts
       *   this.form.get('name.first');
       * ```
       *
       * ### Register a nested `FormGroup`.
       *
       * The following example registers a nested *name* `FormGroup` within an existing `FormGroup`,
       * and provides methods to retrieve the nested `FormGroup` and individual controls.
       *
       * {@example forms/ts/nestedFormGroup/nested_form_group_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormGroupName = /*#__PURE__*/function (_AbstractFormGroupDir2) {
        _inherits(_FormGroupName, _AbstractFormGroupDir2);

        var _super20 = _createSuper(_FormGroupName);

        function _FormGroupName(parent, validators, asyncValidators) {
          var _this33;

          _classCallCheck(this, _FormGroupName);

          _this33 = _super20.call(this);
          _this33._parent = parent;

          _this33._setValidators(validators);

          _this33._setAsyncValidators(asyncValidators);

          return _this33;
        }
        /** @internal */


        _createClass(_FormGroupName, [{
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.groupParentException();
            }
          }
        }]);

        return _FormGroupName;
      }(_AbstractFormGroupDirective);

      _FormGroupName.??fac = function FormGroupName_Factory(t) {
        return new (t || _FormGroupName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _FormGroupName.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _FormGroupName,
        selectors: [["", "formGroupName", ""]],
        inputs: {
          name: ["formGroupName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([formGroupNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      _FormGroupName.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _FormGroupName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formGroupName']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_FormGroupName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formGroupName]',
            providers: [formGroupNameProvider]
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formGroupName']
          }]
        });
      })();

      var formArrayNameProvider = {
        provide: _ControlContainer,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormArrayName;
        })
      };
      /**
       * @description
       *
       * Syncs a nested `FormArray` to a DOM element.
       *
       * This directive is designed to be used with a parent `FormGroupDirective` (selector:
       * `[formGroup]`).
       *
       * It accepts the string name of the nested `FormArray` you want to link, and
       * will look for a `FormArray` registered with that name in the parent
       * `FormGroup` instance you passed into `FormGroupDirective`.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Example
       *
       * {@example forms/ts/nestedFormArray/nested_form_array_example.ts region='Component'}
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormArrayName = /*#__PURE__*/function (_ControlContainer5) {
        _inherits(_FormArrayName, _ControlContainer5);

        var _super21 = _createSuper(_FormArrayName);

        function _FormArrayName(parent, validators, asyncValidators) {
          var _this34;

          _classCallCheck(this, _FormArrayName);

          _this34 = _super21.call(this);
          _this34._parent = parent;

          _this34._setValidators(validators);

          _this34._setAsyncValidators(asyncValidators);

          return _this34;
        }
        /**
         * A lifecycle method called when the directive's inputs are initialized. For internal use only.
         * @throws If the directive does not have a valid parent.
         * @nodoc
         */


        _createClass(_FormArrayName, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this._checkParentType();

            this.formDirective.addFormArray(this);
          }
          /**
           * A lifecycle method called before the directive's instance is destroyed. For internal use only.
           * @nodoc
           */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeFormArray(this);
            }
          }
          /**
           * @description
           * The `FormArray` bound to this directive.
           */

        }, {
          key: "control",
          get: function get() {
            return this.formDirective.getFormArray(this);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (_hasInvalidParent(this._parent) && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              ReactiveErrors.arrayParentException();
            }
          }
        }]);

        return _FormArrayName;
      }(_ControlContainer);

      _FormArrayName.??fac = function FormArrayName_Factory(t) {
        return new (t || _FormArrayName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_ASYNC_VALIDATORS, 10));
      };

      _FormArrayName.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _FormArrayName,
        selectors: [["", "formArrayName", ""]],
        inputs: {
          name: ["formArrayName", "name"]
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([formArrayNameProvider]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      _FormArrayName.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }];
      };

      _FormArrayName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formArrayName']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_FormArrayName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formArrayName]',
            providers: [formArrayNameProvider]
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formArrayName']
          }]
        });
      })();

      function _hasInvalidParent(parent) {
        return !(parent instanceof _FormGroupName) && !(parent instanceof _FormGroupDirective) && !(parent instanceof _FormArrayName);
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var controlNameBinding = {
        provide: _NgControl,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _FormControlName;
        })
      };
      /**
       * @description
       * Syncs a `FormControl` in an existing `FormGroup` to a form control
       * element by name.
       *
       * @see [Reactive Forms Guide](guide/reactive-forms)
       * @see `FormControl`
       * @see `AbstractControl`
       *
       * @usageNotes
       *
       * ### Register `FormControl` within a group
       *
       * The following example shows how to register multiple form controls within a form group
       * and set their value.
       *
       * {@example forms/ts/simpleFormGroup/simple_form_group_example.ts region='Component'}
       *
       * To see `formControlName` examples with different form control types, see:
       *
       * * Radio buttons: `RadioControlValueAccessor`
       * * Selects: `SelectControlValueAccessor`
       *
       * ### Use with ngModel is deprecated
       *
       * Support for using the `ngModel` input property and `ngModelChange` event with reactive
       * form directives has been deprecated in Angular v6 and is scheduled for removal in
       * a future version of Angular.
       *
       * For details, see [Deprecated features](guide/deprecations#ngmodel-with-reactive-forms).
       *
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _FormControlName = /*#__PURE__*/function (_NgControl4) {
        _inherits(_FormControlName, _NgControl4);

        var _super22 = _createSuper(_FormControlName);

        function _FormControlName(parent, validators, asyncValidators, valueAccessors, _ngModelWarningConfig) {
          var _this35;

          _classCallCheck(this, _FormControlName);

          _this35 = _super22.call(this);
          _this35._ngModelWarningConfig = _ngModelWarningConfig;
          _this35._added = false;
          /** @deprecated as of v6 */

          _this35.update = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * @description
           * Instance property used to track whether an ngModel warning has been sent out for this
           * particular FormControlName instance. Used to support warning config of "always".
           *
           * @internal
           */

          _this35._ngModelWarningSent = false;
          _this35._parent = parent;

          _this35._setValidators(validators);

          _this35._setAsyncValidators(asyncValidators);

          _this35.valueAccessor = selectValueAccessor(_assertThisInitialized(_this35), valueAccessors);
          return _this35;
        }
        /**
         * @description
         * Triggers a warning in dev mode that this input should not be used with reactive forms.
         */


        _createClass(_FormControlName, [{
          key: "isDisabled",
          set: function set(isDisabled) {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              ReactiveErrors.disabledAttrWarning();
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if (!this._added) this._setUpControl();

            if (isPropertyUpdated(changes, this.viewModel)) {
              if (typeof ngDevMode === 'undefined' || ngDevMode) {
                _ngModelWarning('formControlName', _FormControlName, this, this._ngModelWarningConfig);
              }

              this.viewModel = this.model;
              this.formDirective.updateModel(this, this.model);
            }
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this.formDirective) {
              this.formDirective.removeControl(this);
            }
          }
          /**
           * @description
           * Sets the new value for the view model and emits an `ngModelChange` event.
           *
           * @param newValue The new value for the view model.
           */

        }, {
          key: "viewToModelUpdate",
          value: function viewToModelUpdate(newValue) {
            this.viewModel = newValue;
            this.update.emit(newValue);
          }
          /**
           * @description
           * Returns an array that represents the path from the top-level form to this control.
           * Each index is the string name of the control on that level.
           */

        }, {
          key: "path",
          get: function get() {
            return controlPath(this.name == null ? this.name : this.name.toString(), this._parent);
          }
          /**
           * @description
           * The top-level directive for this group if present, otherwise null.
           */

        }, {
          key: "formDirective",
          get: function get() {
            return this._parent ? this._parent.formDirective : null;
          }
        }, {
          key: "_checkParentType",
          value: function _checkParentType() {
            if (typeof ngDevMode === 'undefined' || ngDevMode) {
              if (!(this._parent instanceof _FormGroupName) && this._parent instanceof _AbstractFormGroupDirective) {
                ReactiveErrors.ngModelGroupException();
              } else if (!(this._parent instanceof _FormGroupName) && !(this._parent instanceof _FormGroupDirective) && !(this._parent instanceof _FormArrayName)) {
                ReactiveErrors.controlParentException();
              }
            }
          }
        }, {
          key: "_setUpControl",
          value: function _setUpControl() {
            this._checkParentType();

            this.control = this.formDirective.addControl(this);

            if (this.control.disabled && this.valueAccessor.setDisabledState) {
              this.valueAccessor.setDisabledState(true);
            }

            this._added = true;
          }
        }]);

        return _FormControlName;
      }(_NgControl);

      _FormControlName.??fac = function FormControlName_Factory(t) {
        return new (t || _FormControlName)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_ControlContainer, 13), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_ASYNC_VALIDATORS, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_NG_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](NG_MODEL_WITH_FORM_CONTROL_WARNING, 8));
      };

      _FormControlName.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _FormControlName,
        selectors: [["", "formControlName", ""]],
        inputs: {
          isDisabled: ["disabled", "isDisabled"],
          name: ["formControlName", "name"],
          model: ["ngModel", "model"]
        },
        outputs: {
          update: "ngModelChange"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([controlNameBinding]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });
      /**
       * @description
       * Static property used to track whether any ngModel warnings have been sent across
       * all instances of FormControlName. Used to support warning config of "once".
       *
       * @internal
       */

      _FormControlName._ngModelWarningSentOnce = false;

      _FormControlName.ctorParameters = function () {
        return [{
          type: _ControlContainer,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_ASYNC_VALIDATORS]
          }]
        }, {
          type: Array,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_NG_VALUE_ACCESSOR]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
          }]
        }];
      };

      _FormControlName.propDecorators = {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['formControlName']
        }],
        isDisabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['disabled']
        }],
        model: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngModel']
        }],
        update: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
          args: ['ngModelChange']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_FormControlName, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[formControlName]',
            providers: [controlNameBinding]
          }]
        }], function () {
          return [{
            type: _ControlContainer,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.SkipSelf
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_ASYNC_VALIDATORS]
            }]
          }, {
            type: Array,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Self
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_NG_VALUE_ACCESSOR]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [NG_MODEL_WITH_FORM_CONTROL_WARNING]
            }]
          }];
        }, {
          update: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output,
            args: ['ngModelChange']
          }],
          isDisabled: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['disabled']
          }],
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['formControlName']
          }],
          model: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngModel']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _SelectControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString(id, value) {
        if (id == null) return "".concat(value);
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId(valueString) {
        return valueString.split(':')[0];
      }
      /**
       * @description
       * The `ControlValueAccessor` for writing select control values and listening to select control
       * changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @usageNotes
       *
       * ### Using select controls in a reactive form
       *
       * The following examples show how to use a select control in a reactive form.
       *
       * {@example forms/ts/reactiveSelectControl/reactive_select_control_example.ts region='Component'}
       *
       * ### Using select controls in a template-driven form
       *
       * To use a select in a template-driven form, simply add an `ngModel` and a `name`
       * attribute to the main `<select>` tag.
       *
       * {@example forms/ts/selectControl/select_control_example.ts region='Component'}
       *
       * ### Customizing option selection
       *
       * Angular uses object identity to select option. It's possible for the identities of items
       * to change while the data does not. This can happen, for example, if the items are produced
       * from an RPC to the server, and that RPC is re-run. Even if the data hasn't changed, the
       * second response will produce objects with different identities.
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * `compareWith` takes a **function** which has two arguments: `option1` and `option2`.
       * If `compareWith` is given, Angular selects option by the return value of the function.
       *
       * ```ts
       * const selectedCountriesControl = new FormControl();
       * ```
       *
       * ```
       * <select [compareWith]="compareFn"  [formControl]="selectedCountriesControl">
       *     <option *ngFor="let country of countries" [ngValue]="country">
       *         {{country.name}}
       *     </option>
       * </select>
       *
       * compareFn(c1: Country, c2: Country): boolean {
       *     return c1 && c2 ? c1.id === c2.id : c1 === c2;
       * }
       * ```
       *
       * **Note:** We listen to the 'change' event because 'input' events aren't fired
       * for selects in IE, see:
       * https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event#browser_compatibility
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _SelectControlValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA5) {
        _inherits(_SelectControlValueAccessor, _BuiltInControlValueA5);

        var _super23 = _createSuper(_SelectControlValueAccessor);

        function _SelectControlValueAccessor() {
          var _this36;

          _classCallCheck(this, _SelectControlValueAccessor);

          _this36 = _super23.apply(this, arguments);
          /** @internal */

          _this36._optionMap = new Map();
          /** @internal */

          _this36._idCounter = 0;
          _this36._compareWith = Object.is;
          return _this36;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(_SelectControlValueAccessor, [{
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
          /**
           * Sets the "value" property on the input element. The "selectedIndex"
           * property is also set if an ID is provided on the option element.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;

            var id = this._getOptionId(value);

            if (id == null) {
              this.setProperty('selectedIndex', -1);
            }

            var valueString = _buildValueString(id, value);

            this.setProperty('value', valueString);
          }
          /**
           * Registers a function called when the control value changes.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this37 = this;

            this.onChange = function (valueString) {
              _this37.value = _this37._getOptionValue(valueString);
              fn(_this37.value);
            };
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption() {
            return (this._idCounter++).toString();
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i3 = 0, _Array$from = Array.from(this._optionMap.keys()); _i3 < _Array$from.length; _i3++) {
              var id = _Array$from[_i3];
              if (this._compareWith(this._optionMap.get(id), value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id) : valueString;
          }
        }]);

        return _SelectControlValueAccessor;
      }(BuiltInControlValueAccessor);

      _SelectControlValueAccessor.??fac = /*@__PURE__*/function () {
        var ??SelectControlValueAccessor_BaseFactory;
        return function SelectControlValueAccessor_Factory(t) {
          return (??SelectControlValueAccessor_BaseFactory || (??SelectControlValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_SelectControlValueAccessor)))(t || _SelectControlValueAccessor);
        };
      }();

      _SelectControlValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _SelectControlValueAccessor,
        selectors: [["select", "formControlName", "", 3, "multiple", ""], ["select", "formControl", "", 3, "multiple", ""], ["select", "ngModel", "", 3, "multiple", ""]],
        hostBindings: function SelectControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function SelectControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target.value);
            })("blur", function SelectControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([SELECT_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });
      _SelectControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_SelectControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'select:not([multiple])[formControlName],select:not([multiple])[formControl],select:not([multiple])[ngModel]',
            host: {
              '(change)': 'onChange($event.target.value)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_VALUE_ACCESSOR]
          }]
        }], null, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _NgSelectOption = /*#__PURE__*/function () {
        function _NgSelectOption(_element, _renderer, _select) {
          _classCallCheck(this, _NgSelectOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;
          if (this._select) this.id = this._select._registerOption();
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(_NgSelectOption, [{
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;

            this._select._optionMap.set(this.id, value);

            this._setElementValue(_buildValueString(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            this._setElementValue(value);

            if (this._select) this._select.writeValue(this._select.value);
          }
          /** @internal */

        }, {
          key: "_setElementValue",
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }]);

        return _NgSelectOption;
      }();

      _NgSelectOption.??fac = function NgSelectOption_Factory(t) {
        return new (t || _NgSelectOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_SelectControlValueAccessor, 9));
      };

      _NgSelectOption.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _NgSelectOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      _NgSelectOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _SelectControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }];
      };

      _NgSelectOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['value']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_NgSelectOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _SelectControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['value']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SELECT_MULTIPLE_VALUE_ACCESSOR = {
        provide: _NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _SelectMultipleControlValueAccessor;
        }),
        multi: true
      };

      function _buildValueString$1(id, value) {
        if (id == null) return "".concat(value);
        if (typeof value === 'string') value = "'".concat(value, "'");
        if (value && typeof value === 'object') value = 'Object';
        return "".concat(id, ": ").concat(value).slice(0, 50);
      }

      function _extractId$1(valueString) {
        return valueString.split(':')[0];
      }
      /** Mock interface for HTMLCollection */


      var HTMLCollection = function HTMLCollection() {
        _classCallCheck(this, HTMLCollection);
      };
      /**
       * @description
       * The `ControlValueAccessor` for writing multi-select control values and listening to multi-select
       * control changes. The value accessor is used by the `FormControlDirective`, `FormControlName`, and
       * `NgModel` directives.
       *
       * @see `SelectControlValueAccessor`
       *
       * @usageNotes
       *
       * ### Using a multi-select control
       *
       * The follow example shows you how to use a multi-select control with a reactive form.
       *
       * ```ts
       * const countryControl = new FormControl();
       * ```
       *
       * ```
       * <select multiple name="countries" [formControl]="countryControl">
       *   <option *ngFor="let country of countries" [ngValue]="country">
       *     {{ country.name }}
       *   </option>
       * </select>
       * ```
       *
       * ### Customizing option selection
       *
       * To customize the default option comparison algorithm, `<select>` supports `compareWith` input.
       * See the `SelectControlValueAccessor` for usage.
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _SelectMultipleControlValueAccessor = /*#__PURE__*/function (_BuiltInControlValueA6) {
        _inherits(_SelectMultipleControlValueAccessor, _BuiltInControlValueA6);

        var _super24 = _createSuper(_SelectMultipleControlValueAccessor);

        function _SelectMultipleControlValueAccessor() {
          var _this38;

          _classCallCheck(this, _SelectMultipleControlValueAccessor);

          _this38 = _super24.apply(this, arguments);
          /** @internal */

          _this38._optionMap = new Map();
          /** @internal */

          _this38._idCounter = 0;
          _this38._compareWith = Object.is;
          return _this38;
        }
        /**
         * @description
         * Tracks the option comparison algorithm for tracking identities when
         * checking for changes.
         */


        _createClass(_SelectMultipleControlValueAccessor, [{
          key: "compareWith",
          set: function set(fn) {
            if (typeof fn !== 'function' && (typeof ngDevMode === 'undefined' || ngDevMode)) {
              throw new Error("compareWith must be a function, but received ".concat(JSON.stringify(fn)));
            }

            this._compareWith = fn;
          }
          /**
           * Sets the "value" property on one or of more of the select's options.
           * @nodoc
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            var _this39 = this;

            this.value = value;
            var optionSelectedStateSetter;

            if (Array.isArray(value)) {
              // convert values to ids
              var ids = value.map(function (v) {
                return _this39._getOptionId(v);
              });

              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(ids.indexOf(o.toString()) > -1);
              };
            } else {
              optionSelectedStateSetter = function optionSelectedStateSetter(opt, o) {
                opt._setSelected(false);
              };
            }

            this._optionMap.forEach(optionSelectedStateSetter);
          }
          /**
           * Registers a function called when the control value changes
           * and writes an array of the selected options.
           * @nodoc
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            var _this40 = this;

            this.onChange = function (_) {
              var selected = [];

              if (_.selectedOptions !== undefined) {
                var options = _.selectedOptions;

                for (var i = 0; i < options.length; i++) {
                  var opt = options.item(i);

                  var val = _this40._getOptionValue(opt.value);

                  selected.push(val);
                }
              } // Degrade on IE
              else {
                  var _options = _.options;

                  for (var _i4 = 0; _i4 < _options.length; _i4++) {
                    var _opt = _options.item(_i4);

                    if (_opt.selected) {
                      var _val = _this40._getOptionValue(_opt.value);

                      selected.push(_val);
                    }
                  }
                }

              _this40.value = selected;
              fn(selected);
            };
          }
          /** @internal */

        }, {
          key: "_registerOption",
          value: function _registerOption(value) {
            var id = (this._idCounter++).toString();

            this._optionMap.set(id, value);

            return id;
          }
          /** @internal */

        }, {
          key: "_getOptionId",
          value: function _getOptionId(value) {
            for (var _i5 = 0, _Array$from2 = Array.from(this._optionMap.keys()); _i5 < _Array$from2.length; _i5++) {
              var id = _Array$from2[_i5];
              if (this._compareWith(this._optionMap.get(id)._value, value)) return id;
            }

            return null;
          }
          /** @internal */

        }, {
          key: "_getOptionValue",
          value: function _getOptionValue(valueString) {
            var id = _extractId$1(valueString);

            return this._optionMap.has(id) ? this._optionMap.get(id)._value : valueString;
          }
        }]);

        return _SelectMultipleControlValueAccessor;
      }(BuiltInControlValueAccessor);

      _SelectMultipleControlValueAccessor.??fac = /*@__PURE__*/function () {
        var ??SelectMultipleControlValueAccessor_BaseFactory;
        return function SelectMultipleControlValueAccessor_Factory(t) {
          return (??SelectMultipleControlValueAccessor_BaseFactory || (??SelectMultipleControlValueAccessor_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_SelectMultipleControlValueAccessor)))(t || _SelectMultipleControlValueAccessor);
        };
      }();

      _SelectMultipleControlValueAccessor.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _SelectMultipleControlValueAccessor,
        selectors: [["select", "multiple", "", "formControlName", ""], ["select", "multiple", "", "formControl", ""], ["select", "multiple", "", "ngModel", ""]],
        hostBindings: function SelectMultipleControlValueAccessor_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("change", function SelectMultipleControlValueAccessor_change_HostBindingHandler($event) {
              return ctx.onChange($event.target);
            })("blur", function SelectMultipleControlValueAccessor_blur_HostBindingHandler() {
              return ctx.onTouched();
            });
          }
        },
        inputs: {
          compareWith: "compareWith"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([SELECT_MULTIPLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });
      _SelectMultipleControlValueAccessor.propDecorators = {
        compareWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_SelectMultipleControlValueAccessor, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'select[multiple][formControlName],select[multiple][formControl],select[multiple][ngModel]',
            host: {
              '(change)': 'onChange($event.target)',
              '(blur)': 'onTouched()'
            },
            providers: [SELECT_MULTIPLE_VALUE_ACCESSOR]
          }]
        }], null, {
          compareWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Marks `<option>` as dynamic, so Angular can be notified when options change.
       *
       * @see `SelectMultipleControlValueAccessor`
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */


      var _??NgSelectMultipleOption = /*#__PURE__*/function () {
        function _??NgSelectMultipleOption(_element, _renderer, _select) {
          _classCallCheck(this, _??NgSelectMultipleOption);

          this._element = _element;
          this._renderer = _renderer;
          this._select = _select;

          if (this._select) {
            this.id = this._select._registerOption(this);
          }
        }
        /**
         * @description
         * Tracks the value bound to the option element. Unlike the value binding,
         * ngValue supports binding to objects.
         */


        _createClass(_??NgSelectMultipleOption, [{
          key: "ngValue",
          set: function set(value) {
            if (this._select == null) return;
            this._value = value;

            this._setElementValue(_buildValueString$1(this.id, value));

            this._select.writeValue(this._select.value);
          }
          /**
           * @description
           * Tracks simple string values bound to the option element.
           * For objects, use the `ngValue` input binding.
           */

        }, {
          key: "value",
          set: function set(value) {
            if (this._select) {
              this._value = value;

              this._setElementValue(_buildValueString$1(this.id, value));

              this._select.writeValue(this._select.value);
            } else {
              this._setElementValue(value);
            }
          }
          /** @internal */

        }, {
          key: "_setElementValue",
          value: function _setElementValue(value) {
            this._renderer.setProperty(this._element.nativeElement, 'value', value);
          }
          /** @internal */

        }, {
          key: "_setSelected",
          value: function _setSelected(selected) {
            this._renderer.setProperty(this._element.nativeElement, 'selected', selected);
          }
          /** @nodoc */

        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            if (this._select) {
              this._select._optionMap["delete"](this.id);

              this._select.writeValue(this._select.value);
            }
          }
        }]);

        return _??NgSelectMultipleOption;
      }();

      _??NgSelectMultipleOption.??fac = function ??NgSelectMultipleOption_Factory(t) {
        return new (t || _??NgSelectMultipleOption)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_SelectMultipleControlValueAccessor, 9));
      };

      _??NgSelectMultipleOption.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _??NgSelectMultipleOption,
        selectors: [["option"]],
        inputs: {
          ngValue: "ngValue",
          value: "value"
        }
      });

      _??NgSelectMultipleOption.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
        }, {
          type: _SelectMultipleControlValueAccessor,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
          }]
        }];
      };

      _??NgSelectMultipleOption.propDecorators = {
        ngValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['ngValue']
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['value']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_??NgSelectMultipleOption, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'option'
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Renderer2
          }, {
            type: _SelectMultipleControlValueAccessor,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Host
            }]
          }];
        }, {
          ngValue: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['ngValue']
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['value']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * A base class for Validator-based Directives. The class contains common logic shared across such
       * Directives.
       *
       * For internal use only, this class is not intended for use outside of the Forms package.
       */


      var AbstractValidatorDirective = /*#__PURE__*/function () {
        function AbstractValidatorDirective() {
          _classCallCheck(this, AbstractValidatorDirective);

          this._validator = _nullValidator;
        }
        /**
         * Helper function invoked from child classes to process changes (from `ngOnChanges` hook).
         * @nodoc
         */


        _createClass(AbstractValidatorDirective, [{
          key: "handleChanges",
          value: function handleChanges(changes) {
            if (this.inputName in changes) {
              var input = this.normalizeInput(changes[this.inputName].currentValue);
              this._validator = this.createValidator(input);

              if (this._onChange) {
                this._onChange();
              }
            }
          }
          /** @nodoc */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._validator(control);
          }
          /** @nodoc */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }]);

        return AbstractValidatorDirective;
      }();

      AbstractValidatorDirective.??fac = function AbstractValidatorDirective_Factory(t) {
        return new (t || AbstractValidatorDirective)();
      };

      AbstractValidatorDirective.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: AbstractValidatorDirective
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AbstractValidatorDirective, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive
        }], function () {
          return [];
        }, null);
      })();
      /**
       * @description
       * Provider which adds `MaxValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MAX_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MaxValidator;
        }),
        multi: true
      };
      /**
       * A directive which installs the {@link MaxValidator} for any `formControlName`,
       * `formControl`, or control with `ngModel` that also has a `max` attribute.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a max validator
       *
       * The following example shows how to add a max validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input type="number" ngModel max="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _MaxValidator = /*#__PURE__*/function (_AbstractValidatorDir) {
        _inherits(_MaxValidator, _AbstractValidatorDir);

        var _super25 = _createSuper(_MaxValidator);

        function _MaxValidator() {
          var _this41;

          _classCallCheck(this, _MaxValidator);

          _this41 = _super25.apply(this, arguments);
          /** @internal */

          _this41.inputName = 'max';
          /** @internal */

          _this41.normalizeInput = function (input) {
            return parseFloat(input);
          };
          /** @internal */


          _this41.createValidator = function (max) {
            return maxValidator(max);
          };

          return _this41;
        }
        /**
         * Declare `ngOnChanges` lifecycle hook at the main directive level (vs keeping it in base class)
         * to avoid differences in handling inheritance of lifecycle hooks between Ivy and ViewEngine in
         * AOT mode. This could be refactored once ViewEngine is removed.
         * @nodoc
         */


        _createClass(_MaxValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.handleChanges(changes);
          }
        }]);

        return _MaxValidator;
      }(AbstractValidatorDirective);

      _MaxValidator.??fac = /*@__PURE__*/function () {
        var ??MaxValidator_BaseFactory;
        return function MaxValidator_Factory(t) {
          return (??MaxValidator_BaseFactory || (??MaxValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_MaxValidator)))(t || _MaxValidator);
        };
      }();

      _MaxValidator.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _MaxValidator,
        selectors: [["input", "type", "number", "max", "", "formControlName", ""], ["input", "type", "number", "max", "", "formControl", ""], ["input", "type", "number", "max", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MaxValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            var tmp_b_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("max", (tmp_b_0 = ctx.max) !== null && tmp_b_0 !== undefined ? tmp_b_0 : null);
          }
        },
        inputs: {
          max: "max"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([MAX_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });
      _MaxValidator.propDecorators = {
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_MaxValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=number][max][formControlName],input[type=number][max][formControl],input[type=number][max][ngModel]',
            providers: [MAX_VALIDATOR],
            host: {
              '[attr.max]': 'max ?? null'
            }
          }]
        }], null, {
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MinValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MIN_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MinValidator;
        }),
        multi: true
      };
      /**
       * A directive which installs the {@link MinValidator} for any `formControlName`,
       * `formControl`, or control with `ngModel` that also has a `min` attribute.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a min validator
       *
       * The following example shows how to add a min validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input type="number" ngModel min="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _MinValidator = /*#__PURE__*/function (_AbstractValidatorDir2) {
        _inherits(_MinValidator, _AbstractValidatorDir2);

        var _super26 = _createSuper(_MinValidator);

        function _MinValidator() {
          var _this42;

          _classCallCheck(this, _MinValidator);

          _this42 = _super26.apply(this, arguments);
          /** @internal */

          _this42.inputName = 'min';
          /** @internal */

          _this42.normalizeInput = function (input) {
            return parseFloat(input);
          };
          /** @internal */


          _this42.createValidator = function (min) {
            return minValidator(min);
          };

          return _this42;
        }
        /**
         * Declare `ngOnChanges` lifecycle hook at the main directive level (vs keeping it in base class)
         * to avoid differences in handling inheritance of lifecycle hooks between Ivy and ViewEngine in
         * AOT mode. This could be refactored once ViewEngine is removed.
         * @nodoc
         */


        _createClass(_MinValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            this.handleChanges(changes);
          }
        }]);

        return _MinValidator;
      }(AbstractValidatorDirective);

      _MinValidator.??fac = /*@__PURE__*/function () {
        var ??MinValidator_BaseFactory;
        return function MinValidator_Factory(t) {
          return (??MinValidator_BaseFactory || (??MinValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_MinValidator)))(t || _MinValidator);
        };
      }();

      _MinValidator.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _MinValidator,
        selectors: [["input", "type", "number", "min", "", "formControlName", ""], ["input", "type", "number", "min", "", "formControl", ""], ["input", "type", "number", "min", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MinValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            var tmp_b_0;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("min", (tmp_b_0 = ctx.min) !== null && tmp_b_0 !== undefined ? tmp_b_0 : null);
          }
        },
        inputs: {
          min: "min"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([MIN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });
      _MinValidator.propDecorators = {
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_MinValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=number][min][formControlName],input[type=number][min][formControl],input[type=number][min][ngModel]',
            providers: [MIN_VALIDATOR],
            host: {
              '[attr.min]': 'min ?? null'
            }
          }]
        }], null, {
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `RequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var REQUIRED_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _RequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * Provider which adds `CheckboxRequiredValidator` to the `NG_VALIDATORS` multi-provider list.
       */

      var CHECKBOX_REQUIRED_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _CheckboxRequiredValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds the `required` validator to any controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required validator using template-driven forms
       *
       * ```
       * <input name="fullName" ngModel required>
       * ```
       *
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       * @publicApi
       */

      var _RequiredValidator = /*#__PURE__*/function () {
        function _RequiredValidator() {
          _classCallCheck(this, _RequiredValidator);

          this._required = false;
        }
        /**
         * @description
         * Tracks changes to the required attribute bound to this directive.
         */


        _createClass(_RequiredValidator, [{
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = value != null && value !== false && "".concat(value) !== 'false';
            if (this._onChange) this._onChange();
          }
          /**
           * Method that validates whether the control is empty.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.required ? requiredValidator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }]);

        return _RequiredValidator;
      }();

      _RequiredValidator.??fac = function RequiredValidator_Factory(t) {
        return new (t || _RequiredValidator)();
      };

      _RequiredValidator.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _RequiredValidator,
        selectors: [["", "required", "", "formControlName", "", 3, "type", "checkbox"], ["", "required", "", "formControl", "", 3, "type", "checkbox"], ["", "required", "", "ngModel", "", 3, "type", "checkbox"]],
        hostVars: 1,
        hostBindings: function RequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("required", ctx.required ? "" : null);
          }
        },
        inputs: {
          required: "required"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([REQUIRED_VALIDATOR])]
      });
      _RequiredValidator.propDecorators = {
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_RequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: ':not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]',
            providers: [REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], function () {
          return [];
        }, {
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * A Directive that adds the `required` validator to checkbox controls marked with the
       * `required` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a required checkbox validator using template-driven forms
       *
       * The following example shows how to add a checkbox required validator to an input attached to an
       * ngModel binding.
       *
       * ```
       * <input type="checkbox" name="active" ngModel required>
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */


      var _CheckboxRequiredValidator = /*#__PURE__*/function (_RequiredValidator2) {
        _inherits(_CheckboxRequiredValidator, _RequiredValidator2);

        var _super27 = _createSuper(_CheckboxRequiredValidator);

        function _CheckboxRequiredValidator() {
          _classCallCheck(this, _CheckboxRequiredValidator);

          return _super27.apply(this, arguments);
        }

        _createClass(_CheckboxRequiredValidator, [{
          key: "validate",
          value:
          /**
           * Method that validates whether or not the checkbox has been checked.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */
          function validate(control) {
            return this.required ? requiredTrueValidator(control) : null;
          }
        }]);

        return _CheckboxRequiredValidator;
      }(_RequiredValidator);

      _CheckboxRequiredValidator.??fac = /*@__PURE__*/function () {
        var ??CheckboxRequiredValidator_BaseFactory;
        return function CheckboxRequiredValidator_Factory(t) {
          return (??CheckboxRequiredValidator_BaseFactory || (??CheckboxRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????getInheritedFactory"](_CheckboxRequiredValidator)))(t || _CheckboxRequiredValidator);
        };
      }();

      _CheckboxRequiredValidator.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _CheckboxRequiredValidator,
        selectors: [["input", "type", "checkbox", "required", "", "formControlName", ""], ["input", "type", "checkbox", "required", "", "formControl", ""], ["input", "type", "checkbox", "required", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function CheckboxRequiredValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("required", ctx.required ? "" : null);
          }
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([CHECKBOX_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????InheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_CheckboxRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: 'input[type=checkbox][required][formControlName],input[type=checkbox][required][formControl],input[type=checkbox][required][ngModel]',
            providers: [CHECKBOX_REQUIRED_VALIDATOR],
            host: {
              '[attr.required]': 'required ? "" : null'
            }
          }]
        }], null, null);
      })();
      /**
       * @description
       * Provider which adds `EmailValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var EMAIL_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _EmailValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds the `email` validator to controls marked with the
       * `email` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding an email validator
       *
       * The following example shows how to add an email validator to an input attached to an ngModel
       * binding.
       *
       * ```
       * <input type="email" name="email" ngModel email>
       * <input type="email" name="email" ngModel email="true">
       * <input type="email" name="email" ngModel [email]="true">
       * ```
       *
       * @publicApi
       * @ngModule FormsModule
       * @ngModule ReactiveFormsModule
       */

      var _EmailValidator = /*#__PURE__*/function () {
        function _EmailValidator() {
          _classCallCheck(this, _EmailValidator);

          this._enabled = false;
        }
        /**
         * @description
         * Tracks changes to the email attribute bound to this directive.
         */


        _createClass(_EmailValidator, [{
          key: "email",
          set: function set(value) {
            this._enabled = value === '' || value === true || value === 'true';
            if (this._onChange) this._onChange();
          }
          /**
           * Method that validates whether an email address is valid.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._enabled ? emailValidator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }]);

        return _EmailValidator;
      }();

      _EmailValidator.??fac = function EmailValidator_Factory(t) {
        return new (t || _EmailValidator)();
      };

      _EmailValidator.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _EmailValidator,
        selectors: [["", "email", "", "formControlName", ""], ["", "email", "", "formControl", ""], ["", "email", "", "ngModel", ""]],
        inputs: {
          email: "email"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([EMAIL_VALIDATOR])]
      });
      _EmailValidator.propDecorators = {
        email: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_EmailValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[email][formControlName],[email][formControl],[email][ngModel]',
            providers: [EMAIL_VALIDATOR]
          }]
        }], function () {
          return [];
        }, {
          email: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MinLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MIN_LENGTH_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MinLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds minimum length validation to controls marked with the
       * `minlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a minimum length validator
       *
       * The following example shows how to add a minimum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel minlength="4">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _MinLengthValidator = /*#__PURE__*/function () {
        function _MinLengthValidator() {
          _classCallCheck(this, _MinLengthValidator);

          this._validator = _nullValidator;
        }
        /** @nodoc */


        _createClass(_MinLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('minlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value meets a minimum length requirement.
           * Returns the validation result if enabled, otherwise null.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.minlength == null ? null : this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = minLengthValidator(typeof this.minlength === 'number' ? this.minlength : parseInt(this.minlength, 10));
          }
        }]);

        return _MinLengthValidator;
      }();

      _MinLengthValidator.??fac = function MinLengthValidator_Factory(t) {
        return new (t || _MinLengthValidator)();
      };

      _MinLengthValidator.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _MinLengthValidator,
        selectors: [["", "minlength", "", "formControlName", ""], ["", "minlength", "", "formControl", ""], ["", "minlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MinLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("minlength", ctx.minlength ? ctx.minlength : null);
          }
        },
        inputs: {
          minlength: "minlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([MIN_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });
      _MinLengthValidator.propDecorators = {
        minlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_MinLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[minlength][formControlName],[minlength][formControl],[minlength][ngModel]',
            providers: [MIN_LENGTH_VALIDATOR],
            host: {
              '[attr.minlength]': 'minlength ? minlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          minlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `MaxLengthValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var MAX_LENGTH_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MaxLengthValidator;
        }),
        multi: true
      };
      /**
       * A directive that adds max length validation to controls marked with the
       * `maxlength` attribute. The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a maximum length validator
       *
       * The following example shows how to add a maximum length validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel maxlength="25">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _MaxLengthValidator = /*#__PURE__*/function () {
        function _MaxLengthValidator() {
          _classCallCheck(this, _MaxLengthValidator);

          this._validator = _nullValidator;
        }
        /** @nodoc */


        _createClass(_MaxLengthValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('maxlength' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value exceeds the maximum length requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this.maxlength != null ? this._validator(control) : null;
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = maxLengthValidator(typeof this.maxlength === 'number' ? this.maxlength : parseInt(this.maxlength, 10));
          }
        }]);

        return _MaxLengthValidator;
      }();

      _MaxLengthValidator.??fac = function MaxLengthValidator_Factory(t) {
        return new (t || _MaxLengthValidator)();
      };

      _MaxLengthValidator.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _MaxLengthValidator,
        selectors: [["", "maxlength", "", "formControlName", ""], ["", "maxlength", "", "formControl", ""], ["", "maxlength", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function MaxLengthValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("maxlength", ctx.maxlength ? ctx.maxlength : null);
          }
        },
        inputs: {
          maxlength: "maxlength"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([MAX_LENGTH_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });
      _MaxLengthValidator.propDecorators = {
        maxlength: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_MaxLengthValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]',
            providers: [MAX_LENGTH_VALIDATOR],
            host: {
              '[attr.maxlength]': 'maxlength ? maxlength : null'
            }
          }]
        }], function () {
          return [];
        }, {
          maxlength: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @description
       * Provider which adds `PatternValidator` to the `NG_VALIDATORS` multi-provider list.
       */


      var PATTERN_VALIDATOR = {
        provide: _NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _PatternValidator;
        }),
        multi: true
      };
      /**
       * @description
       * A directive that adds regex pattern validation to controls marked with the
       * `pattern` attribute. The regex must match the entire control value.
       * The directive is provided with the `NG_VALIDATORS` multi-provider list.
       *
       * @see [Form Validation](guide/form-validation)
       *
       * @usageNotes
       *
       * ### Adding a pattern validator
       *
       * The following example shows how to add a pattern validator to an input attached to an
       * ngModel binding.
       *
       * ```html
       * <input name="firstName" ngModel pattern="[a-zA-Z ]*">
       * ```
       *
       * @ngModule ReactiveFormsModule
       * @ngModule FormsModule
       * @publicApi
       */

      var _PatternValidator = /*#__PURE__*/function () {
        function _PatternValidator() {
          _classCallCheck(this, _PatternValidator);

          this._validator = _nullValidator;
        }
        /** @nodoc */


        _createClass(_PatternValidator, [{
          key: "ngOnChanges",
          value: function ngOnChanges(changes) {
            if ('pattern' in changes) {
              this._createValidator();

              if (this._onChange) this._onChange();
            }
          }
          /**
           * Method that validates whether the value matches the pattern requirement.
           * @nodoc
           */

        }, {
          key: "validate",
          value: function validate(control) {
            return this._validator(control);
          }
          /**
           * Registers a callback function to call when the validator inputs change.
           * @nodoc
           */

        }, {
          key: "registerOnValidatorChange",
          value: function registerOnValidatorChange(fn) {
            this._onChange = fn;
          }
        }, {
          key: "_createValidator",
          value: function _createValidator() {
            this._validator = patternValidator(this.pattern);
          }
        }]);

        return _PatternValidator;
      }();

      _PatternValidator.??fac = function PatternValidator_Factory(t) {
        return new (t || _PatternValidator)();
      };

      _PatternValidator.??dir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineDirective"]({
        type: _PatternValidator,
        selectors: [["", "pattern", "", "formControlName", ""], ["", "pattern", "", "formControl", ""], ["", "pattern", "", "ngModel", ""]],
        hostVars: 1,
        hostBindings: function PatternValidator_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("pattern", ctx.pattern ? ctx.pattern : null);
          }
        },
        inputs: {
          pattern: "pattern"
        },
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["????ProvidersFeature"]([PATTERN_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????NgOnChangesFeature"]]
      });
      _PatternValidator.propDecorators = {
        pattern: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_PatternValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: '[pattern][formControlName],[pattern][formControl],[pattern][ngModel]',
            providers: [PATTERN_VALIDATOR],
            host: {
              '[attr.pattern]': 'pattern ? pattern : null'
            }
          }]
        }], function () {
          return [];
        }, {
          pattern: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var SHARED_FORM_DIRECTIVES = [_??NgNoValidate, _NgSelectOption, _??NgSelectMultipleOption, _DefaultValueAccessor, _NumberValueAccessor, _RangeValueAccessor, _CheckboxControlValueAccessor, _SelectControlValueAccessor, _SelectMultipleControlValueAccessor, _RadioControlValueAccessor, _NgControlStatus, _NgControlStatusGroup, _RequiredValidator, _MinLengthValidator, _MaxLengthValidator, _PatternValidator, _CheckboxRequiredValidator, _EmailValidator, _MinValidator, _MaxValidator];
      var TEMPLATE_DRIVEN_DIRECTIVES = [_NgModel, _NgModelGroup, _NgForm];
      var REACTIVE_DRIVEN_DIRECTIVES = [_FormControlDirective, _FormGroupDirective, _FormControlName, _FormGroupName, _FormArrayName];
      /**
       * Internal module used for sharing directives between FormsModule and ReactiveFormsModule
       */

      var _??InternalFormsSharedModule = function _??InternalFormsSharedModule() {
        _classCallCheck(this, _??InternalFormsSharedModule);
      };

      _??InternalFormsSharedModule.??fac = function ??InternalFormsSharedModule_Factory(t) {
        return new (t || _??InternalFormsSharedModule)();
      };

      _??InternalFormsSharedModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: _??InternalFormsSharedModule
      });
      _??InternalFormsSharedModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [[RadioControlRegistryModule]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_??InternalFormsSharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: SHARED_FORM_DIRECTIVES,
            imports: [RadioControlRegistryModule],
            exports: SHARED_FORM_DIRECTIVES
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](_??InternalFormsSharedModule, {
          declarations: [_??NgNoValidate, _NgSelectOption, _??NgSelectMultipleOption, _DefaultValueAccessor, _NumberValueAccessor, _RangeValueAccessor, _CheckboxControlValueAccessor, _SelectControlValueAccessor, _SelectMultipleControlValueAccessor, _RadioControlValueAccessor, _NgControlStatus, _NgControlStatusGroup, _RequiredValidator, _MinLengthValidator, _MaxLengthValidator, _PatternValidator, _CheckboxRequiredValidator, _EmailValidator, _MinValidator, _MaxValidator],
          imports: [RadioControlRegistryModule],
          exports: [_??NgNoValidate, _NgSelectOption, _??NgSelectMultipleOption, _DefaultValueAccessor, _NumberValueAccessor, _RangeValueAccessor, _CheckboxControlValueAccessor, _SelectControlValueAccessor, _SelectMultipleControlValueAccessor, _RadioControlValueAccessor, _NgControlStatus, _NgControlStatusGroup, _RequiredValidator, _MinLengthValidator, _MaxLengthValidator, _PatternValidator, _CheckboxRequiredValidator, _EmailValidator, _MinValidator, _MaxValidator]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Exports the required providers and directives for template-driven forms,
       * making them available for import by NgModules that import this module.
       *
       * Providers associated with this module:
       * * `RadioControlRegistry`
       *
       * @see [Forms Overview](/guide/forms-overview)
       * @see [Template-driven Forms Guide](/guide/forms)
       *
       * @publicApi
       */


      var _FormsModule = function _FormsModule() {
        _classCallCheck(this, _FormsModule);
      };

      _FormsModule.??fac = function FormsModule_Factory(t) {
        return new (t || _FormsModule)();
      };

      _FormsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: _FormsModule
      });
      _FormsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [_??InternalFormsSharedModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_FormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: TEMPLATE_DRIVEN_DIRECTIVES,
            exports: [_??InternalFormsSharedModule, TEMPLATE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](_FormsModule, {
          declarations: [_NgModel, _NgModelGroup, _NgForm],
          exports: [_??InternalFormsSharedModule, _NgModel, _NgModelGroup, _NgForm]
        });
      })();
      /**
       * Exports the required infrastructure and directives for reactive forms,
       * making them available for import by NgModules that import this module.
       *
       * Providers associated with this module:
       * * `FormBuilder`
       * * `RadioControlRegistry`
       *
       * @see [Forms Overview](guide/forms-overview)
       * @see [Reactive Forms Guide](guide/reactive-forms)
       *
       * @publicApi
       */


      var _ReactiveFormsModule = /*#__PURE__*/function () {
        function _ReactiveFormsModule() {
          _classCallCheck(this, _ReactiveFormsModule);
        }

        _createClass(_ReactiveFormsModule, null, [{
          key: "withConfig",
          value:
          /**
           * @description
           * Provides options for configuring the reactive forms module.
           *
           * @param opts An object of configuration options
           * * `warnOnNgModelWithFormControl` Configures when to emit a warning when an `ngModel`
           * binding is used with reactive form directives.
           */
          function withConfig(opts) {
            return {
              ngModule: _ReactiveFormsModule,
              providers: [{
                provide: NG_MODEL_WITH_FORM_CONTROL_WARNING,
                useValue: opts.warnOnNgModelWithFormControl
              }]
            };
          }
        }]);

        return _ReactiveFormsModule;
      }();

      _ReactiveFormsModule.??fac = function ReactiveFormsModule_Factory(t) {
        return new (t || _ReactiveFormsModule)();
      };

      _ReactiveFormsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({
        type: _ReactiveFormsModule
      });
      _ReactiveFormsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({
        imports: [_??InternalFormsSharedModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_ReactiveFormsModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            declarations: [REACTIVE_DRIVEN_DIRECTIVES],
            exports: [_??InternalFormsSharedModule, REACTIVE_DRIVEN_DIRECTIVES]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](_ReactiveFormsModule, {
          declarations: [_FormControlDirective, _FormGroupDirective, _FormControlName, _FormGroupName, _FormArrayName],
          exports: [_??InternalFormsSharedModule, _FormControlDirective, _FormGroupDirective, _FormControlName, _FormGroupName, _FormArrayName]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      function isAbstractControlOptions(options) {
        return options.asyncValidators !== undefined || options.validators !== undefined || options.updateOn !== undefined;
      }
      /**
       * @description
       * Creates an `AbstractControl` from a user-specified configuration.
       *
       * The `FormBuilder` provides syntactic sugar that shortens creating instances of a `FormControl`,
       * `FormGroup`, or `FormArray`. It reduces the amount of boilerplate needed to build complex
       * forms.
       *
       * @see [Reactive Forms Guide](/guide/reactive-forms)
       *
       * @publicApi
       */


      var _FormBuilder = /*#__PURE__*/function () {
        function _FormBuilder() {
          _classCallCheck(this, _FormBuilder);
        }

        _createClass(_FormBuilder, [{
          key: "group",
          value: function group(controlsConfig) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

            var controls = this._reduceControls(controlsConfig);

            var validators = null;
            var asyncValidators = null;
            var updateOn = undefined;

            if (options != null) {
              if (isAbstractControlOptions(options)) {
                // `options` are `AbstractControlOptions`
                validators = options.validators != null ? options.validators : null;
                asyncValidators = options.asyncValidators != null ? options.asyncValidators : null;
                updateOn = options.updateOn != null ? options.updateOn : undefined;
              } else {
                // `options` are legacy form group options
                validators = options['validator'] != null ? options['validator'] : null;
                asyncValidators = options['asyncValidator'] != null ? options['asyncValidator'] : null;
              }
            }

            return new _FormGroup(controls, {
              asyncValidators: asyncValidators,
              updateOn: updateOn,
              validators: validators
            });
          }
          /**
           * @description
           * Construct a new `FormControl` with the given state, validators and options.
           *
           * @param formState Initializes the control with an initial state value, or
           * with an object that contains both a value and a disabled status.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           *
           * @usageNotes
           *
           * ### Initialize a control as disabled
           *
           * The following example returns a control with an initial value in a disabled state.
           *
           * <code-example path="forms/ts/formBuilder/form_builder_example.ts" region="disabled-control">
           * </code-example>
           */

        }, {
          key: "control",
          value: function control(formState, validatorOrOpts, asyncValidator) {
            return new _FormControl(formState, validatorOrOpts, asyncValidator);
          }
          /**
           * Constructs a new `FormArray` from the given array of configurations,
           * validators and options.
           *
           * @param controlsConfig An array of child controls or control configs. Each
           * child control is given an index when it is registered.
           *
           * @param validatorOrOpts A synchronous validator function, or an array of
           * such functions, or an `AbstractControlOptions` object that contains
           * validation functions and a validation trigger.
           *
           * @param asyncValidator A single async validator or array of async validator
           * functions.
           */

        }, {
          key: "array",
          value: function array(controlsConfig, validatorOrOpts, asyncValidator) {
            var _this43 = this;

            var controls = controlsConfig.map(function (c) {
              return _this43._createControl(c);
            });
            return new _FormArray(controls, validatorOrOpts, asyncValidator);
          }
          /** @internal */

        }, {
          key: "_reduceControls",
          value: function _reduceControls(controlsConfig) {
            var _this44 = this;

            var controls = {};
            Object.keys(controlsConfig).forEach(function (controlName) {
              controls[controlName] = _this44._createControl(controlsConfig[controlName]);
            });
            return controls;
          }
          /** @internal */

        }, {
          key: "_createControl",
          value: function _createControl(controlConfig) {
            if (controlConfig instanceof _FormControl || controlConfig instanceof _FormGroup || controlConfig instanceof _FormArray) {
              return controlConfig;
            } else if (Array.isArray(controlConfig)) {
              var value = controlConfig[0];
              var validator = controlConfig.length > 1 ? controlConfig[1] : null;
              var asyncValidator = controlConfig.length > 2 ? controlConfig[2] : null;
              return this.control(value, validator, asyncValidator);
            } else {
              return this.control(controlConfig);
            }
          }
        }]);

        return _FormBuilder;
      }();

      _FormBuilder.??fac = function FormBuilder_Factory(t) {
        return new (t || _FormBuilder)();
      };

      _FormBuilder.??prov = (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"])({
        factory: function FormBuilder_Factory() {
          return new _FormBuilder();
        },
        token: _FormBuilder,
        providedIn: _ReactiveFormsModule
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](_FormBuilder, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable,
          args: [{
            providedIn: _ReactiveFormsModule
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @publicApi
       */


      var _VERSION = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.Version('12.0.4');
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // This file only reexports content of the `src` folder. Keep it that way.

      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=forms.js.map

      /***/

    },

    /***/
    5758:
    /*!********************************************************************!*\
      !*** ./node_modules/rxjs/_esm2015/internal/observable/forkJoin.js ***!
      \********************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "forkJoin": function forkJoin() {
          return (
            /* binding */
            _forkJoin
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _Observable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../Observable */
      9165);
      /* harmony import */


      var _util_isArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../util/isArray */
      9796);
      /* harmony import */


      var _operators_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../operators/map */
      8002);
      /* harmony import */


      var _util_isObject__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../util/isObject */
      1555);
      /* harmony import */


      var _from__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./from */
      9412);

      function _forkJoin() {
        for (var _len = arguments.length, sources = new Array(_len), _key = 0; _key < _len; _key++) {
          sources[_key] = arguments[_key];
        }

        if (sources.length === 1) {
          var first = sources[0];

          if ((0, _util_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(first)) {
            return forkJoinInternal(first, null);
          }

          if ((0, _util_isObject__WEBPACK_IMPORTED_MODULE_1__.isObject)(first) && Object.getPrototypeOf(first) === Object.prototype) {
            var keys = Object.keys(first);
            return forkJoinInternal(keys.map(function (key) {
              return first[key];
            }), keys);
          }
        }

        if (typeof sources[sources.length - 1] === 'function') {
          var resultSelector = sources.pop();
          sources = sources.length === 1 && (0, _util_isArray__WEBPACK_IMPORTED_MODULE_0__.isArray)(sources[0]) ? sources[0] : sources;
          return forkJoinInternal(sources, null).pipe((0, _operators_map__WEBPACK_IMPORTED_MODULE_2__.map)(function (args) {
            return resultSelector.apply(void 0, _toConsumableArray(args));
          }));
        }

        return forkJoinInternal(sources, null);
      }

      function forkJoinInternal(sources, keys) {
        return new _Observable__WEBPACK_IMPORTED_MODULE_3__.Observable(function (subscriber) {
          var len = sources.length;

          if (len === 0) {
            subscriber.complete();
            return;
          }

          var values = new Array(len);
          var completed = 0;
          var emitted = 0;

          var _loop = function _loop(i) {
            var source = (0, _from__WEBPACK_IMPORTED_MODULE_4__.from)(sources[i]);
            var hasValue = false;
            subscriber.add(source.subscribe({
              next: function next(value) {
                if (!hasValue) {
                  hasValue = true;
                  emitted++;
                }

                values[i] = value;
              },
              error: function error(err) {
                return subscriber.error(err);
              },
              complete: function complete() {
                completed++;

                if (completed === len || !hasValue) {
                  if (emitted === len) {
                    subscriber.next(keys ? keys.reduce(function (result, key, i) {
                      return result[key] = values[i], result;
                    }, {}) : values);
                  }

                  subscriber.complete();
                }
              }
            }));
          };

          for (var i = 0; i < len; i++) {
            _loop(i);
          }
        });
      } //# sourceMappingURL=forkJoin.js.map

      /***/

    },

    /***/
    3670:
    /*!****************************************************!*\
      !*** ./src/app/products/product-list.component.ts ***!
      \****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductListComponent": function ProductListComponent() {
          return (
            /* binding */
            _ProductListComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _shared_card_content_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/card-content.component */
      450);

      function ProductListComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](1, " Loading data ... ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }
      }

      function ProductListComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "app-card-content", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        }

        if (rf & 2) {
          var product_r2 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("name", product_r2.name)("description", product_r2.description);
        }
      }

      var _ProductListComponent = /*#__PURE__*/function () {
        function _ProductListComponent() {
          _classCallCheck(this, _ProductListComponent);
        }

        _createClass(_ProductListComponent, [{
          key: "trackByProduct",
          value: function trackByProduct(index, product) {
            return product.id;
          }
        }]);

        return _ProductListComponent;
      }();

      _ProductListComponent.??fac = function ProductListComponent_Factory(t) {
        return new (t || _ProductListComponent)();
      };

      _ProductListComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({
        type: _ProductListComponent,
        selectors: [["app-product-list"]],
        inputs: {
          products: "products"
        },
        decls: 3,
        vars: 3,
        consts: [[4, "ngIf"], [1, "list"], ["role", "presentation", 4, "ngFor", "ngForOf", "ngForTrackBy"], ["role", "presentation"], [1, "card"], [3, "name", "description"]],
        template: function ProductListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](0, ProductListComponent_div_0_Template, 2, 0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????template"](2, ProductListComponent_li_2_Template, 3, 2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngIf", !(ctx.products == null ? null : ctx.products.length));

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngForOf", ctx.products)("ngForTrackBy", ctx.trackByProduct);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgForOf, _shared_card_content_component__WEBPACK_IMPORTED_MODULE_0__.CardContentComponent],
        encapsulation: 2,
        changeDetection: 0
      });
      /***/
    },

    /***/
    3528:
    /*!*********************************************!*\
      !*** ./src/app/products/product.service.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductService": function ProductService() {
          return (
            /* binding */
            _ProductService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _ngrx_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ngrx/data */
      6732);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ProductService = /*#__PURE__*/function (_ngrx_data__WEBPACK_I) {
        _inherits(_ProductService, _ngrx_data__WEBPACK_I);

        var _super28 = _createSuper(_ProductService);

        function _ProductService(serviceElementsFactory) {
          _classCallCheck(this, _ProductService);

          return _super28.call(this, 'Product', serviceElementsFactory);
        }

        return _ProductService;
      }(_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceBase);

      _ProductService.??fac = function ProductService_Factory(t) {
        return new (t || _ProductService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????inject"](_ngrx_data__WEBPACK_IMPORTED_MODULE_0__.EntityCollectionServiceElementsFactory));
      };

      _ProductService.??prov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineInjectable"]({
        token: _ProductService,
        factory: _ProductService.??fac,
        providedIn: 'root'
      });
      /***/
    },

    /***/
    4532:
    /*!************************************************!*\
      !*** ./src/app/products/products.component.ts ***!
      \************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsComponent": function ProductsComponent() {
          return (
            /* binding */
            _ProductsComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _product_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./product.service */
      3528);
      /* harmony import */


      var _shared_list_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../shared/list-header.component */
      369);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _product_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./product-list.component */
      3670);

      function ProductsComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????element"](1, "app-product-list", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
        }

        if (rf & 2) {
          var products_r1 = ctx.ngIf;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("products", products_r1);
        }
      }

      var _ProductsComponent = /*#__PURE__*/function () {
        function _ProductsComponent(productService) {
          _classCallCheck(this, _ProductsComponent);

          this.productService = productService;
          this.products$ = productService.entities$;
        }

        _createClass(_ProductsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getProducts();
          }
        }, {
          key: "getProducts",
          value: function getProducts() {
            this.productService.getAll();
          }
        }]);

        return _ProductsComponent;
      }();

      _ProductsComponent.??fac = function ProductsComponent_Factory(t) {
        return new (t || _ProductsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["????directiveInject"](_product_service__WEBPACK_IMPORTED_MODULE_0__.ProductService));
      };

      _ProductsComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineComponent"]({
        type: _ProductsComponent,
        selectors: [["app-products"]],
        decls: 5,
        vars: 3,
        consts: [[1, "content-container"], ["title", "Products", 3, "refresh"], [1, "columns", "is-multiline", "is-variable"], ["class", "column is-8", 4, "ngIf"], [1, "column", "is-8"], [3, "products"]],
        template: function ProductsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](1, "app-list-header", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????listener"]("refresh", function ProductsComponent_Template_app_list_header_refresh_1_listener() {
              return ctx.getProducts();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????template"](3, ProductsComponent_div_3_Template, 2, 1, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipe"](4, "async");

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_3__["????property"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["????pipeBind1"](4, 1, ctx.products$));
          }
        },
        directives: [_shared_list_header_component__WEBPACK_IMPORTED_MODULE_1__.ListHeaderComponent, _angular_common__WEBPACK_IMPORTED_MODULE_4__.NgIf, _product_list_component__WEBPACK_IMPORTED_MODULE_2__.ProductListComponent],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.AsyncPipe],
        encapsulation: 2
      });
      /***/
    },

    /***/
    8980:
    /*!*********************************************!*\
      !*** ./src/app/products/products.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ProductsModule": function ProductsModule() {
          return (
            /* binding */
            _ProductsModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      9895);
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../shared/shared.module */
      4466);
      /* harmony import */


      var _product_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./product-list.component */
      3670);
      /* harmony import */


      var _products_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./products.component */
      4532);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var routes = [{
        path: '',
        component: _products_component__WEBPACK_IMPORTED_MODULE_2__.ProductsComponent
      }];

      var _ProductsModule = function _ProductsModule() {
        _classCallCheck(this, _ProductsModule);
      };

      _ProductsModule.??fac = function ProductsModule_Factory(t) {
        return new (t || _ProductsModule)();
      };

      _ProductsModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineNgModule"]({
        type: _ProductsModule
      });
      _ProductsModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule.forChild(routes), _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule], _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["????setNgModuleScope"](_ProductsModule, {
          declarations: [_products_component__WEBPACK_IMPORTED_MODULE_2__.ProductsComponent, _product_list_component__WEBPACK_IMPORTED_MODULE_1__.ProductListComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_0__.SharedModule],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule, _products_component__WEBPACK_IMPORTED_MODULE_2__.ProductsComponent]
        });
      })();
      /***/

    },

    /***/
    9706:
    /*!***************************************************!*\
      !*** ./src/app/shared/button-footer.component.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ButtonFooterComponent": function ButtonFooterComponent() {
          return (
            /* binding */
            _ButtonFooterComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _ButtonFooterComponent = /*#__PURE__*/function () {
        function _ButtonFooterComponent() {
          _classCallCheck(this, _ButtonFooterComponent);

          this.clicked = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ButtonFooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleClick",
          value: function handleClick() {
            this.clicked.emit(this.item);
          }
        }]);

        return _ButtonFooterComponent;
      }();

      _ButtonFooterComponent.??fac = function ButtonFooterComponent_Factory(t) {
        return new (t || _ButtonFooterComponent)();
      };

      _ButtonFooterComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ButtonFooterComponent,
        selectors: [["app-button-footer"]],
        inputs: {
          label: "label",
          className: "className",
          iconClasses: "iconClasses",
          item: "item",
          dataId: "dataId"
        },
        outputs: {
          clicked: "clicked"
        },
        decls: 4,
        vars: 5,
        consts: [["tabindex", "0", 1, "link", 3, "ngClass", "click"], [3, "ngClass"]],
        template: function ButtonFooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ButtonFooterComponent_Template_button_click_0_listener() {
              return ctx.handleClick();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "i", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.className);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????attribute"]("aria-label", ctx.label)("data-id", ctx.item.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", ctx.iconClasses);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.label);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
        encapsulation: 2
      });
      /***/
    },

    /***/
    450:
    /*!**************************************************!*\
      !*** ./src/app/shared/card-content.component.ts ***!
      \**************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "CardContentComponent": function CardContentComponent() {
          return (
            /* binding */
            _CardContentComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _CardContentComponent = /*#__PURE__*/function () {
        function _CardContentComponent() {
          _classCallCheck(this, _CardContentComponent);
        }

        _createClass(_CardContentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _CardContentComponent;
      }();

      _CardContentComponent.??fac = function CardContentComponent_Factory(t) {
        return new (t || _CardContentComponent)();
      };

      _CardContentComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _CardContentComponent,
        selectors: [["app-card-content"]],
        inputs: {
          name: "name",
          description: "description"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "card-content"], [1, "content"], [1, "name"], [1, "description"]],
        template: function CardContentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.name);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.description);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    369:
    /*!*************************************************!*\
      !*** ./src/app/shared/list-header.component.ts ***!
      \*************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ListHeaderComponent": function ListHeaderComponent() {
          return (
            /* binding */
            _ListHeaderComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var _ListHeaderComponent = /*#__PURE__*/function () {
        function _ListHeaderComponent() {
          _classCallCheck(this, _ListHeaderComponent);

          this.refresh = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
        }

        _createClass(_ListHeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "handleRefresh",
          value: function handleRefresh() {
            this.refresh.emit();
          }
        }]);

        return _ListHeaderComponent;
      }();

      _ListHeaderComponent.??fac = function ListHeaderComponent_Factory(t) {
        return new (t || _ListHeaderComponent)();
      };

      _ListHeaderComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ListHeaderComponent,
        selectors: [["app-list-header"]],
        inputs: {
          title: "title"
        },
        outputs: {
          refresh: "refresh"
        },
        decls: 6,
        vars: 1,
        consts: [[1, "content-title-group"], ["router-link", "/"], [1, "title"], ["aria-label", "refresh", 1, "button", "refresh-button", 3, "click"], ["aria-hidden", "true", 1, "fas", "fa-sync"]],
        template: function ListHeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "h2", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ListHeaderComponent_Template_button_click_4_listener() {
              return ctx.handleRefresh();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](5, "i", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate"](ctx.title);
          }
        },
        encapsulation: 2
      });
      /***/
    },

    /***/
    1086:
    /*!*******************************************!*\
      !*** ./src/app/shared/modal.component.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalComponent": function ModalComponent() {
          return (
            /* binding */
            _ModalComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      7716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      8583);

      var _c0 = function _c0(a0) {
        return {
          "is-active": a0
        };
      };

      var _ModalComponent = /*#__PURE__*/function () {
        function _ModalComponent() {
          var _this45 = this;

          _classCallCheck(this, _ModalComponent);

          this.isOpen = false;
          this.handleYes = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          this.handleNo = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();

          this.onNo = function () {
            _this45.handleNo.emit();
          };

          this.onYes = function () {
            _this45.handleYes.emit();
          };
        }

        _createClass(_ModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return _ModalComponent;
      }();

      _ModalComponent.??fac = function ModalComponent_Factory(t) {
        return new (t || _ModalComponent)();
      };

      _ModalComponent.??cmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({
        type: _ModalComponent,
        selectors: [["app-modal"]],
        inputs: {
          message: "message",
          isOpen: "isOpen"
        },
        outputs: {
          handleYes: "handleYes",
          handleNo: "handleNo"
        },
        decls: 13,
        vars: 4,
        consts: [[1, "modal", 3, "ngClass"], [1, "modal-background"], [1, "modal-card"], [1, "modal-card-head"], [1, "modal-card-title"], [1, "modal-card-body"], [1, "modal-card-foot"], [1, "button", "modal-no", 3, "click"], [1, "button", "is-primary", "modal-yes", 3, "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "header", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "p", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Confirm");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "section", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "footer", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalComponent_Template_button_click_9_listener() {
              return ctx.onNo();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "No");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function ModalComponent_Template_button_click_11_listener() {
              return ctx.onYes();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "Yes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["????pureFunction1"](2, _c0, ctx.isOpen));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["????textInterpolate1"](" ", ctx.message, " ");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.NgClass],
        encapsulation: 2
      });
      /***/
    },

    /***/
    4466:
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "SharedModule": function SharedModule() {
          return (
            /* binding */
            _SharedModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common */
      8583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _list_header_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./list-header.component */
      369);
      /* harmony import */


      var _card_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./card-content.component */
      450);
      /* harmony import */


      var _button_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./button-footer.component */
      9706);
      /* harmony import */


      var _modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./modal.component */
      1086);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      7716);

      var components = [_button_footer_component__WEBPACK_IMPORTED_MODULE_2__.ButtonFooterComponent, _card_content_component__WEBPACK_IMPORTED_MODULE_1__.CardContentComponent, _list_header_component__WEBPACK_IMPORTED_MODULE_0__.ListHeaderComponent, _modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent];

      var _SharedModule = function _SharedModule() {
        _classCallCheck(this, _SharedModule);
      };

      _SharedModule.??fac = function SharedModule_Factory(t) {
        return new (t || _SharedModule)();
      };

      _SharedModule.??mod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineNgModule"]({
        type: _SharedModule
      });
      _SharedModule.??inj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["????defineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule], _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["????setNgModuleScope"](_SharedModule, {
          declarations: [_button_footer_component__WEBPACK_IMPORTED_MODULE_2__.ButtonFooterComponent, _card_content_component__WEBPACK_IMPORTED_MODULE_1__.CardContentComponent, _list_header_component__WEBPACK_IMPORTED_MODULE_0__.ListHeaderComponent, _modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule],
          exports: [_button_footer_component__WEBPACK_IMPORTED_MODULE_2__.ButtonFooterComponent, _card_content_component__WEBPACK_IMPORTED_MODULE_1__.CardContentComponent, _list_header_component__WEBPACK_IMPORTED_MODULE_0__.ListHeaderComponent, _modal_component__WEBPACK_IMPORTED_MODULE_3__.ModalComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=src_app_products_products_module_ts-es5.js.map
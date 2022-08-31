define('zapp_user_main', ['dart_sdk', 'flutter_sdk'], (function load__zapp_user_main(dart_sdk, flutter_sdk) {
  'use strict';
  const core = dart_sdk.core;
  const async = dart_sdk.async;
  const _interceptors = dart_sdk._interceptors;
  const js = dart_sdk.js;
  const ui = dart_sdk.ui;
  const dart = dart_sdk.dart;
  const dartx = dart_sdk.dartx;
  const framework = flutter_sdk.src__widgets__framework;
  const form = flutter_sdk.src__widgets__form;
  const focus_scope = flutter_sdk.src__widgets__focus_scope;
  const app = flutter_sdk.src__material__app;
  const scaffold = flutter_sdk.src__material__scaffold;
  const app_bar = flutter_sdk.src__material__app_bar;
  const text = flutter_sdk.src__widgets__text;
  const basic = flutter_sdk.src__widgets__basic;
  const card = flutter_sdk.src__material__card;
  const rounded_rectangle_border = flutter_sdk.src__painting__rounded_rectangle_border;
  const border_radius = flutter_sdk.src__painting__border_radius;
  const edge_insets = flutter_sdk.src__painting__edge_insets;
  const flex = flutter_sdk.src__rendering__flex;
  const text_form_field = flutter_sdk.src__material__text_form_field;
  const key = flutter_sdk.src__foundation__key;
  const text_input = flutter_sdk.src__services__text_input;
  const input_decorator = flutter_sdk.src__material__input_decorator;
  const elevated_button = flutter_sdk.src__material__elevated_button;
  const binding = flutter_sdk.src__widgets__binding;
  var $46zapp_entry = Object.create(dart.library);
  var main = Object.create(dart.library);
  var $toString = dartx.toString;
  var $contains = dartx.contains;
  dart._checkModuleNullSafetyMode(true);
  var T = {
    VoidTovoid: () => (T.VoidTovoid = dart.constFn(dart.fnType(dart.void, [])))(),
    ListOfString: () => (T.ListOfString = dart.constFn(core.List$(core.String)))(),
    ListOfStringTodynamic: () => (T.ListOfStringTodynamic = dart.constFn(dart.fnType(dart.dynamic, [T.ListOfString()])))(),
    JSArrayOfString: () => (T.JSArrayOfString = dart.constFn(_interceptors.JSArray$(core.String)))(),
    dynamicToNull: () => (T.dynamicToNull = dart.constFn(dart.fnType(core.Null, [dart.dynamic])))(),
    VoidToNull: () => (T.VoidToNull = dart.constFn(dart.fnType(core.Null, [])))(),
    ObjectAndStackTraceTovoid: () => (T.ObjectAndStackTraceTovoid = dart.constFn(dart.fnType(dart.void, [core.Object, core.StackTrace])))(),
    ZoneAndZoneDelegateAndZone__Tovoid: () => (T.ZoneAndZoneDelegateAndZone__Tovoid = dart.constFn(dart.fnType(dart.void, [async.Zone, async.ZoneDelegate, async.Zone, core.String])))(),
    GlobalKeyOfFormState: () => (T.GlobalKeyOfFormState = dart.constFn(framework.GlobalKey$(form.FormState)))(),
    StringN: () => (T.StringN = dart.constFn(dart.nullable(core.String)))(),
    StringNToStringN: () => (T.StringNToStringN = dart.constFn(dart.fnType(T.StringN(), [T.StringN()])))(),
    ValueKeyOfString: () => (T.ValueKeyOfString = dart.constFn(key.ValueKey$(core.String)))(),
    StringNTovoid: () => (T.StringNTovoid = dart.constFn(dart.fnType(dart.void, [T.StringN()])))(),
    JSArrayOfWidget: () => (T.JSArrayOfWidget = dart.constFn(_interceptors.JSArray$(framework.Widget)))()
  };
  const CT = Object.create({
    _: () => (C, CT)
  });
  dart.defineLazy(CT, {
    get C0() {
      return C[0] = dart.fn(main.main, T.VoidTovoid());
    }
  }, false);
  var C = [void 0];
  var I = ["file:///zapp/project/lib/main.dart"];
  $46zapp_entry.runAppGuarded = function runAppGuarded() {
    async.runZonedGuarded(core.Null, dart.fn(() => {
      if (T.ListOfStringTodynamic().is(C[0] || CT.C0)) {
        T.ListOfStringTodynamic().as(C[0] || CT.C0)(T.JSArrayOfString().of([]));
      } else {
        (C[0] || CT.C0)();
      }
      if (js.context.hasProperty("__notifyFlutterRendered")) {
        async.Future.delayed(new core.Duration.new({milliseconds: 250})).then(core.Null, dart.fn(_ => {
          js.context.callMethod("__notifyFlutterRendered", [false]);
        }, T.dynamicToNull()));
      }
    }, T.VoidToNull()), dart.fn((e, stackTrace) => {
      if (js.context.hasProperty("zappHandlerUserError")) {
        js.context.callMethod("zappHandlerUserError", [e[$toString](), stackTrace.toString()]);
      }
    }, T.ObjectAndStackTraceTovoid()), {zoneSpecification: new async._ZoneSpecification.new({print: dart.fn((self, parent, zone, line) => {
          if (js.context.hasProperty("zappHandlerUserPrint")) {
            js.context.callMethod("zappHandlerUserPrint", [line]);
          }
        }, T.ZoneAndZoneDelegateAndZone__Tovoid())})});
  };
  $46zapp_entry.main = function main$() {
    return async.async(dart.void, function* main() {
      yield ui.webOnlyWarmupEngine({runApp: dart.fn(() => {
          $46zapp_entry.runAppGuarded();
        }, T.VoidToNull()), registerPlugins: dart.fn(() => {
        }, T.VoidToNull())});
    });
  };
  main.MyApp = class MyApp extends framework.StatefulWidget {
    createState() {
      return new main._MyAppState.new();
    }
    static ['_#new#tearOff']() {
      return new main.MyApp.new();
    }
  };
  (main.MyApp.new = function() {
    main.MyApp.__proto__.new.call(this);
    ;
  }).prototype = main.MyApp.prototype;
  dart.addTypeTests(main.MyApp);
  dart.addTypeCaches(main.MyApp);
  dart.setMethodSignature(main.MyApp, () => ({
    __proto__: dart.getMethods(main.MyApp.__proto__),
    createState: dart.fnType(main._MyAppState, [])
  }));
  dart.setLibraryUri(main.MyApp, I[0]);
  var _formKey = dart.privateName(main, "_formKey");
  var _trySubmit = dart.privateName(main, "_trySubmit");
  main._MyAppState = class _MyAppState extends framework.State$(main.MyApp) {
    [_trySubmit]() {
      let _isValid = dart.nullCheck(this[_formKey].currentState).validate();
      focus_scope.FocusScope.of(this.context).unfocus();
      if (_isValid) {
        dart.nullCheck(this[_formKey].currentState).save();
      }
      core.print(this.userEmail);
      core.print(this.userName);
      core.print(this.password);
    }
    build(context) {
      return new app.MaterialApp.new({home: new scaffold.Scaffold.new({appBar: new app_bar.AppBar.new({title: new text.Text.new("Flutter Forms")}), body: new basic.Center.new({child: new card.Card.new({shape: new rounded_rectangle_border.RoundedRectangleBorder.new({borderRadius: new border_radius.BorderRadius.all(new ui.Radius.circular(20))}), margin: new edge_insets.EdgeInsets.all(30), child: new basic.Padding.new({padding: new edge_insets.EdgeInsets.all(20), child: new form.Form.new({key: this[_formKey], child: new basic.Column.new({mainAxisSize: flex.MainAxisSize.min, children: T.JSArrayOfWidget().of([new text_form_field.TextFormField.new({validator: dart.fn(value => {
                          if (value == null || !value[$contains]("@")) {
                            return "Please enter a valid email address";
                          }
                          return null;
                        }, T.StringNToStringN()), key: new (T.ValueKeyOfString()).new("email"), keyboardType: text_input.TextInputType.emailAddress, decoration: new input_decorator.InputDecoration.new({labelText: "UserEmail"}), onSaved: dart.fn(value => {
                          this.userEmail = dart.nullCast(value, core.String);
                        }, T.StringNTovoid())}), new text_form_field.TextFormField.new({validator: dart.fn(value => {
                          if (value == null || value.length < 3) {
                            return "Please enter a valid username";
                          }
                          return null;
                        }, T.StringNToStringN()), key: new (T.ValueKeyOfString()).new("username"), decoration: new input_decorator.InputDecoration.new({labelText: "UserName"}), onSaved: dart.fn(value => {
                          this.userName = dart.nullCast(value, core.String);
                        }, T.StringNTovoid())}), new text_form_field.TextFormField.new({validator: dart.fn(value => {
                          if (value == null || value.length < 6) {
                            return "Password must be atleast 7 characters";
                          }
                          return null;
                        }, T.StringNToStringN()), key: new (T.ValueKeyOfString()).new("password"), decoration: new input_decorator.InputDecoration.new({labelText: "UserPassword"}), obscureText: true, onSaved: dart.fn(value => {
                          this.password = dart.nullCast(value, core.String);
                        }, T.StringNTovoid())}), new basic.SizedBox.new({height: 20}), new elevated_button.ElevatedButton.new({onPressed: dart.bind(this, _trySubmit), child: new text.Text.new("Submit Form")})])})})})})})})});
    }
    static ['_#new#tearOff']() {
      return new main._MyAppState.new();
    }
  };
  (main._MyAppState.new = function() {
    this[_formKey] = T.GlobalKeyOfFormState().new();
    this.userEmail = "";
    this.userName = "";
    this.password = "";
    main._MyAppState.__proto__.new.call(this);
    ;
  }).prototype = main._MyAppState.prototype;
  dart.addTypeTests(main._MyAppState);
  dart.addTypeCaches(main._MyAppState);
  dart.setMethodSignature(main._MyAppState, () => ({
    __proto__: dart.getMethods(main._MyAppState.__proto__),
    [_trySubmit]: dart.fnType(dart.void, []),
    build: dart.fnType(framework.Widget, [framework.BuildContext])
  }));
  dart.setLibraryUri(main._MyAppState, I[0]);
  dart.setFieldSignature(main._MyAppState, () => ({
    __proto__: dart.getFields(main._MyAppState.__proto__),
    [_formKey]: dart.finalFieldType(framework.GlobalKey$(form.FormState)),
    userEmail: dart.fieldType(core.String),
    userName: dart.fieldType(core.String),
    password: dart.fieldType(core.String)
  }));
  main.main = function main$0() {
    binding.runApp(new main.MyApp.new());
  };
  dart.trackLibraries("zapp_user_main", {
    "file:///zapp/project/.zapp_entry.dart": $46zapp_entry,
    "file:///zapp/project/lib/main.dart": main
  }, {
  }, '{"version":3,"sourceRoot":"","sources":["/zapp/project/.zapp_entry.dart","/zapp/project/lib/main.dart"],"names":[],"mappings":";;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;AA4CI,IA1BF,iCAAgB;AACd,UAAoB,6BAGD;AAF8B,QAA9B,AAAkB,6BAElB,eAF2B;;AAEL,QAAF,CAApB;;AAEnB,UAAO,AAAQ,uBAAY;AAKvB,QAJK,AAAqC,qBAA7B,qCAAuB,uBAAW,QAAC;AAG9C,UAFC,AAAQ,sBAAW,2BAA2B,CAC/C;;;wBAIL,SAAC,GAAG;AACL,UAAO,AAAQ,uBAAY;AAIvB,QAHC,AAAQ,sBAAW,wBAAwB,CAC5C,AAAE,CAAD,eACD,AAAW,UAAD;;2DAGM,yCACb,SAAC,MAAM,QAAQ,MAAM;AAC1B,cAAO,AAAQ,uBAAY;AAC4B,YAAlD,AAAQ,sBAAW,wBAAwB,CAAC,IAAI;;;EAI3D;;AAEiB;AAQd,MAPD,MAAS,gCACC;AACS,UAAf;6CAEe;;IAIrB;;;;AChD+B;IAAa;;;;;;;;EAC5C;;;;;;;;;;;;AASS,qBAAgC,AAAE,eAAvB,AAAS;AACO,MAArB,AAAY,0BAAT;AACd,UAAI,QAAQ;AACmB,QAAR,AAAE,eAAvB,AAAS;;AAEK,MAAhB,WAAM;AACS,MAAf,WAAM;AACS,MAAf,WAAM;IACR;UAG0B;AACxB,YAAO,gCACC,mCACI,+BACC,kBAAK,0BAER,6BACG,0BACE,uEACsB,mCAClB,uBAAS,gBAGD,+BAAI,YAChB,gCACe,+BAAI,YACjB,wBACA,uBACE,oCACsB,iCACjB,wBACR,kDACa,QAAC;AACV,8BAAI,AAAM,KAAD,aAAa,AAAM,KAAD,YAAU;AACnC,kCAAO;;AAET,gCAAO;uDAEJ,+BAAS,wBACc,mDAChB,oDACC,wBAEJ,QAAC;AACmB,0BAA3B,iBAAkB,cAAN,KAAK;iDAGrB,kDACa,QAAC;AACV,8BAAI,AAAM,KAAD,YAAY,AAAM,AAAO,KAAR,UAAU;AAClC,kCAAO;;AAET,gCAAO;uDAEJ,+BAAS,yBACF,oDACC,uBAEJ,QAAC;AACkB,0BAA1B,gBAAiB,cAAN,KAAK;iDAGpB,kDACa,QAAC;AACV,8BAAI,AAAM,KAAD,YAAY,AAAM,AAAO,KAAR,UAAU;AAClC,kCAAO;;AAET,gCAAO;uDAEJ,+BAAS,yBACF,oDACC,+BAEA,eACJ,QAAC;AACkB,0BAA1B,gBAAiB,cAAN,KAAK;iDAGpB,gCACU,MAEV,6DACa,0BACJ,kBAAK;IAUhC;;;;;;IApGM,iBAAW;IACV,iBAAY;IACZ,gBAAW;IACX,gBAAW;;;EAkGpB;;;;;;;;;;;;;;;;;AA9GiB,IAAf,eAAO;EACT","file":"main.js"}');
  // Exports:
  return {
    zapp__project__$46zapp_entry: $46zapp_entry,
    zapp__project__lib__main: main
  };
}));

//# sourceMappingURL=main.js.map

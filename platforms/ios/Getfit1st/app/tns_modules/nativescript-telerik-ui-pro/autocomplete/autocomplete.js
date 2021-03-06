Object.defineProperty(exports, "__esModule", { value: true });
var viewModule = require("tns-core-modules/ui/core/view");
var commonModule = require("./autocomplete-common");
var builder = require("tns-core-modules/ui/builder");
var imageModule = require("tns-core-modules/ui/image");
var view_1 = require("tns-core-modules/ui/core/view");
require("utils/module-merge").merge(commonModule, exports);
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.suggestionItemTemplate = "suggestionItemTemplate";
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
var SuggestionView = (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SuggestionView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    SuggestionView.prototype.updateView = function () {
        this.updateHeight();
    };
    SuggestionView.prototype.updateHeight = function () {
        if (this.owner && this.owner.ios) {
            this.owner.ios.suggestionViewHeight = this.suggestionViewHeight;
        }
    };
    SuggestionView.prototype.updateTemplate = function (value) {
        // TODO: Implement this, probably with tns-core-modules/ui/builder same as RadListView templates
        // this._ios.suggestionView = newValue;
        this.updateHeight();
    };
    SuggestionView.prototype.onSuggestionViewHeightChanged = function (oldValue, newValue) {
        this.updateHeight();
    };
    SuggestionView.prototype.onSuggestionItemTemplateChanged = function (oldValue, newValue) {
        this.updateTemplate(newValue);
    };
    return SuggestionView;
}(commonModule.SuggestionView));
exports.SuggestionView = SuggestionView;
var SuggestionViewCell = (function (_super) {
    __extends(SuggestionViewCell, _super);
    function SuggestionViewCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionViewCell.new = function () {
        var instance = _super.new.call(this);
        return instance;
    };
    SuggestionViewCell.class = function () {
        return SuggestionViewCell;
    };
    SuggestionViewCell.prototype.systemLayoutSizeFittingSize = function (targetSize) {
        var dimensions = this.layoutCell(this, undefined);
        return CGSizeMake(view_1.layout.toDeviceIndependentPixels(dimensions.measuredWidth), view_1.layout.toDeviceIndependentPixels(dimensions.measuredHeight));
    };
    SuggestionViewCell.prototype.layoutCell = function (cell, indexPath) {
        var itemViewDimensions = this.measureCell(this.view.itemView, indexPath);
        var cellView = this.view.itemView;
        viewModule.View.layoutChild(this.owner, cellView, 0, 0, itemViewDimensions.measuredWidth, itemViewDimensions.measuredHeight);
        return itemViewDimensions;
    };
    SuggestionViewCell.prototype.measureCell = function (cellView, sizeRestriction) {
        if (cellView) {
            var itemWidth = this.owner.getMeasuredWidth();
            var itemHeight = undefined;
            if (sizeRestriction !== undefined) {
                itemWidth = sizeRestriction.width;
                itemHeight = sizeRestriction.height;
            }
            var heightSpec, widthSpec;
            if (itemHeight === undefined) {
                heightSpec = view_1.layout.makeMeasureSpec(0, view_1.layout.UNSPECIFIED);
            }
            else {
                heightSpec = view_1.layout.makeMeasureSpec(itemHeight, view_1.layout.EXACTLY);
            }
            widthSpec = view_1.layout.makeMeasureSpec(itemWidth, view_1.layout.EXACTLY);
            return viewModule.View.measureChild(this.owner, cellView, widthSpec, heightSpec);
        }
        return undefined;
    };
    return SuggestionViewCell;
}(TKListViewCell));
var TokenModel = (function (_super) {
    __extends(TokenModel, _super);
    function TokenModel(text, image) {
        var _this = _super.call(this, text, image) || this;
        _this._ios = new TKAutoCompleteToken(NSString.stringWithCString(text));
        if (image) {
            if (image.startsWith("res://")) {
                var name = image.substring(6, image.length);
                _this._ios.image = UIImage.imageNamed(name);
            }
            else {
                _this._ios.image = UIImage.imageNamed(image);
            }
        }
        return _this;
    }
    Object.defineProperty(TokenModel.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
}(commonModule.TokenModel));
exports.TokenModel = TokenModel;
var CompletionModeImpl = (function (_super) {
    __extends(CompletionModeImpl, _super);
    function CompletionModeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompletionModeImpl.new = function () {
        return _super.new.call(this);
    };
    ;
    return CompletionModeImpl;
}(NSObject));
CompletionModeImpl.StartsWith = function (input, suggestions, owner) {
    var result = NSMutableArray.alloc().initWithCapacity(suggestions.length);
    var nsResult = new Array();
    for (var i = 0; i < suggestions.length; i++) {
        var current = suggestions.getItem(i);
        var upperCase = current.ios.text.toUpperCase();
        if (upperCase['startsWith'](input.toUpperCase())) {
            result.addObject(current.ios);
            nsResult.push(current);
        }
    }
    owner.filteredItems = nsResult;
    return result;
};
CompletionModeImpl.Contains = function (input, suggestions, owner) {
    var result = NSMutableArray.alloc().initWithCapacity(suggestions.length);
    var nsResult = new Array();
    for (var i = 0; i < suggestions.length; i++) {
        var current = suggestions.getItem(i);
        var upperCase = current.ios.text.toUpperCase();
        if (upperCase.indexOf(input.toUpperCase()) != -1) {
            result.addObject(current.ios);
            nsResult.push(current);
        }
    }
    owner.filteredItems = nsResult;
    return result;
};
//suggestion view data source
var SuggestionViewDataSourceImpl = (function (_super) {
    __extends(SuggestionViewDataSourceImpl, _super);
    function SuggestionViewDataSourceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionViewDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    SuggestionViewDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        return this;
    };
    SuggestionViewDataSourceImpl.prototype.listViewNumberOfItemsInSection = function (listView, section) {
        return this._owner.suggestionView.ios.items ? this._owner.suggestionView.ios.items.count : 0; //todo: update to support custom DataSource object from owner
    };
    SuggestionViewDataSourceImpl.prototype.listViewCellForItemAtIndexPath = function (listView, indexPath) {
        var cell = listView.dequeueReusableCellWithReuseIdentifierForIndexPath("defaultCell", indexPath);
        if (!cell.owner) {
            cell.backgroundView.stroke = null;
            cell.selectedBackgroundView.stroke = null;
            cell.offsetContentViewInMultipleSelection = false;
            cell.owner = this._owner;
            var template = new Object();
            template.itemView = builder.parse(this._owner.suggestionView.suggestionItemTemplate, undefined);
            cell.view = template;
            cell.contentView.addSubview(template.itemView.ios);
            this._owner._addView(template.itemView);
        }
        cell.view.itemView.bindingContext = this._owner.filteredItems[indexPath.row];
        return cell;
    };
    SuggestionViewDataSourceImpl.prototype.numberOfSectionsInListView = function (listView) {
        return 1;
    };
    return SuggestionViewDataSourceImpl;
}(NSObject));
SuggestionViewDataSourceImpl.ObjCProtocols = [TKListViewDataSource];
var AutoCompleteAsyncDataSourceImpl = (function (_super) {
    __extends(AutoCompleteAsyncDataSourceImpl, _super);
    function AutoCompleteAsyncDataSourceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentCompletionMode = CompletionModeImpl.StartsWith;
        return _this;
    }
    AutoCompleteAsyncDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteAsyncDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        return this;
    };
    AutoCompleteAsyncDataSourceImpl.prototype.autoCompleteCompletionsForString = function (autocomplete, input) {
        var self = this;
        this._owner.asyncCall(input).then(function (items) {
            var result = NSMutableArray.new();
            var nsResult = new Array();
            if (self._owner.completionMode == commonModule.CompletionMode.StartsWith) {
                for (var i = 0; i < items.length; i++) {
                    var current = items[i];
                    var upperCase = current.ios.text.toUpperCase();
                    if (upperCase.startsWith(input.toUpperCase())) {
                        result.addObject(current.ios);
                        nsResult.push(current);
                    }
                }
            }
            else {
                for (var i = 0; i < items.length; i++) {
                    var current = items[i];
                    var upperCase = current.ios.text.toUpperCase();
                    if (upperCase.indexOf(input.toUpperCase()) != -1) {
                        result.addObject(current.ios);
                        nsResult.push(current);
                    }
                }
            }
            self._owner.filteredItems = nsResult;
            self._owner.ios.completeSuggestionViewPopulation(result);
        });
    };
    return AutoCompleteAsyncDataSourceImpl;
}(NSObject));
AutoCompleteAsyncDataSourceImpl.ObjCProtocols = [TKAutoCompleteDataSource];
// AutoCompleteDataSource
var AutoCompleteDataSourceImpl = (function (_super) {
    __extends(AutoCompleteDataSourceImpl, _super);
    function AutoCompleteDataSourceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentCompletionMode = CompletionModeImpl.StartsWith;
        return _this;
    }
    AutoCompleteDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        return this;
    };
    AutoCompleteDataSourceImpl.prototype.autoCompleteCompletionForPrefix = function (autocomplete, prefix) {
        var suggestions = NSMutableArray.new();
        if (prefix == "") {
            this._owner.ios.suggestionView.hide();
            return suggestions;
        }
        else {
            return this.currentCompletionMode(prefix, this._owner.items, this._owner);
        }
    };
    return AutoCompleteDataSourceImpl;
}(NSObject));
AutoCompleteDataSourceImpl.ObjCProtocols = [TKAutoCompleteDataSource];
//AutoCompleteDelagate
var AutoCompleteDelegateImpl = (function (_super) {
    __extends(AutoCompleteDelegateImpl, _super);
    function AutoCompleteDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCompleteDelegateImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteDelegateImpl.prototype.initWithOwner = function (owner) {
        this._owner = owner;
        this._firstInput = true;
        return this;
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteWillShowSuggestionList = function (autocomplete, suggestionList) {
        var args = new commonModule.AutoCompleteEventData(commonModule.RadAutoCompleteTextView.suggestionViewBecameVisibleEvent, autocomplete, suggestionList);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidAddToken = function (autocomplete, token) {
        var args = new commonModule.AutoCompleteEventData(commonModule.RadAutoCompleteTextView.tokenAddedEvent, autocomplete, token);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidRemoveToken = function (autocomplete, token) {
        var args = new commonModule.AutoCompleteEventData(commonModule.RadAutoCompleteTextView.tokenRemovedEvent, autocomplete, token);
        this._owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidSelectToken = function (autocomplete, token) {
        var args = new commonModule.AutoCompleteEventData(commonModule.RadAutoCompleteTextView.tokenSelectedEvent, autocomplete, token);
        this._owner.notify(args);
    };
    return AutoCompleteDelegateImpl;
}(NSObject));
AutoCompleteDelegateImpl.ObjCProtocols = [TKAutoCompleteDelegate];
var RadAutoCompleteTextView = (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        var _this = _super.call(this) || this;
        _this.filteredItems = new Array();
        _this._ios = TKAutoCompleteTextView.new();
        return _this;
    }
    RadAutoCompleteTextView.prototype.createNativeView = function () {
        this._ios.minimumCharactersToSearch = 1;
        this._dataSource = AutoCompleteDataSourceImpl.new().initWithOwner(this);
        this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
        this._ios.suggestionView.registerClassForCellWithReuseIdentifier(SuggestionViewCell.class(), "defaultCell");
        this._suggestionViewDataSource = SuggestionViewDataSourceImpl.new().initWithOwner(this);
        this._ios.suggestionView.dataSource = this._suggestionViewDataSource;
        this._ios.dataSource = this._dataSource;
        this._delegate = AutoCompleteDelegateImpl.new().initWithOwner(this);
        this._ios.delegate = this._delegate;
        return this._ios;
    };
    RadAutoCompleteTextView.prototype.disposeNativeView = function () {
        this._ios.delegate = undefined;
        this._ios.dataSource = undefined;
        this._dataSource = undefined;
        this._ios = undefined;
        this._delegate = undefined;
    };
    RadAutoCompleteTextView.prototype.resetAutocomplete = function () {
        this._ios.resetAutocompleteState();
    };
    RadAutoCompleteTextView.prototype.addToken = function (token) {
        var native = new TKAutoCompleteToken(NSString.stringWithCString(token.text));
        this._ios.addToken(native);
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
        var native = new TKAutoCompleteToken(NSString.stringWithCString(token.text));
        this._ios.insertTokenAtIndex(native, index);
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
        var native = new TKAutoCompleteToken(NSString.stringWithCString(token.text));
        this._ios.removeToken(native);
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
        this._ios.removeTokenAtIndex(index);
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
        this._ios.removeAllTokens();
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
        return this._ios.tokens;
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
        return this._ios.tokenAtIndex(index);
    };
    RadAutoCompleteTextView.prototype.onDisplayModeChanged = function (oldValue, newValue) {
        this.adjustDisplayMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onLayoutModeChanged = function (oldValue, newValue) {
        this.adjustLayoutMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onSuggestModeChanged = function (oldValue, newValue) {
        this.adjustSuggestMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onLoadSuggestionsAsyncChanged = function (oldValue, newValue) {
        this.asyncCall = newValue;
        this._dataSource = AutoCompleteAsyncDataSourceImpl.new().initWithOwner(this);
        this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
        this._ios.dataSource = this._dataSource;
    };
    RadAutoCompleteTextView.prototype.onCompletionModeChanged = function (oldValue, newValue) {
        this.adjustCompletionMode(newValue);
    };
    RadAutoCompleteTextView.prototype.onSuggestionViewChanged = function (oldValue, newValue) {
        var suggestionView = newValue;
        suggestionView.owner = this;
        suggestionView.ios = this._ios.suggestionView;
        this._ios.suggestionViewHeight = suggestionView.suggestionViewHeight;
        this._ios.suggestionView.reloadData();
        suggestionView.updateView();
    };
    RadAutoCompleteTextView.prototype.onMinimumCharactersToSearchChanged = function (oldValue, newValue) {
        this._ios.minimumCharactersToSearch = newValue;
    };
    RadAutoCompleteTextView.prototype.onShowCloseButtonChanged = function (oldValue, newValue) {
        this.updateCloseButton();
    };
    RadAutoCompleteTextView.prototype.onCloseButtonImageSrcChanged = function (oldValue, newValue) {
        this.updateCloseButton();
    };
    RadAutoCompleteTextView.prototype.updateCloseButton = function () {
        if (!this.closeButtonImageSrc && this.showCloseButton) {
            return;
        }
        var image = new imageModule.Image();
        image.src = this.closeButtonImageSrc;
        if (image) {
            this._ios.closeButton.setImageForState(image.ios.image, 0 /* Normal */);
        }
    };
    RadAutoCompleteTextView.prototype.adjustCompletionMode = function (value) {
        if (this._ios && value) {
            if (value == commonModule.CompletionMode.StartsWith) {
                this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
            }
            else {
                this._dataSource.currentCompletionMode = CompletionModeImpl.Contains;
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustDisplayMode = function (value) {
        if (this._ios && value) {
            this._ios.displayMode = (value === commonModule.DisplayMode.Plain) ?
                0 /* Plain */ :
                1 /* Tokens */;
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestMode = function (value) {
        if (this._ios && value) {
            if (value == commonModule.SuggestMode.Suggest) {
                this._ios.suggestMode = 0 /* Suggest */;
            }
            else if (value == commonModule.SuggestMode.Append) {
                this._ios.suggestMode = 1 /* Append */;
            }
            else {
                this._ios.suggestMode = 2 /* SuggestAppend */;
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustLayoutMode = function (value) {
        if (value && this._ios) {
            this._ios.layoutMode = (value === commonModule.LayoutMode.Horizontal) ?
                0 /* Horizontal */ :
                1 /* Wrap */;
        }
    };
    return RadAutoCompleteTextView;
}(commonModule.RadAutoCompleteTextView));
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
